const items = document.querySelectorAll("#colorList li");
const colors = ["red","blue","green","yellow"];

items.forEach((item, index) => {
    item.addEventListener("click", () => {
        items.forEach(i => {
            i.classList.remove("active");
            i.style.backgroundColor = "";
            i.style.color = "";
        });

        item.style.backgroundColor = colors[index];
        item.style.color = "white";
        item.classList.add("active");
    });
});