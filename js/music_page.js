let music_page_yf = document.querySelector(".music_page_yf")
let musicS = document.querySelector(".musicS")
let kaiImg = document.querySelector(".kaiImg")
// music_page_ani
let music_page_start = false;           // 是否播放音乐
let musicIndex = 0;
let musicArr = [
    'music/music1.mp3',
    'music/music2.mp3',
    'music/music3.mp3',
]
// 点击播放音乐
function startMusic() {
    music_page_start = !music_page_start
    if(music_page_start){
        kaiImg.src='./img/ting.png'
        musicS.play()
        music_page_yf.classList.add('music_page_ani')
    }else {
        kaiImg.src='./img/kai.png'
        musicS.pause()
        music_page_yf.classList.remove('music_page_ani')
    }
}
// 上一首
function topMusic() {
    if(musicIndex == 0){
        musicIndex = 2
    }else {
        musicIndex = musicIndex - 1
    }
    musicS.src = musicArr[musicIndex]
    musicS.play()
    music_page_yf.classList.add('music_page_ani')
    kaiImg.src='./img/ting.png'
    music_page_start = true
}
function bottomMusic(){
    if(musicIndex == 2){
        musicIndex = 0
    }else {
        musicIndex = musicIndex + 1
    }
    musicS.src = musicArr[musicIndex]
    musicS.play()
    music_page_yf.classList.add('music_page_ani')
    kaiImg.src='./img/ting.png'
    music_page_start = true
}
// 下一首
