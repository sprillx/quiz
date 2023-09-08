
const buttonQuiz = document.querySelector('#buttonquiz');

buttonQuiz.addEventListener('click', quizStart)



function quizStart(){
    
    const questions = [' 1) What is 10x10 ','2) what is 7 x 8', '3) What is 4 x 4 ', '4) what is 9 x 8']
    let currentIndex = 0


    buttonQuiz.style.display = 'none'

    if(buttonQuiz.style.display = 'none'){

        document.getElementById('p').innerHTML = questions[0]
        let p = document.querySelector('#p');

         let input = document.createElement('input')
            input.setAttribute('type', 'text');
            input.style.display = 'block'
            input.value = input.value 
            p.appendChild(input)

            

         let Button  = document.createElement('button');
         Button.textContent = 'Next Question'
         p.appendChild(Button)
        
        
         Button.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % questions.length;
            p.textContent = questions[currentIndex]
            input.value = ''
            p.appendChild(input)
            p.appendChild(Button)

      
            if(currentIndex === questions.length - 1){
               Button.textContent = 'Restart';
               let header = document.querySelector('#header');
               input.style.display = 'none'
               p.style.display = 'none'
               let score = '5/5'
               header.textContent = `You scored ${score}`

               let buttonReset = document.createElement('button');
               buttonReset.textContent = 'Restart'
               buttonReset.style.display = 'block'
               buttonReset.style.marginTop = '24px'
                header.appendChild(buttonReset)

                buttonReset.addEventListener('click', () => {
                        location.reload()
                })
           }

         })
        
    }

    

  


}