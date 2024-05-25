const popup = document.createElement("div");
popup.id = "popup";
popup.innerHTML = 'Копирано <span class="material-symbols-rounded">inventory</span>';
document.body.appendChild(popup);

function copyLink(){
    const link = window.location.origin + ref[0].href.slice(1);
    navigator.clipboard.writeText(link);

    popup.classList.add("show");

    setTimeout( () => {
        popup.classList.remove("show");
    }, 5000);

}