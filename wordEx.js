const fetch = require('node-fetch');
const reqKey = require('./reqKey');
const API_KEY = reqKey();
const HOST = 'https://fourtytwowords.herokuapp.com';

module.exports  = async (curWord) => {

    
    let wordExUrl = HOST + `/word/${curWord}/examples?api_key=` + API_KEY;
    const response = await fetch(wordExUrl);
    let result = await response.json();
    let arrayWords = result.examples;
    
    return {
        contains : 1,
        arrayWords : arrayWords
    };
}
