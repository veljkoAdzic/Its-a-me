const popup = document.createElement("div");
popup.id = "popup";
popup.innerHTML = 'Копирано <span class="material-symbols-rounded">inventory</span>';
document.body.appendChild(popup);

function copyLink(){
    const link = window.location.href;
    link = link.slice( 0, link.lastIndexOf("/") );
    navigator.clipboard.writeText(link);

    popup.classList.add("show");

    setTimeout( () => {
        popup.classList.remove("show");
    }, 5000);

}