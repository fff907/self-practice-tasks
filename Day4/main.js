const items = document.querySelectorAll("#colorList li");
const colors = ["red","blue","green","yellow"];

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = colors[i];
}