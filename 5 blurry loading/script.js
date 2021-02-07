const loadingtext = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load2 = 0

let int = setInterval(load, 30)

function load() {
    load2++

    if (load2 > 99) {
        clearInterval(int)
    }

    loadingtext.innerText = `${load2}%`
    loadingtext.style.opacity = scale(load2, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load2, 0, 100, 50, 0)}px)`
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}