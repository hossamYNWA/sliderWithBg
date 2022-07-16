const sliders = document.getElementsByClassName("slider"),
rightBtn = document.getElementById("right"),
leftBtn = document.getElementById("left"),
body = document.querySelector("body");

// const changeSlider = direction =>
// {
//     console.log(`clicked ${direction}`)
//     for (let i=0;i<sliders.length;i++)
//     {
//         let bgImg;
//         if(sliders[i].classList.contains("active"))
//         {
//             sliders[i].classList.toggle("active")
//             if(direction === "right")
//             {
//                 const newSlide = i === sliders.length - 1 ? sliders[0] : sliders[i + 1];
//                 newSlide.classList.toggle("active");
//                 bgImg = newSlide.style.backgroundImage
//             }
//             else if (direction === "left")
//             {
//                 const newSlide = i === 0 ? sliders[sliders.length - 1] : sliders[i + 1];
//                 newSlide.classList.toggle("active");
//                 bgImg = newSlide.style.backgroundImage
//             }
//         }
//         body.style.backgroundImage = bgImg
//         break;
//     }
// }

function sliderRight() {
    let bgImg;
    for (let i = 0; i < sliders.length; i++) {
        if (sliders[i].classList.contains("active")) {
            sliders[i].classList.toggle("active");
            if(sliders[i+1])
            {
                sliders[i+1].classList.toggle("active");
                bgImg = sliders[i+1].style.backgroundImage
            }
            else{
                sliders[0].classList.toggle('active')
                bgImg = sliders[0].style.backgroundImage
            }
            break;
        }
    }
    body.style.backgroundImage = bgImg
}

function sliderLeft() {
    let bgImg;
    for (let i = 0; i < sliders.length; i++) {
        if (sliders[i].classList.contains("active")) {
            sliders[i].classList.toggle("active");
            const newSlide = i === 0 ? sliders[sliders.length - 1] : sliders[i - 1];
            console.log(newSlide);
            newSlide.classList.toggle("active");
            bgImg = newSlide.style.backgroundImage
        break;
        }
    }
    body.style.backgroundImage = bgImg
}

leftBtn.addEventListener('click', sliderLeft)
rightBtn.addEventListener('click', sliderRight)

