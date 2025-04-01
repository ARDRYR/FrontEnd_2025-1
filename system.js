let randomIndexArray=[]
        for (i=1; i<7; i++){
            randomNum=Math.floor(Math.random()*45)
            if (randomIndexArray.indexOf(randomNum) === -1){
                randomIndexArray.push(randomNum)
            } else {
                i--;
            }
            
        }
console.log(randomIndexArray)

        const CreNum = document.querySelector("button");

        CreNum.addEventListener('click', function(){{
            alert(randomIndexArray);
        }})



        