const wordFullDict = require('./wordFullDict');

module.exports = async (curWord) => {
    let result = await wordFullDict(curWord);
    let label = ['synonym','antonym','definition'];
    let index = Math.floor(Math.random()*3);
    //index points randomly to a either of the synonym or antonym or defnition to acquire hint.  
    let resultArray;
    let arrayIndex;
    let returningArray = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    
    if(result[index].contains || (index = 3)){
        //if the index of antonym can either exist or not. if exists it gives hint from antonym itself.
        // if the result does'nt contain reliable data i.e not its original data it will asign index to 3.
        if( index == 3 ) {
            index = Math.random() < 0.5 ? 0 : 2;
            //here the index will be assigned as either synonym or definition based on the random function.
        }

        arrayIndex =Math.floor(Math.random()*(result[index].arrayWords.length-1));
        //randomly takes an index in the array of hints 
        resultArray = result[index].arrayWords;
        

        if( index > 1 ){
            resultArray.forEach((def) => {
                returningArray.push( def.text );
            });
        } else {
            resultArray.forEach((def) => {
                returningArray.push( def );
            });
        }
    }
    return {
        label : label[index],
        returning : returningArray[arrayIndex]
    };
    
}
