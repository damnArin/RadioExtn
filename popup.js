// document.getElementById('next').onclick = function(){
//     chrome.extension.getBackgroundPage().howzit()
// }

document.getElementById('Play').onclick = function(){
    chrome.extension.getBackgroundPage().playAudio()
}

document.getElementById('Pause').onclick = function(){
    chrome.extension.getBackgroundPage().pauseAudio()
}