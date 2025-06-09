const items = document.querySelectorAll("#colorList li");
const colors = ["red","blue","green","yellow"];

items.forEach((item, index) => {
    item.style.backgroundColor = colors[index];

    item.addEventListener("click", () => {
        alert(`${item.textContent}をクリックしました！`);
    });
});