const randomWord = require('./randomWord');
const reqHint = require('./reqHint');
const readline = require('readline-sync');
const reqHintCount = require('./reqHintCount');

module.exports = async () => {
    let curScore = 0;// curScore keeps count of score 
    let hitWords = []; 
    // hitWords keep track of words that already been hit
    
    
    let word = await randomWord();
    hitWords.push(word);
    // if the word is taken then puts into the hitsWords
    


    let curWordHitHints = [];// it keeps track of current word hitted hints
    let totalCurHints = await reqHintCount(word);
    // totalCurHints acquires the number of hints are existing for given word
    
    let curWordHint = await reqHint(word);// it acquires the hint of a given word with related label
    curWordHitHints.push(curWordHint.returning); // it puts the acquired hint into the curWordHints to avoid getting duplicate hints
    console.log(`guess the word ! \n ${curWordHint.label} : ${curWordHint.returning} \n`);
    

    let guess_word;
    let choice = 1;
    while (true) {
        switch (choice) {
            case 1:
                
                    guess_word = readline.question(`Enter Guess:`);
                    if (guess_word === word) {
                        console.log('Hurrah! Correct !');
                        curScore += 10;
                        console.log(`your score is ${curScore}`);
                        
                        word = await randomWord(); 
                        if (hitWords.length === 42) {
                            // if we are acquired 42 words then we are done.
                            console.log('Running out of words');
                            choice = 0;
                            break;
                        }       

                        while (hitWords.includes(word)) {// Checks the hitWords to avoid duplicate words.
                            word = await randomWord();
                        }

                        hitWords.push(word);

                        curWordHitHints = [];
                        totalCurHints = reqHintCount(word);
                        curWordHint = await reqHint(word);
                        while (curWordHitHints.includes(curWordHint.returning)) {// iterates utill we get new hint 
                            curWordHint = await reqHint(word);
                        }

                        curWordHitHints.push(curWordHint.returning);// the pushes into array to keep track.

                        console.log('\n2.I wanna try guessing another word \n0.End the game.\n');
                        
                        
                        
                    } else {
                        console.log('Incorrect');
                        if (curWordHitHints.length === totalCurHints) {
                            word = await randomWord(); 
                            if (hitWords.length === 42) {
                                // if we are acquired 42 words then we are done.
                                console.log('Running out of words');
                                choice = 0;
                                break;
                            }       

                            while (hitWords.includes(word)) {// Checks the hitWords to avoid duplicate words.
                                word = await randomWord();
                            }

                            hitWords.push(word);

                            curWordHitHints = [];
                            totalCurHints = reqHintCount(word);
                            curWordHint = await reqHint(word);
                            while (curWordHitHints.includes(curWordHint.returning)) {// iterates utill we get new hint 
                                curWordHint = await reqHint(word);
                            }

                            curWordHitHints.push(curWordHint.returning);

                        }
                        curScore -= 2;
                        console.log(`you score is ${curScore}`);
                        console.log('1.I wanna try again\n2.Give me a hint\n3.I want to skip\n0.End the game');  
                        
                    }

                    input = readline.question('Enter your choice:');
                    choice = parseInt(input);
                
                break;
            case 2:
                    if (curWordHitHints.length === totalCurHints) {
                        let shuffled = word.split('').sort(() => {return 0.5 - Math.random()}).join('');
                        console.log(`Hint:  Jumble : ${shuffled} \n`);

                    } else {
                        curWordHint = await reqHint(word);
                        while (curWordHitHints.includes(curWordHint.returning)) {
                            curWordHint = await reqHint(word);
                        }
                        curWordHitHints.push(curWordHint.returning);

                        console.log(`Hint:  ${curWordHint.label} : ${curWordHint.returning} \n`);
                    }

                    choice = 1;           
                break;
            case 3:
                    console.log(`** The word is ${word} **`);
                    curScore -= 4;
                    console.log(`you score is ${curScore} \n`);
                    
                    word = await randomWord();                 
                    while (hitWords.includes(word)) {
                        word = await randomWord();
                    }

                    hitWords.push(word);
                    if (hitWords.length === 42) {
                        console.log('Running out of words');
                        choice = 0;
                    }

                    curWordHitHints = [];
                    totalCurHints = reqHintCount(word);
                    curWordHint = await reqHint(word);
                    while (curWordHitHints.includes(curWordHint.returning)) {
                        curWordHint = await reqHint(word);
                    }

                    curWordHitHints.push(curWordHint);
                    
                    
                    console.log('2.I wanna try guessing another word \n0.End the game.');
                    input = readline.question('Enter your choice:');
                    choice = parseInt(input);
                break;
        
            default:
                    console.log('enter desired choice');
                    console.log('1.I wanna try again\n2.Give me a hint\n3.I want to skip\n0.End the game');
                    input = readline.question('Enter your choice:');
                    choice = parseInt(input);
                break;
        }

        if (choice === 0) break;
    }
} 