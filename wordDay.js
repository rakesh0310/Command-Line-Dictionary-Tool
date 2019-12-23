const wordFullDict = require('./wordFullDict');
async function wordDay (curWord) {
    let result = [];
    let label = ['synonyms :-', 'antonyms :-', 'defnitions :-', 'examples :-'];
    result = await wordFullDict(curWord);
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
wordDay(process.argv.splice(2));