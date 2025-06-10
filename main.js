let clickCount = 0;

function changeText() {
    const output = document.getElementById('outputText');
    clickCount++;

    if (clickCount === 1) {
        output.textContent = '最初のクリックですね！';
    } else if (clickCount === 2) {
        output.textContent = '2回目のクリックです！';
    } else {
        output.textContent = `もう${clickCount}回目ですよ～！`;
    }
}

document.getElementById('changeBtn').addEventListener('click', changeText);