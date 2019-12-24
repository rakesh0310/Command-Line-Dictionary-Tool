const randomWord = require('./randomWord');
const readline = require('readline-sync');
const returnHints = require('./returnHints');

module.exports = async () => {
    let curScore = 0;// curScore keeps count of score 
    let hitWords = []; 
    // hitWords keep track of words that already been hit
    
    console.log('please wait...');
    let word = await randomWord();
    hitWords.push(word); 
    let curWordHints = await returnHints(word);// it receives the current word hints

    let index = Math.floor(Math.random()*(curWordHints.length-1));
    let curWordHint = curWordHints[index];// it acquires the hint of a given word with related label
    
    console.log(`guess the word ! \n ${curWordHint.label} : ${curWordHint.returning} \n`);
    curWordHints.splice(index,1);

    let checked;// simple variable for a signal.

    let guess_word;
    let choice = 1;
    while (true) {
        switch (choice) {
            case 1:
                
                    guess_word = readline.question(`Enter Guess:`);
                    if (guess_word === word) {
                        console.log('Hurrah! Correct !');
                        curScore += 10;
                        console.log(`> your score is ${curScore}`);

                        console.log('please wait...');
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
                        
                        curWordHints = await returnHints(word);

                        // the pushes into array to keep track.

                        console.log('\n2.I wanna try guessing another word \n0.End the game.\n');
                        
                        
                        
                    } else {
                        console.log('Incorrect');
                        curScore -= 2;
                        if (curWordHints.length === 0 && checked === 1) {
                            choice = 3;
                            break;
                        }
                            
                        console.log(`you score is ${curScore}`);
                        console.log('\n\t1.I wanna try again\n\t2.Give me a hint\n\t3.I want to skip\n\t0.End the game');  
                        
                    }

                    input = readline.question('\nEnter your choice >');
                    choice = parseInt(input);
                
                break;
            case 2:
                    if (curWordHints.length === 0 ) {
                        checked = 1;
                        let shuffled = word.split('').sort(() => {return 0.5 - Math.random()}).join('');
                        // it shuffles the letters of the word.
                        console.log(`\nHint:  Jumble : ${shuffled} \n`);

                    } else {
                        index = Math.floor(Math.random()*(curWordHints.length-1));
                        // here it takes the random index in the curWordHints to give Hint.
                        curWordHint = curWordHints[index];
                        console.log(`\nHint:  ${curWordHint.label} : ${curWordHint.returning} \n`);
                        curWordHints.splice(index,1);
                    }

                    choice = 1;           
                break;
            case 3:
                    console.log(`** The word is ${word} **`);
                    curScore -= 4;
                    console.log(`you score is ${curScore} \n`);
                    
                    word = await randomWord();   
                    if (hitWords.length === 42) {
                        console.log('Running out of words');
                        choice = 0;
                        break;
                    }
                    console.log('\nplease wait...');
                    while (hitWords.includes(word)) {
                        word = await randomWord();
                    }

                    hitWords.push(word);

                    curWordHints = await returnHints(word);
                    
                    console.log('\n2.I wanna try guessing another word \n0.End the game.');
                    input = readline.question('\nEnter your choice:');
                    choice = parseInt(input);
                break;
        
            default:
                    console.log('----> enter desired choice ');
                    console.log('\n1 default 2.I wanna try again\n2.Give me a hint\n3.I want to skip\n0.End the game');
                    input = readline.question('\nEnter your choice:');
                    choice = parseInt(input);
                break;
        }

        if (choice === 0) break;
    }
} 
