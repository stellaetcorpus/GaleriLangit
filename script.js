
let currentIndex = 0;
let isExpanded = false; 
document.getElementById("myElement").onclick = function() {
    if (!isExpanded) {
        this.style.boxShadow = "none";
        this.style.height = "200px";
        this.style.transitionDuration = "1s";
        this.style.transitionProperty = "all";
        this.style.transitionDelay = "0.5s";
        this.style.overflow = "auto";
        this.style.scrollbarWidth = "none";
    } else {
        // Gaya baru saat kembali ke bentuk awal
        this.style.margin = "0px";
        this.style.border = "1px solid rgb(225, 179, 255)";
        this.style.padding = "0";
        this.style.width = "319px";
        this.style.height = "30px";
        this.style.backgroundColor = "rgb(255, 255, 255)";
        this.style.flexGrow = "0";
        this.style.transitionDuration = "1s";
        this.style.transitionProperty = "all";
        this.style.transitionDelay = "0.5s";
        this.style.zIndex = "1";
        this.style.display = "flex";
        this.style.justifyContent = "center";
        this.style.alignItems = "center";
        this.style.textAlign = "center";
        this.style.overflow = "hidden";
    }
    isExpanded = !isExpanded;
};

document.getElementById("myElementri").onclick = function() {
    if (!isExpanded) {
        this.style.boxShadow = "none";
        this.style.height = "500px";
        this.style.padding_top="300px"
        this.style.transitionDuration = "1s";
        this.style.transitionProperty = "all";
        this.style.transitionDelay = "0.5s";
        this.style.overflow = "auto";
        this.style.scrollbarWidth = "none";
    } else {
        // Gaya baru saat kembali ke bentuk awal
        this.style.margin = "0px";
        this.style.border = "1px solid rgb(225, 179, 255)";
        this.style.padding = "0";
        this.style.width = "319px";
        this.style.height = "30px";
        this.style.backgroundColor = "rgb(255, 255, 255)";
        this.style.flexGrow = "0";
        this.style.transitionDuration = "1s";
        this.style.transitionProperty = "all";
        this.style.transitionDelay = "0.5s";
        this.style.zIndex = "1";
        this.style.display = "flex";
        this.style.justifyContent = "center";
        this.style.alignItems = "center";
        this.style.textAlign = "center";
        this.style.overflow = "hidden";
    }
    isExpanded = !isExpanded;
};

document.getElementById("myElem").onclick = function() {
    if (!isExpanded) {
        this.style.boxShadow = "none";
        this.style.height = "500px";
        this.style.padding_top="300px"
        this.style.transitionDuration = "1s";
        this.style.transitionProperty = "all";
        this.style.transitionDelay = "0.5s";
        this.style.overflow = "auto";
        this.style.scrollbarWidth = "none";
    } else {
        // Gaya baru saat kembali ke bentuk awal
        this.style.margin = "0px";
        this.style.border = "1px solid rgb(225, 179, 255)";
        this.style.padding = "0";
        this.style.width = "319px";
        this.style.height = "30px";
        this.style.backgroundColor = "rgb(255, 255, 255)";
        this.style.flexGrow = "0";
        this.style.transitionDuration = "1s";
        this.style.transitionProperty = "all";
        this.style.transitionDelay = "0.5s";
        this.style.zIndex = "1";
        this.style.display = "flex";
        this.style.justifyContent = "center";
        this.style.alignItems = "center";
        this.style.textAlign = "center";
        this.style.overflow = "hidden";
    }
    isExpanded = !isExpanded;
};

// let isExpanded = false;
function toggleExpandri() {
    const middleElement = document.getElementById("myElementri");

    if (!isExpanded) {
        middleElement.style.height = "500px";
        middleElement.style.transitionDuration = "1s";
        middleElement.style.transitionProperty = "all";
        middleElement.style.transitionDelay = "0.5s";
        middleElement.style.overflow = "auto";
    } else {
        middleElement.style.height = "25px"; // Kembali ke ukuran awal
        middleElement.style.transitionDuration = "1s";
        middleElement.style.transitionProperty = "all";
        middleElement.style.transitionDelay = "0.5s";
    }

    isExpanded = !isExpanded;
}


// let isExpanded = false;
function toggleExpandt() {
    const middleElement = document.getElementById("myElement");

    if (!isExpanded) {
        middleElement.style.height = "300px";
        middleElement.style.transitionDuration = "1s";
        middleElement.style.transitionProperty = "all";
        middleElement.style.transitionDelay = "0.5s";
        middleElement.style.overflow = "auto";
    } else {
        middleElement.style.height = "25px"; // Kembali ke ukuran awal
        middleElement.style.transitionDuration = "1s";
        middleElement.style.transitionProperty = "all";
        middleElement.style.transitionDelay = "0.5s";
    }

    isExpanded = !isExpanded;
}

function toggleExpand() {
    const middleElement = document.getElementById("myElementka");

    if (!isExpanded) {
        middleElement.style.height = "500px";
        middleElement.style.transitionDuration = "1s";
        middleElement.style.transitionProperty = "all";
        middleElement.style.transitionDelay = "0.5s";
        middleElement.style.overflow = "auto";
    } else {
        middleElement.style.height = "25px"; // Kembali ke ukuran awal
        middleElement.style.transitionDuration = "1s";
        middleElement.style.transitionProperty = "all";
        middleElement.style.transitionDelay = "0.5s";
    }

    isExpanded = !isExpanded;
}

function playVideo() {
    document.getElementById("myvidio").play();
}

function pauseVideo() {
    document.getElementById("myvidio").pause();
}

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

let currentSlideIndex = 0;

// Fungsi untuk memindahkan carousel
function moveToSlide(slideIndex) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = 'translateX(' + (-slideIndex * slideWidth) + 'px)';
}

// Event listener untuk tombol "next"
nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Looping kembali ke awal
    moveToSlide(currentSlideIndex);
});

// Event listener untuk tombol "previous"
prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Looping ke gambar terakhir
    moveToSlide(currentSlideIndex);
});