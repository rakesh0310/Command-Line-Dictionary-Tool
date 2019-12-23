const wordFullDict = require('./wordFullDict');

async function reqHintCount (curWord) {
    let result = [];
    result = await wordFullDict(curWord);
    let resultArray = 0;
    for(let i = 0; i < (result.length - 1); i++){

        if(result[i].contains){
            resultArray += result[i].arrayWords.length ;
        }
    }
    console.log(resultArray);
}
reqHintCount(process.argv.splice(2));