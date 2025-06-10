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

# Day4 - JavaScript 配列とループ（forEach）

## ✨ 学習内容

- `forEach()` を使った配列のループ処理
- `querySelectorAll()` で複数の `li` 要素を取得
- 配列の値と `li` のインデックスを組み合わせてスタイルを適用
- `addEventListener()` を使ったクリックイベント処理

## 💻 コード概要

- HTMLに並んだ `<li>` 要素それぞれに、配列の色を使って背景色をつける
- クリックされた `li` に応じてアラートで色名を表示

```js
const items = document.querySelectorAll("#colorList li");
const colors = ["red","blue","green","yellow"];

items.forEach((item, index) => {
    item.style.backgroundColor = colors[index];

    item.addEventListener("click", () => {
        alert(`${item.textContent}をクリックしました！`);
    });
});
```

## 🔍 気づき・学び

- `forEach` はインデックス番号を使って **HTMLの複数要素と配列を対応させやすい**
- `.textContent` を使えば、要素内のテキストを取得して**アラートなどに活用できる**
- `style.backgroundColor` は**スタイルを直接JSで変更する便利な方法**
- `addEventListener()` の中で関数を書くと、**クリックごとの処理を柔軟に記述できる**
- 最初は `li` に色がついているだけだが、**動きが加わると一気に「アプリ」っぽくなる**感覚が得られた

## 📌 アレンジ案（実装済 or 実装検討）

- `hover`時に影をつけて、`click`された要素だけ `class="active"` になるよう改善
- カラー名の `textContent` に対応して、クリックで別の情報を表示する仕様なども可能

---

# Day5 - JavaScript イベントリスナ＋関数分離

## ✨ 学習内容

- `addEventListener()` を用いた**イベントリスナの登録**
- ユーザー操作に応じた **関数の分離・呼び出し**
- `textContent` を使った**テキスト変更の制御**
- `clickCount` のような **状態（変数）の保持**
- `mouseenter / mouseleave` による **マウスホバーの演出**
- `classList.add()` / `remove()` による **スタイルの切り替え**

## 💻 コード概要

- ボタン（`#changeBtn`）をクリックすると、クリック回数に応じてメッセージが変化
- `clickCount` 変数を使って1回目〜5回目以降まで分岐処理を実装
- マウスホバー時には、CSSによる色変化 + JSでクラスを追加して影を表示
- `mouseleave` 時には `.hovered` クラスを削除し、元の状態に戻す

## 🧩 アレンジ内容

- `if / else if / else` による**クリック回数の条件分岐**
- `5回目以降は「押しすぎです」**という固定メッセージに切り替え**
- `mouseenter / mouseleave` イベントを用いて、**JS経由でスタイル変更**
- `classList.add('hovered')` → CSS側の `.hovered` による光るエフェクト発動

## 🧠 学んだポイント

- **イベント処理は関数に切り出すと見通しがよくなる**
- **状態（clickCountなど）を関数の外に定義することで、カウントや切り替えが可能**
- CSSの`:hover`とJSの`mouseenter`は目的に応じて使い分ける
- クラス名（`hovered`, `is-open` など）は**「状態を表す単語」で自由につけて良い**

## 📌 使用した主なJavaScript構文

```js
// 基本のイベントリスナ
btn.addEventListener("click", changeText);

// 関数定義
function changeText() {
  // クリックに応じてメッセージ切り替え
}

// クラス追加・削除（ホバー時）
btn.addEventListener("mouseenter", () => {
  btn.classList.add("hovered");
});
btn.addEventListener("mouseleave", () => {
  btn.classList.remove("hovered");
});
```

---
