const fetch = require('node-fetch');
const reqKey = require('./reqKey');
const API_KEY = reqKey();
const HOST = 'https://fourtytwowords.herokuapp.com';

module.exports =  async (curWord) => {

    
    let wordSynUrl = HOST + `/word/${curWord}/relatedWords?api_key=` + API_KEY;
    const response = await fetch(wordSynUrl);
    let result = await response.json();
    
    let arrayWords ;
    let index = 0;
    
    
   if( (result[0].relationshipType === 'synonym')) { 

        //result index is 0 because synonym can be in 0 or 1 index
        //it checks in 0 index first if not it will be in index 1

        arrayWords = result[index].words;
        return {
            contains : 1,
            arrayWords : arrayWords
        };
    } else {
        index = 1; 
        arrayWords = result[index].words;
        return {
            contains : 1,//contain intimates that the arrayWords contains consistent data that corresponds to a given word
            arrayWords : arrayWords
        };
    }
}
