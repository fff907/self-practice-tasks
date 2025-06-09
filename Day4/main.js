const items = document.querySelectorAll("#colorList li");
const colors = ["red","blue","green","yellow"];

items.forEach((item, index) => {
    item.addEventListener("click", () => {
           item.style.backgroundColor = colors[index];
    });
});