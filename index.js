// heart count function
let countHeartNum = 0;
function countHeart() {
    countHeartNum++;
    document.getElementById('heartCount').innerText = countHeartNum;
    return;
}

// copy number function
function copyNum(copyId) {
    const x = document.getElementById(copyId).innerText
    navigator.clipboard.writeText(x)

}