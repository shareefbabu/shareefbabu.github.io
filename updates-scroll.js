const track = document.getElementById("updates-track");

updates.forEach(update => {

    const item = document.createElement("div");
    item.className = "update-item";
    item.innerHTML = update;

    track.appendChild(item);

});

// Duplicate first item for seamless looping
const clone = track.firstElementChild.cloneNode(true);
track.appendChild(clone);

const items = document.querySelectorAll(".update-item");

let current = 0;
const itemHeight = 70;

function nextUpdate(){

    current++;

    track.style.transition = "transform .7s ease";
    track.style.transform = `translateY(-${current * itemHeight}px)`;

    if(current === items.length - 1){

        setTimeout(() => {

            track.style.transition = "none";
            track.style.transform = "translateY(0)";
            current = 0;

        },700);

    }

}

let interval = setInterval(nextUpdate,3000);

const container = document.querySelector(".updates-container");

container.addEventListener("mouseenter", () => {

    clearInterval(interval);

});

container.addEventListener("mouseleave", () => {

    interval = setInterval(nextUpdate,3000);

});