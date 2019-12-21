const fetch = require('node-fetch');
const api_key = '61333f5e04ff167d8eafea290b3ab52e296d8d9df9d64f0f4e37895607658a2990f19f42469b61b9e3bbc16bcf84ee86b11ba7251b007fc1124e28272aa40ddf269201daa753deb68e7090060e67dd74';
const host = 'https://fourtytwowords.herokuapp.com';

async function randomWord () {
    
    let random_word_url = host + '/words/randomWord?api_key=' + api_key;
    const response = await fetch(random_word_url);
    const json1 = await response.json();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    return json1.word;
}
console.log(randomWord());