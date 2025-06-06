document.getElementById('checkBtn').addEventListener('click', function () {
    const weather = document.getElementById('temperature').value;
    const message = document.getElementById('message');

    if (temp === 'cold') {
    message.textContent = '今日はコートが必要かもしれませんね。';
    } else if (temp === 'good') {
        message.textContent = 'ちょうど良い気温ですね。';
    } else if (temp === 'hot') {
        message.textContent = '熱中症に気をつけましょう。';
    } else {
        message.textContent = '気温が選択されていません。';
    }
});

