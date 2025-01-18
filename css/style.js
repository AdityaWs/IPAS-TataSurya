
let open = false;

function openInfo()
{

    if(open) {
        let button = document.querySelector(".info-button");
        button.style.scale = "100% 100%";

        let modal = document.querySelector(".info");
        modal.style.scale = "100% 0%";

        let modalBlur = document.querySelector(".info-blur");
        modalBlur.style.scale = "100% 0%";

        open = !open;
        return;
   }

    let button = document.querySelector(".info-button");
    button.style.scale = "100% 0%";

    let modal = document.querySelector(".info");
    modal.style.scale = "100% 100%";

    let modalBlur = document.querySelector(".info-blur");
    modalBlur.style.scale = "100% 100%";

    open = !open;

}

document.querySelector(".info-button").addEventListener("click", openInfo);
document.querySelector(".info-close").addEventListener("click", openInfo);
