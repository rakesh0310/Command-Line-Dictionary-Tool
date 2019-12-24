const fetch = require('node-fetch');
const reqKey = require('./reqKey');
const API_KEY = reqKey();
const HOST = 'https://fourtytwowords.herokuapp.com';

module.exports = async () => {
    
    let randomWordUrl = HOST + '/words/randomWord?api_key=' + API_KEY;
    const response = await fetch(randomWordUrl);
    const json1 = await response.json();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    return json1.word;
}
