/*
<a class="project" href="#">
    <img src="./img/background.png" alt=" ">
    <h2>Project Name</h2>
</a>

<a class="project" href="#">
    <img src="" alt="">
    <h2>Project Name</h2>
</a>
*/

const struct = [
    {
        name: "Часовник", 
        path: "./files/projects/clock/"
    },
    {
        name: "Игра на живот",
        path: "./files/projects/game-of-life/"
    },
    {
        name: "Проектна задача",
        path: "./files/projects/js-school-project/"
    },
    {
        name: "Математичка игра",
        path: "./files/projects/math-game/"
    },
    {
        name: "Генератор на текст",
        path: "./files/projects/weird-text-generator/"
    }
];

const projects = document.querySelector("#projects");

for(item of struct) {
    let img = document.createElement("img");
    img.src = item.path + "thumbnail.png";
    img.alt = " ";

    let title = document.createElement("h2");
    title.innerHTML = "<span class=\"material-symbols-rounded\">code</span>" + item.name;

    let a = document.createElement("a");
    a.classList.add("project");
    a.href = item.path + "main.html";

    a.appendChild(img);
    a.appendChild(title);

    projects.appendChild(a);
}