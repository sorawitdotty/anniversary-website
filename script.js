/* =========================================
   ANNIVERSARY DATE
========================================= */
// แก้วันที่เริ่มต้นตรงนี้
const startDate = new Date("2024-04-17T18:00:00");


/* =========================================
   SHOW START DATE
========================================= */
const startDateText = document.getElementById("startDateText");

const formattedDate = startDate.toLocaleDateString("th-TH", {
    day: "numeric",
    month: "long",
    year: "numeric"
});

if (startDateText) {
    startDateText.textContent = formattedDate;
}


/* =========================================
   COUNTDOWN
========================================= */
function updateCounter() {
    const now = new Date();
    let difference = now.getTime() - startDate.getTime();

    if (difference < 0) {
        difference = 0;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);


/* =========================================
   LIGHTBOX
========================================= */
function openLightbox(imageUrl) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    if (lightbox && lightboxImage) {
        lightboxImage.src = imageUrl;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");

    if (lightbox) {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

// Close when clicking outside image
const lightboxEl = document.getElementById("lightbox");
if (lightboxEl) {
    lightboxEl.addEventListener("click", function (event) {
        if (event.target === this) {
            closeLightbox();
        }
    });
}

// Close with ESC key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});


/* =========================================
   FLOATING HEARTS
========================================= */
function createHeart() {
    const container = document.querySelector(".hearts-container");
    if (!container) return;

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";
    
    const size = 12 + Math.random() * 18;
    heart.style.fontSize = size + "px";

    const duration = 6 + Math.random() * 5;
    heart.style.animationDuration = duration + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 1600);