document.getElementById('checkBtn').addEventListener('click', function () {
    const weather = document.getElementById('weather').value;
    const temperature = document.getElementById('temperature').value;
    const message = document.getElementById('message');

    if (weather === 'sunny' && temperature === 'hot') {
        message.textContent = '暑いけど晴れて気持ちいい日ですね！水分補給を忘れずに。';
    } else if (weather === 'cloudy' && temperature === 'good') {
        message.textContent = '過ごしやすい曇り空ですね。お散歩にもぴったりです。';
    } else if (weather === 'rainy' && temperature === 'cold') {
        message.textContent = '冷たい雨の日ですね。暖かくして出かけましょう。';
    } else {
        message.textContent = '天気と気温に合わせて、快適に過ごせるよう工夫してみましょう！';
    }
});