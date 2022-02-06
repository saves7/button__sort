window.onload = function () {

    let btnStart = document.querySelector('.game-start__start');
    let btnEnd = document.querySelector('.game-start__end');
    let gameButtons = document.querySelectorAll('.game-button__item');
    


  
    
    btnStart.addEventListener('click', (e) => {
        let arr = [1, 2, 3, 4];
        
        showButtonShuffleArray(arr);
      // setTimeout(hiddenButtonText(), 2000);
        showButtonShuffleArray(arr);

    });

   /*   btnEnd.addEventListener('click', (e) => {
        hiddenButtonText();       
    });  */


    function showButtonShuffleArray(arr) {
        newShuffleArray = shuffleArray(arr);
        gameButtons.forEach((item, i) => {
            item.innerHTML = `${newShuffleArray[i]}`;
        });

    }


    function hiddenButtonText() {
        gameButtons.forEach(item => {
            item.classList.add('hiddenText');              //цвет текста совпадает с цветом фона, лучше сделать закрвывающий числа блок
        });
    } 

    function shuffleArray(array) {

        for (var i = array.length - 1; i > 0; i--) {

            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];

            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }





};
