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
