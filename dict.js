const randomWord = require('./randomWord');
const wordDef = require('./wordDef');
const wordDay = require('./wordDay');
const wordSyn = require('./wordSyn');
const wordAnt = require('./wordAnt');
const wordEx = require('./wordEx');
const wordPlay = require('./wordPlay');


async function dict() {
    
    let array = process.argv.splice(2);// Acquires the commands entered in Command line 
    // This array contains ex:['def', 'natural']
    let wordRes;
    let result;
    let key;
    console.log('please wait...');
    if(array.length){
        key = array[0];
        
        switch (key) {
            case 'def': {
                    wordRes = await wordDef(array[1].toLowerCase());
        
                    result = wordRes.arrayWords;

                    console.log('\n Defnitions:- \n');
                    result.forEach((def) => {
                    console.log( '> ' + def.text + '\n' );
                    });
                break;
            }
            case 'syn': {
                wordRes = await wordSyn(array[1].toLowerCase());
                wordRes.toLowerCase();
                result = wordRes.arrayWords;

                console.log('\n Synonyms:- \n');

                result.forEach((def) => {
                    console.log( '> ' + def + '\n' );
                });
                break;
            }
            case 'ant': {
                wordRes = await wordAnt(array[1].toLowerCase());
                if(wordRes.contains){
                    result = wordRes.arrayWords;

                    console.log('\n Antonyms:- \n');

                    result.forEach((def) => {
                        console.log( '> ' + def + '\n' );
                    });
                } else {
                    console.log('\n->>> This word Does\'nt contain Antonyms\n');
                }
                break;
            }
            case 'ex': {
                wordRes = await wordEx(array[1].toLowerCase());
                result = wordRes.arrayWords;
                
                console.log('\n Examples:- \n');

                result.forEach((def) => {
                    console.log( '> ' + def.text + '\n' );
                });
                break;
            }
            case 'dict':
                wordDay(array[1]);
                break;

            case 'play':
                wordPlay();
                break;    
            default:
                console.log('Invalid command !');
                break;
        }
    } else {
        console.log('\t\t** Word of the Day **\n');
        console.log('please wait...');
        wordRes = await randomWord();
        console.log(`\t->> ${wordRes}\n`);
        await wordDay(wordRes);
    }
}
dict();





