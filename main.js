const toggleNav = document.querySelector(".toggle-nav");
const nav = document.querySelector("nav");
toggleNav.addEventListener("click", function() {
    if(nav.style.display == "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});

///
const header = document.querySelector("header");
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY < 200) {
        header.classList.remove("scrolled");
        goUp.style.opacity = "0";
    } else if (this.scrollY >= 200) {
        header.classList.add("scrolled");
        goUp.style.opacity = "1";
    }
});

//
const reviews = Array.from(document.querySelectorAll(".review"));
const bullets = Array.from(document.querySelectorAll(".bullet"));
switchContent(bullets, reviews);

//
function switchContent(btns, boxes) {
    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            for(let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("active");
            }
            boxes.forEach(box => {
                if(this.id == box.dataset.id) {
                    box.classList.remove("hide");
                } else {
                    box.classList.add("hide");
                }
            });
            this.classList.add("active");
        });
    });
}