const fetch = require('node-fetch');
const reqKey = require('./reqKey');
const API_KEY = reqKey();
const HOST = 'https://fourtytwowords.herokuapp.com';

module.exports = async (curWord) => {
    let wordAntUrl = HOST + `/word/${curWord}/relatedWords?api_key=` + API_KEY;
    const response = await fetch(wordAntUrl);
    let result = await response.json();
    
    let arrayWords = result[0].words;
    
   if ( result[0].relationshipType === 'antonym' ) {
       //Antonym always exists at 0 index 
       // if deos'nt exist at 0 then there is no antonym for the given word
        
       return{
            contains : 1,
            arrayWords : arrayWords
       };
    } else {
        
        return {
            contains : 0,//here contains intimates that the arrayWords contains genuine data for a given word .1 represents genuine
            arrayWords : arrayWords
        };
    }
}
