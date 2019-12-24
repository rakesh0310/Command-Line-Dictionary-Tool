const fetch = require('node-fetch');
const reqKey = require('./reqKey');
const API_KEY = reqKey();
const HOST = 'https://fourtytwowords.herokuapp.com';

module.exports = async (curWord) => {

    
    let wordDefUrl = HOST + `/word/${curWord}/definitions?api_key=` + API_KEY;
    const response = await fetch(wordDefUrl);
    let arrayWords = await response.json();
    
    return {
        contains : 1,
        arrayWords : arrayWords
    };
}
