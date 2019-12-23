const fetch = require('node-fetch');
const API_KEY = '61333f5e04ff167d8eafea290b3ab52e296d8d9df9d64f0f4e37895607658a2990f19f42469b61b9e3bbc16bcf84ee86b11ba7251b007fc1124e28272aa40ddf269201daa753deb68e7090060e67dd74';
const HOST = 'https://fourtytwowords.herokuapp.com';

module.exports = async () => {
    
    let randomWordUrl = HOST + '/words/randomWord?api_key=' + API_KEY;
    const response = await fetch(randomWordUrl);
    const json1 = await response.json();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    return json1.word;
}
