window.onload = function () {
    console.log(localStorage.getItem('taskInfor'));
    if(localStorage.getItem('taskInfor') != null){
        taskInfor = JSON.parse(localStorage.getItem('taskInfor'))
    }else{
        taskInfor = []
    }
    initTask()
    initTime()
}
window.onunload = function () {
    if(studtIndex != ''){
        outStudy()
    }
    localStorage.setItem('taskInfor',JSON.stringify(taskInfor))
    localStorage.setItem('timerInfor',JSON.stringify(timerInfor))
}
