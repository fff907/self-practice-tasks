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
    target.style.boxShadow = "";
    target.textContent = "マウスを乗せて！";
});
```

## 🔍 気づき・学び
- `mouseover` / `mouseout` は **同じ要素に対して2種類の状態変化**を作れるのが便利  
- 複数のスタイル変更も、1つのアロー関数の中に **順番にまとめて記述**すればOK  
- CSSで `transition` を使っておけば、JSではただプロパティを変えるだけで **自然なアニメーション**になる  
- 今回は関数を使わず書けたことで「関数なしでもできるパターン」が体感できた  
- **要素を1つ定義すれば、それに対して複数のイベントを設定できる**というのが実感として理解できてきた

---
