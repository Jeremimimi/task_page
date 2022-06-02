let timerInfor = {          // 定义学习时间
    defaultTimes: 25,       // 学习时间
    timesOff: 5,            // 短的休息时间
    breakTimes: 10,         // 长的休息时间
}
let defaultTimes = document.querySelector(".defaultTimes")
let timesOff = document.querySelector(".timesOff")
let breakTimes = document.querySelector(".breakTimes")

function initTime() {
    if(localStorage.getItem('timerInfor') != null){
        timerInfor = JSON.parse(localStorage.getItem('timerInfor'))
    }else {
        timerInfor = {
            defaultTimes: 2,
            timesOff: 5,
            breakTimes: 10
        }
    }
    defaultTimes.value = timerInfor.defaultTimes
    timesOff.value = timerInfor.timesOff
    breakTimes.value = timerInfor.breakTimes
}
// 初始化input数据
function initTimeInput(){
    timerInfor.defaultTimes = defaultTimes.value
    timerInfor.timesOff = timesOff.value
    timerInfor.breakTimes = breakTimes.value
}
