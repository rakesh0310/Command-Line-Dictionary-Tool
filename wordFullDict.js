const wordAntonym = require('./wordAnt');
const wordDefinition = require('./wordDef');
const wordExamples = require('./wordEx');
const wordSynonym = require('./wordSyn');

module.exports = async (curWord) => {

    let promises = [wordSynonym(curWord), wordAntonym(curWord), wordDefinition(curWord), wordExamples(curWord)];
    let result =await Promise.all(promises)
        .then(result => { return result; })
        .catch(err => { return err; });
    return result;
    
}
