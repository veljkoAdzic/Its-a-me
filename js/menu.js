/*
<ul>
    <li><a href="#" id="here">Почетна</a></li>
    <li><a href="#">За мене</a></li>
    <li><a href="#">Проекти</a></li>
    <li><a href="#">Контакт</a></li>
</ul>
*/

const ref = [
    {name: "Почетна", href: "main.html", tag: "HOME"},
    {name: "За мене", href: "about.html", tag: "ABOUT"},
    {name: "Проекти", href: "projects.html", tag: "PROJECTS"},
    {name: "Контакт", href: "contact.html", tag: "CONTACT"}
];

function generateMenu(){
    let nav = document.getElementsByTagName("nav")[0];
    let side = document.getElementsByClassName("side-nav")[0];
    let list = document.createElement("ul");

    for(let i of ref){
        let a = document.createElement("a");
        a.innerHTML = i.name;
        a.href = i.href;

        if(i.tag == here) {
            a.id = "here";
        }

        let li = document.createElement("li");
        li.appendChild(a);

        list.appendChild(li);
    }

    nav.appendChild(list);
    side.appendChild(list.cloneNode(true));
}

generateMenu();


function openSideNav() {
    const container = document.getElementsByClassName("menu-container")[0];
    const menu = document.getElementsByClassName("side-nav")[0];

    document.body.style.overflow = "hidden";

    menu.classList.remove("closing");
    menu.classList.add("opening");

    container.style.display = "block";
    container.classList.remove("fade-out");
    container.classList.add("fade-in");

    menu.style.width = "60%";
}

function closeSideNav() {
    const container = document.getElementsByClassName("menu-container")[0];
    const menu = document.getElementsByClassName("side-nav")[0];

    document.body.style.overflow = "auto"; 

    setTimeout( function() {
        menu.classList.remove("opening");
        menu.classList.add("closing");
        menu.width = "0";
    }, 10);

    setTimeout( function() {
        container.classList.remove("fade-in");
        container.classList.add("fade-out");
        
    }, 10);

    setTimeout( function() {
        container.style.display = "none";
    }, 300);
}
