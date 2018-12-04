  
            var wins=0;
            var losses=0;
            var guesses=9;
            var array = [];
            var computerGuess;
            

            var winstext= document.getElementById("wins");
            var lossestext = document.getElementById("losses");
            var aguesttext = document.getElementById("aguest");
            var glefttext= document.getElementById("gleft");
            var computerchoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

            function draw(){
            computerGuess = computerchoice[Math.floor(Math.random()*computerchoice.length)];
            console.log(computerGuess)
            }

            document.onkeyup = function(event) {
            
                var userGuess = event.key;
               
                    console.log(array)

                    if (userGuess == computerGuess){
                        win();
                    }else if (userGuess !== computerGuess && array.indexOf(userGuess) != -1){
                        console.log("already picked it dummy!!")
                    }else{
                        guesses--;
                        array.push(userGuess);
                        glefttext.textContent = "Your Guesses Left: " + guesses;
                        aguesttext.textContent = "Your Guesses so far: " + array;
                        if (guesses === 0){
                            loss()
                        }
                            
                    }
            }

            function win(){
                guesses=9;
                wins++;
                winstext.textContent = "Wins: " + wins;
                aguesttext.textContent = "Your Guesses so far:";
                glefttext.textContent = "Guesses Left: 9";
                array=[]
                draw()
            }
            
            function loss(){
                guesses=9;
                losses++;
                lossestext.textContent= "Losses: " + losses;
                aguesttext.textContent = "Your Guesses so far:";
                glefttext.textContent = "Guesses Left: 9";
                array=[]
                draw()
            }

            draw()