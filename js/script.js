// untuk validasi form
function formValidate() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;

    if (name === '') {
        alert('please enter your name');
        return false;
    } else if (email === '') {
        alert('please enter your email');
        return false;   
    } else if (interest === '') {
        alert('please select your interest');
        return false;
    } else {
        alert('Form submitted successfully');
        return true;
    }
}


// untuk banner auto slide
let indexImage = 1;
const images = document.getElementsByClassName('banner-autoslide');

nextImage();

function nextImage() {
    showImage(indexImage += 1);
}

function showImage(index) {
    // reset biar kalo udah mentok bakal balik ke awal
    if (index > images.length) indexImage = 1;
    hideAllImages();
    images[indexImage - 1].style.display = 'block'; // index -1 karena index array dimulai dari 0
}


function hideAllImages() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
}

setInterval(() => nextImage(), 2500);



