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

// .........
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
const right = document.querySelector('.right')
const left = document.querySelector('.left')
const frameSlider = document.querySelector('.frame-slider')
const imge = document.querySelectorAll('.imge')
const bottom = document.querySelector('.bottom')
slideNumber = 0
for (let i = 0; i < imge.length; i++) {
    const div = document.createElement('div')
    div.className = 'button'
    bottom.appendChild(div)
}
const button = document.querySelectorAll('.button')
button[0].style.backgroundColor = '#1f7ea9'
const bgCol = () => {
    button.forEach((tranSp) => {
        tranSp.style.backgroundColor = 'transparent'
    })
}
const changDivCol = () => {
    button.forEach(function (div, i) {
        div.addEventListener('click', () => {
            bgCol()
            frameSlider.style.transform = `translateX(-${i * 60}rem)`;
            div.style.backgroundColor = '#1f7ea9'
        })

    })
}

changDivCol()
right.addEventListener('click', () => {
    if (slideNumber < imge.length - 1) {
        nextSlid()
        bgCol()
        button[slideNumber].style.backgroundColor = '#1f7ea9'
    } else {
        getFirstSlider()
    }
    // dissPlay()
});

left.addEventListener('click', () => {
    if (slideNumber >= 1) {
        prevSlider()
        bgCol()
        button[slideNumber].style.backgroundColor = '#1f7ea9'


    } else {
        getFirstSlider()
    }
    // dissPlay()
})
// const dissPlay = () => {
//     if (slideNumber < imge.length - 1) {
//         right.style.display = 'block'
//     } else {
//         right.style.display = 'none'
//     } if (slideNumber > 0) {
//         left.style.display = 'block'
//     } else {
//         left.style.display = 'none'
//     }
// }
const nextSlid = () => {
    slideNumber++;
    frameSlider.style.transform = `translateX(-${slideNumber * 60}rem)`;
}
const prevSlider = () => {
    frameSlider.style.transform = `translateX(-${(slideNumber - 1) * 60}rem)`
    slideNumber--;
}
const getFirstSlider = () => {
    slideNumber = 0; // Reset first
    frameSlider.style.transform = `translateX(0px)`;
}
// checkbox-Toggle
const inputEl = document.querySelector('.input')
const checkToggle = document.querySelector('.checkbox-Toggle')
inputEl.checked = JSON.parse(localStorage.getItem('mode'))
updateBody()
function updateBody() {
    if (inputEl.checked) {
        checkToggle.style.backgroundColor = '#2291c4'
    } else {
        checkToggle.style.backgroundColor = '#ffffff'
    }
}
inputEl.addEventListener('input', () => {
    updateBody()
    updateLocalStirage()
})
function updateLocalStirage() {
    localStorage.setItem('mode', JSON.stringify(inputEl.checked))
}
// testimonials
const testimonials = [
    {
        name: 'Lana Lezhava',
        text: ' adipisicing elit. Similique expedita blanditiis vitae voluptatem ea corporis, facilis sapiente, rerum fugit accusamus, molestiae esse. Quasi dolorum dolorem maxime dicta architecto, culpa ducimus?',
    },
    {
        name: 'Diana Ashba',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque minima sapiente perspiciatis quam. Quia quibusdam magni quisquam adipisci, facere recusandae!',
    },
    {
        name: 'Mari gangad',
        text: ', dolor sit amet consectetur adipisicing elit. Vel, perferendis fugit. Modi, itaque. Nesciunt rerum corporis provident porro iste mollitia nihil rem totam, consequatur error, ad qui voluptates enim sint!',
    }
]
let idx = 0
const testiText = document.querySelector('.testi-text')
const testiName = document.querySelector('.testi-name')
function updateTestimonials() {
    const { name, text } =
        testimonials[idx]
    testiText.innerText = text
    testiName.innerText = name
    idx++
    if (idx === testimonials.length) {
        idx = 0
    }
    setTimeout(() => {
        updateTestimonials()
    }, 5000)
}
updateTestimonials()

















































// flex-container
// const right = document.querySelector('.right')
// const left = document.querySelector('.left')
// const frameSlider = document.querySelector('.frame-slider')
// const imge = document.querySelectorAll('.imge')
// const bottom = document.querySelector('.bottom')
// slideNumber = 1
// for (let i = 0; i < imge.length; i++) {
//     const div = document.createElement('div');
//     div.className = 'button';
//     bottom.appendChild(div);
// }

// const buttons = document.querySelectorAll('.button'); // Get all created buttons
// buttons[0].style.backgroundColor = '#1f7ea9'; // Set first button to black

// const resetBg = () => {
//     buttons.forEach((btn) => {
//         btn.style.backgroundColor = 'transparent'
//     })
// }
// const change = function () {
//     buttons.forEach(function (btn, i) {
//         btn.addEventListener('click', () => {
//             resetBg()
//             // Move the slider
//             frameSlider.style.transform = `translateX(-${i * 60}rem)`;

//             // Reset all button colors
//             btn.style.backgroundColor = '#1f7ea9';
//         });
//     });
// };

// change();
// right.addEventListener('click', function () {
//     if (slideNumber < imge.length) {
//         frameSlider.style.transform = `translateX(-${slideNumber * 60}rem)`
//         slideNumber++

//     } else {
//         frameSlider.style.transform = `translateX(0px)`
//         slideNumber = 0
//     }
//     resetBg()
//     // buttons[slideNumber - 1].style.backgroundColor = '#1f7ea9';
//     if (slideNumber > 0) { // Prevent accessing index -1
//         buttons[slideNumber - 1].style.backgroundColor = '#1f7ea9';
//     }
// })
// left.addEventListener('click', () => {
//     if (slideNumber > 0) {
//         frameSlider.style.transform = `translateX(-${(slideNumber - 2) * 60}rem)`
//         slideNumber--
//         resetBg()
//         buttons[slideNumber - 1].style.backgroundColor = '#1f7ea9';
//     }

// })


// const disp = () => {
//     if (slideNumber < buttons.length - 1) {
//         right.style.display = 'block'
//     } else {
//         right.style.display = 'none'
//     }
// };



