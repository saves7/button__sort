window.onload = function () {

    let btnStart = document.querySelector('.game-start__start');
    let btnEnd = document.querySelector('.game-start__end');
    let gameButtons = document.querySelectorAll('.game-button__item');
    let arr = [1, 2, 3, 4];


    btnStart.addEventListener('click', (e) => {
        deleteButtonText();
        let newShuffleArray = shuffleArray(arr);
        gameButtons.forEach((item, i) => {
            item.innerHTML = `${newShuffleArray[i]}`;
        });


    });

    btnEnd.addEventListener('click', (e) => {
        hiddenButtonText();
        

    });


    function showButtonText() {


    }

    function deleteButtonText() {
        gameButtons.forEach(item => {
            item.innerHTML = "";
        });
    }

    function hiddenButtonText() {
        gameButtons.forEach(item => {
            item.classList.add('hiddenText');
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
