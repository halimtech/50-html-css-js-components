const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', boxesback)

boxesback()

function boxesback() {
    const trigger = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxtop = box.getBoundingClientRect().top

        if (boxtop < trigger) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    });
}