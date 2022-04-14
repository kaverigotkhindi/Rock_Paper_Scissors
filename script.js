    
    //challenge 3
        function rpsgame(yourChoice){        
        var hChoice , bChoice;
        hChoice = yourChoice.id;
        bChoice = bot_choice_gen();
        console.log('You picked '+hChoice+' Computer picked '+bChoice);
        var results = calculateResults(hChoice,bChoice);
        var message1 = finalMessage(results);
        console.log(message1);      
        
        let h1 = document.createElement('h1');
        h1.setAttribute('id','text-area-rsp-h1');
        let textArea = document.createTextNode(message1['message']);
        
        h1.appendChild(textArea);
        h1.style.color = message1['color']
        console.log('result is  '+textArea);
        
        
        displayChoices(yourChoice.id,bChoice,message1);
        

        // if(document.getElementById('text-area-rsp-h1')) {
        //     document.getElementById('text-area-rsp-h1').remove();
        // } 
        // document.getElementById('container-3').appendChild(h1);
        
        }
               
                
        function bot_choice_gen(){
        
        return ['rock','paper','scissors'][random_gen()];
        
        
        }
        
        function random_gen(){
        
        return [Math.floor(Math.random()*3)];
        
        }

        function calculateResults(yourChoice,computerChoice){
            var rpsDatabase = {
                'rock' :     {'rock' : 0.5,'paper' : 0 ,'scissors' : 1},
                'paper' :    {'rock' : 1 , 'paper' : 0.5 ,'scissors' : 0},
                'scissors' : {'rock' : 0 , 'paper' : 1 ,'scissors' : 0.5},
            };

            var yourScore = rpsDatabase[yourChoice][computerChoice];
            var computerScore = rpsDatabase[computerChoice][yourChoice];
            console.log('your score '+yourScore,'computer score '+computerScore);
            return [yourScore,computerScore];
        }

        function finalMessage(results){
            console.log(results[0]);
            if(results[0]==1)
            return{'message':'You Win!','color':'green'};
            else if(results[0]==0.5)
            return{'message':'You tied!','color':'orange'};
            else return{'message':'You lose!','color':'red'};

            

        }

        function displayChoices(hChoice,bChoice,message){
        var imgDatabase = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src,

        }
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();

        console.log(imgDatabase['rock']);

        var hChoiceDiv = document.createElement('div');
        var bChoiceDiv = document.createElement('div');
        var messageDiv = document.createElement('div');
        var scoreDiv = document.createElement('div');
        
        hChoiceDiv.innerHTML = "<img src = "+imgDatabase[hChoice]+" height= 150 width=150 style='box-shadow : 0px 10px 50px rgba(37,50,233,1)'>";
        messageDiv.innerHTML = "<h1 style = 'color: "+message['color']+" ; font-size : 60px ; padding : 30px;margin:auto'>"+message['message']+"</h1>";
        // console.log(message['color']+message['message']);
        scoreDiv.innerHTML = 
        bChoiceDiv.innerHTML = "<img src = "+imgDatabase[bChoice]+" height= 150 width=150 style='box-shadow : 0px 10px 50px brown'>"
        

        document.getElementById('rsp-img-container').appendChild(hChoiceDiv);        
        document.getElementById('rsp-img-container').appendChild(messageDiv);
        document.getElementById('rsp-img-container').appendChild(bChoiceDiv);
        
        }

        function reset(){

            location.reload();
        }
    
