let menuPageAll = document.querySelectorAll(".menuPage");
let task_page = document.querySelector(".task_page");
let time_page = document.querySelector(".time_page");
let music_page = document.querySelector(".music_page");



for(let i = 0; i < menuPageAll.length; i++){
    menuPageAll[i].onclick = function () {
        task_page.style.display = 'none';
        time_page.style.display = 'none';
        music_page.style.display = 'none';
        for(let j = 0; j < menuPageAll.length; j++){
            menuPageAll[j].classList.remove('menuActive')
        }
        if(i === 0){
            task_page.style.display = 'block';
        }
        if(i === 1){
            time_page.style.display = 'block';
        }
        if(i === 2){
            music_page.style.display = 'block';
        }
        this.classList.add('menuActive')
    }
}
