function changeText() {
    const output = document.getElementById('outputText');
    output.textContent = '変更されました！';
}

document.getElementById('changeBtn').addEventListener('click', changeText);