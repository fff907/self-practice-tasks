# 自走コーディング小課題（Self Practice Tasks）

このリポジトリでは、日々のコーディング力向上のために取り組んでいる「自走コーディング小課題」を記録しています。  
JavaScript、PHP、WordPress、Git、SQL、Sass、Pug など、転職・実務に必要なスキルをテーマごとに実践します。

---

# Day1 - JavaScript Click Event（クリックイベント）

## ✨ 学習内容

- `addEventListener()` によるクリックイベントの設定
- `textContent` を使ったテキストの書き換え
- 関数で `style.background` を切り替える背景色変更処理

## 💻 コード概要

- ボタン①をクリックすると、テキストが変更される
- ボタン②をクリックすると、ボタン自身の背景色が変わる

```html
textBtn.addEventListener("click", () => {
    text.textContent = "変更されました！";
});

colorBtn.addEventListener("click", () => {
    buttonClick("#f6b532");
});
```

## 🔍 気づき・学び

- 「関数を使う／使わない」の違いに戸惑ったが、**繰り返し使うかどうか・処理の複雑さ**が判断ポイントだと気づいた  
- `getElementById()` などは頻出なので、少しずつ慣れていきたい  
- コード全体の“書く順番”や“構造の整理”も重要と実感

## 📘 今後に向けて

- 簡単なイベント処理でも、自分で一行ずつ書けるようトレーニングを続ける  
- 見た目の変更（CSS）やHTMLとの連携も意識していきたい

---

# Day2 - JavaScript Mouseover Event（マウスオーバーイベント）

## ✨ 学習内容

- `mouseover` / `mouseout` イベントの発火タイミングを体験
- `style` プロパティを使った要素の動的なスタイル変更
- `transition` をCSSで定義することで、スムーズな演出が可能になる

## 💻 コード概要

- `mouseover` で背景色・影・拡大・テキスト変更など複数処理を実行  
- `mouseout` で元の状態に戻す処理を追加  

```js
target.addEventListener("mouseover", () => {
    target.style.backgroundColor = "#f6b532";
    target.style.transform = "scale(1.1)";
    target.style.boxShadow = "0 0 10px #333";
    target.textContent = "変わったよ！";
});

target.addEventListener("mouseout", () => {
    target.style.backgroundColor = "#ccc";
    target.style.transform = "scale(1)";
    target.style.boxShadow = "none";
    target.textContent = "マウスを乗せて！";
});
```

## 🔍 気づき・学び

- `mouseover` / `mouseout` は **同じ要素に対して2種類の状態変化**を作れるのが便利  
- 複数のスタイル変更も、1つのアロー関数の中に **順番にまとめて記述**すればOK  
- CSSで `transition` を使っておけば、JSではただプロパティを変えるだけで **自然なアニメーション**になる  
- 今回は関数を使わず書けたことで「関数なしでもできるパターン」が体感できた  
- **要素を1つ定義すれば、それに対して複数のイベントを設定できる**というのが実感として理解できた

---

# Day3 - JavaScript 条件分岐（if文）

## ✨ 学習内容

- `if / else if / else` を使った **条件分岐の基本構文**
- `&&`（AND）を使った **複数条件の組み合わせ**
- `select` タグでユーザーが選んだ値を取得し、動的に表示内容を変える方法

## 💻 コード概要

- `#checkBtn` ボタンを押すと、天気と気温の選択肢を元にメッセージを表示
- それぞれ `value` を取得して、条件ごとに `message.textContent` を変更

```js
document.getElementById('checkBtn').addEventListener('click', function () {
    const weather = document.getElementById('weather').value;
    const temperature = document.getElementById('temperature').value;
    const message = document.getElementById('message');

    if (weather === 'sunny' && temperature === 'hot') {
        message.textContent = '夏バテ注意！水分をしっかりとりましょう。';
    } else if (weather === 'cloudy' && temperature === 'good') {
        message.textContent = '過ごしやすい一日になりそうですね。';
    } else if (weather === 'rainy' && temperature === 'cold') {
        message.textContent = '寒さ対策＆傘を忘れずに！';
    } else {
        message.textContent = '天気と気温を選択してください。';
    }
});
```

## 🔍 気づき・学び

- `if` 文に `&&` を使うことで、**複数の条件を同時に判断できる**のが便利  
- `.value` を忘れずに使うことで、ユーザーが選んだ値をきちんと取得できる  
- 変数名は `temp` より `temperature` など **具体的で意味のある名前を使うと混乱しにくい**  
- `getElementById` や `textContent` の操作は **HTML要素との連携の基礎**になる  
- `select`＋`option` で選択肢を作れば、**条件分岐の練習がしやすく応用もしやすい**

---
