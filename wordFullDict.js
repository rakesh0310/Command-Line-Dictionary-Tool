const wordAntonym = require('./wordAnt');
const wordDefinition = require('./wordDef');
const wordExamples = require('./wordEx');
const wordSynonym = require('./wordSyn');

async function wordFullDict(curWord) {

    let promises = [wordSynonym(curWord), wordAntonym(curWord), wordDefinition(curWord), wordExamples(curWord)];
    let result = Promise.all(promises)
        .then(result => { return result; })
        .catch(err => { return err; });
    let label = ['synonyms :-', 'antonyms :-', 'defnitions :-', 'examples :-'];
    let resultArray;
    for(let i = 0; i < result.length; i++){

        if(result[i].contains){
            resultArray = result[i].arrayWords;
            console.log(`${label[i]} \n`);
            if( i > 1 ){
                resultArray.forEach((def) => {
                    console.log( '> ' + def.text + '\n' );
                });
            } else {
                resultArray.forEach((def) => {
                    console.log( '> ' + def + '\n' );
                });
            }
        }
    }


}
wordFullDict(process.argv.splice(2));