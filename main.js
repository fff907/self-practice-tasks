document.getElementById('checkBtn').addEventListener('click', function () {
    const weather = document.getElementById('weather').value;
    const message = document.getElementById('message');

    if (weather === 'sunny') {
        message.textContent = '今日はいい天気ですね！';
    } else if (weather === 'rainy') {
        message.textContent = '傘を忘れずに持っていきましょう。';
    } else if  (weather === 'cloudy') {
        message.textContent = 'くもり空でも元気にいきましょう。';
    } else {
        message.textContent = '天気が選択されていません。';
    }
});
