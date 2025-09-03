// heart count function
let countHeartNum = 0;
function countHeart() {
    countHeartNum++;
    document.getElementById('heartCount').innerText = countHeartNum;
    return;
}

// copy number function
let copyCount = 0;
function copyNum(copyId) {
    const x = document.getElementById(copyId).innerText
    navigator.clipboard.writeText(x)
    copyCount++;
    document.getElementById('copyCount').innerText = copyCount;
    alert('Number Copied: ' + x);
    return;

}
// call button function
function callBtn(eId, sId) {

    const date = new Date();
    const timeString = date.toLocaleTimeString('en-US');

    const x = document.getElementById(eId).innerText;
    const y = document.getElementById(sId).innerText;
    alert(`Service :${y} \nNumber : ${x} `);

    const z = document.getElementById('coin').innerText
    if (z > 0) {
        const updatedCoin = parseInt(z) - 20;
        document.getElementById('coin').innerText = updatedCoin;
        const div = document.createElement('div');
        div.innerHTML = `<div class="flex justify-between items-center bg-[#FAFAFA]  rounded-xl  p-5 mb-3 mx-5">
                    <div class=" text-base">
                        <h1 class="font-bold text-[#111111]">${y}</h1>
                        <p class="text-[#5C5C5C]">${x}</p>
                    </div>
                    <p>${timeString}</p>
                </div>`
        document.getElementById('historyId').appendChild(div);
    }
    else {
        alert('Your balance is 0! Please recharge.')
    }
}
