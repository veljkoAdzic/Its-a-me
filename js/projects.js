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

const struct = "../files/projects/project-structure.json";

const projects = document.querySelector("#projects");

fetch(struct)
.then(res => res.json())
.then((data) => {
    console.log(data);
});

// JSON.parse(struct).array.forEach(item => {

//     let img = document.createElement("img");
//     img.src = item.path + "thumbnail.png";
//     img.alt = " ";

//     let title = document.createElement("h2");
//     title.innerHTML = item.name;

//     let a = document.createElement("a");
//     a.classList.add("project");
//     a.href = item.path + "main.html";

//     a.appendChild(img);
//     a.appendChild(title);

//     projects.appendChild(a);

    
// });