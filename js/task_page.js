// 搭建数据模型
let taskInfor = []
let tastData = {
    title: '',          // 标题  name
    type: '',           // 类别 重要性       等于3 时 为已经完成
    date: '',           // 日期
    timer: '',          // 学习时间
    state: '',              // 是否完成
}

let task_one = document.querySelector(".task_one")
let task_two = document.querySelector(".task_two")
let task_three = document.querySelector(".task_three")
let task_four = document.querySelector(".task_four")


let titleIpt = document.querySelector(".titleIpt")
let dateIpt = document.querySelector(".dateIpt")
let timeIpt = document.querySelector(".timeIpt")
let levelIpt = document.querySelector(".levelIpt")
let checkIpt = document.querySelector(".checkIpt")
let saveBtn = document.querySelector(".saveBtn")


let addPop = document.querySelector(".addPop")

let searchIpt = document.querySelector(".searchIpt")
// 点击搜索
function clickSearch() {
    for(let j = 0; j < menuPageAll.length; j++){
        menuPageAll[j].classList.remove('menuActive')
    }
    menuPageAll[0].classList.add('menuActive')
    task_page.style.display = 'block';
    time_page.style.display = 'none';
    music_page.style.display = 'none';
    initTask()
}
// 初始化绘制
function initTask() {
    let task_oneHtml = ``
    let task_twoHtml = ``
    let task_threeHtml = ``
    let task_fourHtml = ``
    for (let i = 0; i < taskInfor.length; i++) {
        // 添加搜索功能
        if(taskInfor[i].title.indexOf(searchIpt.value) != -1){
            if(taskInfor[i].state){
                task_fourHtml = task_fourHtml + `
                    <div>
                        <div class="task_list_left">${taskInfor[i].title}</div>
                        <div class="task_list_right" style="background-color: #3AB54A">Submitted</div>
                    </div>
                `
            }else {
                switch (taskInfor[i].type) {
                    case '0':
                        task_threeHtml = task_threeHtml + `
                    <div>
                        <div class="task_list_left" onclick="startStudyPop(${i})">${taskInfor[i].title}</div>
                        <div class="task_list_right" style="background-color: #009EFF" onclick="taskDdit(${i})">${DateDiff(taskInfor[i].date)}</div>
                    </div>
                `
                        break;
                    case '1':
                        task_twoHtml = task_twoHtml + `
                    <div>
                        <div class="task_list_left" onclick="startStudyPop(${i})">${taskInfor[i].title}</div>
                        <div class="task_list_right" style="background-color: #FA9F1D" onclick="taskDdit(${i})">${DateDiff(taskInfor[i].date)}</div>
                    </div>
                `
                        break;
                    case '2':
                        task_oneHtml = task_oneHtml + `
                    <div>
                        <div class="task_list_left" onclick="startStudyPop(${i})">${taskInfor[i].title}</div>
                        <div class="task_list_right" style="background-color: #FE1D25" onclick="taskDdit(${i})">${DateDiff(taskInfor[i].date)}</div>
                    </div>
                `
                        break;
                }
            }
        }
    }
    task_one.innerHTML = task_oneHtml
    task_two.innerHTML = task_twoHtml
    task_three.innerHTML = task_threeHtml
    task_four.innerHTML = task_fourHtml
}


saveBtn.onclick = function () {
    if(titleIpt.value == '' || levelIpt.value == '' || dateIpt.value == ''){
        return alert('Please complete the information')
    }
    let obj = {
        title: '',          // 标题  name
        type: '',           // 类别 重要性       等于3 时 为已经完成
        date: '',           // 日期
        timer: '',          // 学习时间
        state: '',              // 是否完成
    }
    obj.title = titleIpt.value;
    obj.type = levelIpt.value;
    obj.date = dateIpt.value;
    obj.timer = timeIpt.value;
    obj.state = checkIpt.checked;
    if(handle == 'add'){
        taskInfor.push(obj)
    }else{
        taskInfor[taskIndex] = obj
    }
    addPop.style.display = 'none'
    initTask()
    dumpInfo()
}
// 计算天数
function DateDiff(time) {
    let oDate1 = new Date()    //转换为12-18-2002格式
    let oDate2 = new Date(time)
    let iDays = parseInt(Math.abs(oDate2 - oDate1) / 1000 / 60 / 60 / 24)    //把相差的毫秒数转换为天数
    if(iDays < 0){
        return 'Timed out'
    }
    return iDays + ' ' + 'Day'
}
let handle = 'add';         // editor 为编辑  add 为添加
// 开始添加
function defineAdd() {
    console.log(666);
    addPop.style.display = 'flex'
}
// 取消添加
function cancelAdd() {
    addPop.style.display = 'none'
    dumpInfo()
}
// 清除信息
function dumpInfo() {
    titleIpt.value = ''
    timeIpt.value = ''
    dateIpt.value = ''
    checkIpt.checked = false
}

// 点击编辑
let taskIndex = '';     // 保存编辑时的下标
function taskDdit(index) {
    taskIndex = index
    handle = 'editor'
    titleIpt.value = taskInfor[index].title
    levelIpt.value = taskInfor[index].type
    dateIpt.value = taskInfor[index].date
    timeIpt.value = taskInfor[index].timer
    checkIpt.checked = false
    addPop.style.display = 'flex'
}

// 学习时间弹框
let studyPop = document.querySelector(".studyPop")
let studyTitle = document.querySelector(".studyTitle");
let dayText = document.querySelector(".dayText");
let subDay = document.querySelector(".subDay");
let surplusTime = document.querySelector(".surplusTime");

let studtIndex = ''     // 点击开始学习时的 index
function startStudyPop(index){
    studtIndex = index
    studyTitle.innerHTML = taskInfor[index].title
    dayText.innerHTML = DateDiff(taskInfor[index].date)
    subDay.innerHTML = 'Submission Date:' + taskInfor[index].date
    surplusTime.innerHTML = taskInfor[index].timer + 'minute'
    studyPop.style.display = 'flex'
}

// 取消学习弹框
function cancelStudyPop(){
    studyPop.style.display = 'none'
    studtIndex = ''
}
// 点击开始学习
let startStudyPopCon = document.querySelector(".startStudyPop")
let startStudyPopText = document.querySelector(".startStudyPopText")
let studTimeCopy; // 学习时间备份参数
let studySecond = 0         // 备份的秒数
function startStudy(){
    studTimeCopy = taskInfor[studtIndex].timer
    studyPop.style.display = 'none'
    startStudyPopCon.style.display = 'flex'
    startStudyPopText.innerHTML = (studTimeCopy < 10 ? '0' + studTimeCopy : studTimeCopy) + ': 00'
}
//点击开始计时
let timeState = false;      // 是否开始计时
let timerFun;               // 保存定时器
let studyImg = document.querySelector(".studyImg")
function clickStartTime(){
    if(studTimeCopy == 0){
        return alert('Learning time has run out')
    }
    timeState = !timeState
    if(timeState){
        studyImg.src = 'img/end.png'
        studyTimerFun()
    }else {
        studyImg.src = 'img/start.png'
        clearInterval(timerFun)
    }
}
// 计时函数
function studyTimerFun(){
    timerFun = setInterval(function () {
        if(studySecond == 0){
            if(studTimeCopy > 0){
                studTimeCopy = studTimeCopy - 1
                studySecond = 59
                defaultTimesCopy = defaultTimesCopy + 1
            }else {
                clearInterval(timerFun)
                studTimeCopy = 0
                studySecond = 0
                studyImg.src = 'img/start.png'
                alert('Learning completed!')
            }
        }else {
            studySecond = studySecond - 1
        }
        defaultTimesFun()
        startStudyPopText.innerHTML = (studTimeCopy < 10 ? '0' + studTimeCopy : studTimeCopy) + ':' + (studySecond < 10 ? '0' + studySecond : studySecond)
    },1000)
}

// 重置时间
function resetTime() {
    clearInterval(timerFun)
    studySecond = 0
    studyImg.src = 'img/start.png'
    timeState = false
    studTimeCopy = taskInfor[studtIndex].timer
    startStudyPopText.innerHTML = (studTimeCopy < 10 ? '0' + studTimeCopy : studTimeCopy) + ':' + (studySecond < 10 ? '0' + studySecond : studySecond)
}

// 退出学习
function outStudy() {
    clearInterval(timerFun)
    if(studySecond > 30){
        studTimeCopy = studTimeCopy + 1
    }
    taskInfor[studtIndex].timer = studTimeCopy
    timeState = false
    studySecond = 0
    studyImg.src = 'img/start.png'
    startStudyPopCon.style.display = 'none'
    studtIndex = ''
}

// 默认学习时间
let defaultTimesCopy = 0        // 复制 默认时间 用来参考
function defaultTimesFun() {
    if(defaultTimesCopy == timerInfor.defaultTimes){
        clearInterval(timerFun)
        restStudyFun()
    }
}


// 学习弹框
let restStudyPop = document.querySelector(".restStudyPop")
let restStudyPopText = document.querySelector(".restStudyPopText")
let restStudyTime;          // restStudyTime 计时器
let restStudyText;          // restStudyText 学习
let restStudyNumber = 0;    // 学习的次数
let restStudySecond = 0;    // 计时秒数

function restStudyFun(){
    restStudyPop.style.display = 'flex'
    restStudyNumber = restStudyNumber + 1
    if(restStudyNumber < 4){
        restStudyText = timerInfor.timesOff
    }else {
        restStudyText = timerInfor.breakTimes
    }
    restStudyTime = setInterval(function () {
            if(restStudySecond == 0){
                if(restStudyText > 0){
                    restStudySecond = 59
                    restStudyText = restStudyText - 1
                }else {
                    restStudyText = 0
                    restStudySecond = 0
                    defaultTimesCopy = 0
                    clearInterval(restStudyTime)
                    restStudyPop.style.display = 'none'
                    if(restStudyNumber == 4){
                        restStudyNumber = 0
                    }else {
                        studyTimerFun()
                    }
                }
            }else {
                restStudySecond = restStudySecond - 1
            }
        restStudyPopText.innerHTML = (restStudyText < 10 ? '0' + restStudyText : restStudyText) + ':' + (restStudySecond < 10 ? '0' + restStudySecond : restStudySecond)
    },1000)
}
// 结束休息
function endRest() {
    restStudyPop.style.display = 'none'
    clearInterval(restStudyTime)
    restStudySecond = 0;
    restStudyText = 0;
    defaultTimesCopy = 0
    restStudyPopText.innerHTML = (restStudyText < 10 ? '0' + restStudyText : restStudyText) + ':' + (restStudySecond < 10 ? '0' + restStudySecond : restStudySecond)
    studyTimerFun()
    if(restStudyNumber == 4){
        restStudyNumber = 0
    }
}
