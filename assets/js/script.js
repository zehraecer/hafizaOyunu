let items;
const gameBox = document.querySelector('.gameBox');

function createGameArray() {
    items = [1, 2, 3, 4, 5, 6, 7, 8];

    // ikiye katla
    items = [...items, ...items ,];

    // karistir 
    items.sort(x => Math.random() - 0.5);   // bu bir formül. random karıştırma yöntemi
}

function handleGameBtn() {
    if(this.classList.contains('correct')) {   //contains içermek anlamına gelir yani correct classı varmı? correct ise dur
        return;
    }

    if(this.classList.contains('active')) {   //active ise dur
        return;
    }

    // if(document.querySelectorAll('.gameBox li.active').length >= 2) {
    //     return;
    // }
    
    const activeBtns = document.querySelectorAll('.active');
    if(activeBtns.length===1){
        if(activeBtns[0].innerText===this.innerText){
            activeBtns[0].classList.remove('active');
            activeBtns[0].classList.add('correct');
            this.classList.add("correct");
            if(document.querySelectorAll("li").length===document.querySelectorAll(".correct").length){
                alert("kazandınız")
            }   
            return
            
        }
    }
    
if(activeBtns.length>1){
    for (const btn of activeBtns) {
        btn.classList.remove("active")
    }
}
this.classList.add('active');

}
    // const activeBtns = document.querySelectorAll('.gameBox li.active');


    // let timeoutDuration = 700;
    // if(activeBtns.length === 2) {
    //     if(activeBtns[0].innerText === activeBtns[1].innerText) {
    //         activeBtns[0].classList.add('correct');
    //         activeBtns[1].classList.add('correct');
            // timeoutDuration = 0;
        // }

        // setTimeout(function() {
        //     activeBtns[0].classList.remove('active');
        //     activeBtns[1].classList.remove('active');
        // }, timeoutDuration);
//     }
// }

function renderGameScreen(){
    gameBox.innerHTML   = "";

    for(const item of items) {
        gameBox.innerHTML += `<li>${item}</li>`;
    }

    const gameBtns = document.querySelectorAll('.gameBox li');
    
    for (const btn of gameBtns) {
        btn.addEventListener('click', handleGameBtn);
    }
}

function init() {
    createGameArray();
    renderGameScreen();
}

init();

// function sayHello() {
//     alert('merhaabaaa');
// }

// setTimeout(sayHello, 1500);   // süre oluşturmak için kullanılır
//debugger;


document.querySelector(".newGame").addEventListener("click" ,function(e){
    e.preventDefault();
    init();
});