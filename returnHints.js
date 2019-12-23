const wordFullDict = require('./wordFullDict');

module.exports = async (curWord) => {
    let result = await wordFullDict(curWord);
    let label = ['synonyms :-', 'antonyms :-', 'defnitions :-', 'examples :-'];
    let mainReturn = [];
    for(let i = 0; i < result.length; i++){

        if(result[i].contains){
            resultArray = result[i].arrayWords;
            
            if( i > 1 ){
                resultArray.forEach((def) => {
                    mainReturn.push({
                        label : label[i],
                        returning : def.text
                    });
                    
                });
            } else {
                resultArray.forEach((def) => {
                    mainReturn.push({
                        label : label[i],
                        returning : def
                    });
                });
            }
        }
    }
    return(mainReturn);
}

