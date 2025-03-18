const paletteColor = ['#4FC3F7', '#81D4FA', '#B3E5FC', '#29B6F6']
// const palette = ['A', 'B', 'C', 'E', 'D', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const paletBTn = document.querySelector('.palette')

paletBTn.addEventListener('click', function () {
    // let newCol = '#'
    // for (i = 0; i < 6; i++) {
    //     newCol += palette[changecolor()]
    // }

    document.body.style.background = paletteColor[changecolor()]
})
function changecolor() {
    return Math.floor(Math.random() * paletteColor.length)
}
// toggle btn
const toggle = document.querySelector('.toggle')
const navLinks = document.querySelector(' nav ul')
// const ulactive = document.querySelector('.active')
toggle.addEventListener('click', function () {
    navLinks.classList.toggle('show-links')
    // ulactive.classList.toggle('show-active')

})
// modal-overlay
const modal = document.querySelector('.modal-hero')
const modalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.closed-btn')
const openBtn = document.querySelector('.mkodal-btn')

openBtn.addEventListener('click', function () {
    modal.classList.add('show-overlay')
    if (modal.classList.contains('show-overlay')) {
        modalOverlay.style.display = 'none';

    }
    changecolor()
})
closeBtn.addEventListener('click', function () {
    modal.classList.remove('show-overlay')
    if (!modal.classList.contains('show-overlay')) {
        modalOverlay.style.display = 'block';
    }
    changecolor()
}
)

// question

const cuestion = document.querySelectorAll('.custions')
const questionsButton = document.querySelectorAll('.questions-button')

questionsButton.forEach(function (btncl) {
    btncl.addEventListener('click', function (e) {
        const open = e.currentTarget.parentElement.parentElement
        cuestion.forEach(function (title) {
            if (title !== open) {
                title.classList.remove('show-text')
            }
        })
        open.classList.toggle('show-text')
    })


})


// value
let rest = 0
const value = document.querySelector('.value')
const counTbtn = document.querySelectorAll('.btn')
counTbtn.forEach(function (e) {
    e.addEventListener('click', function (n) {
        const count = n.currentTarget.classList
        if (count.contains('decrease')) {
            rest--
        } else if (count.contains('increase')) {
            rest++
        } else {
            rest = 0
        }
        if (rest < 0) {
            value.style.color = 'red'

        }
        if (rest > 0) {
            value.style.color = 'green'

        }
        value.textContent = rest
    })

})
// about
const about = document.querySelector('.about')
const tabBtn = document.querySelectorAll('.tab-btn')
const content = document.querySelectorAll('.content')
about.addEventListener('click', function (e) {
    const am = e.target.dataset.id
    if (am) {
        tabBtn.forEach(function (event) {
            event.classList.remove('active')
            e.target.classList.add('active')
        })
        content.forEach(function (artic) {
            artic.classList.remove('active')
        })
        const elem = document.getElementById(am)
        elem.classList.add('active')
    }
})
// video
const video = document.querySelector('.video-container')
const videoBtns = document.querySelector('.video-btns')
videoBtns.addEventListener('click', function () {
    if (!videoBtns.classList.contains('slide')) {
        videoBtns.classList.add('slide')
        video.pause()
    } else {
        videoBtns.classList.remove('slide')
        video.play()
    }
})
// sliders

const slider = document.querySelectorAll('.slider')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
slider.forEach(function (sliders, index) {
    sliders.style.left = `${index * 100}%`
})
let counts = 0
next.addEventListener('click', function () {
    counts++
    disPlay()
})
prev.addEventListener('click', function () {
    counts--
    disPlay()

})
function disPlay() {
    if (counts < slider.length - 1) {
        next.style.display = 'block'
    } else {
        next.style.display = 'none'
    }
    if (counts > 0) {
        prev.style.display = 'block'
    } else {
        prev.style.display = 'none'
    }
    slider.forEach(function (e) {
        e.style.transform = `translateX(-${counts * 100}%)`
    })
}