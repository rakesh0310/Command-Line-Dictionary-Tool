const fetch = require('node-fetch');
const API_KEY = '61333f5e04ff167d8eafea290b3ab52e296d8d9df9d64f0f4e37895607658a2990f19f42469b61b9e3bbc16bcf84ee86b11ba7251b007fc1124e28272aa40ddf269201daa753deb68e7090060e67dd74';
const HOST = 'https://fourtytwowords.herokuapp.com';

module.exports = async (curWord) => {
    let wordAntUrl = HOST + `/word/${curWord}/relatedWords?api_key=` + API_KEY;
    const response = await fetch(wordAntUrl);
    let result = await response.json();
    
    let arrayWords = result[0].words;
    
   if( result[0].relationshipType === 'antonym' ){
       //Antonym always exists at 0 index 
       // if deos'nt exist at 0 then there is no antonym for the given word
        
       return{
            contains : 1,
            arrayWords : arrayWords
       };
    } else {
        
        return {
            contains : 0,//here contains intimates that the arrayWords contains genuine data for a given word 1 represents genuine
            arrayWords : arrayWords
        };
    }
}
