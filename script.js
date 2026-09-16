/* =========================================
   ANNIVERSARY DATE
========================================= */

// แก้วันที่เริ่มต้นตรงนี้
const startDate = new Date("2024-04-17T18:00:00");


/* =========================================
   SHOW START DATE
========================================= */

const startDateText = document.getElementById("startDateText");

if (startDateText) {
    const formattedDate = startDate.toLocaleDateString("th-TH", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    startDateText.textContent = formattedDate;
}


/* =========================================
   COUNTDOWN
========================================= */

function updateCounter() {
    const now = new Date();
    let difference = now.getTime() - startDate.getTime();

    // ถ้ายังไม่ถึงวันเริ่มต้น
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

// เรียกครั้งแรก
updateCounter();

// อัปเดตทุก 1 วินาที
setInterval(updateCounter, 1000);



/* =========================================
   LIGHTBOX (SUPPORT CAPTION)
========================================= */

function openLightbox(imageUrl, captionText = "") {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");

    if (lightboxImage) lightboxImage.src = imageUrl;
    
    if (lightboxCaption) {
        lightboxCaption.textContent = captionText;
    }

    if (lightbox) {
        lightbox.classList.add("active");
    }

    // ป้องกันหน้าเว็บเลื่อน
    document.body.style.overflow = "hidden";
}


function closeLightbox() {
    const lightbox = document.getElementById("lightbox");

    if (lightbox) {
        lightbox.classList.remove("active");
    }

    document.body.style.overflow = "auto";
}


/* =========================================
   CLOSE LIGHTBOX WHEN CLICK OUTSIDE IMAGE
========================================= */

const lightboxElement = document.getElementById("lightbox");
if (lightboxElement) {
    lightboxElement.addEventListener("click", function (event) {
        if (event.target === this) {
            closeLightbox();
        }
    });
}


/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (10 + Math.random() * 20) + "px";
    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}

// สร้างหัวใจทุก 1.5 วินาที
setInterval(createHeart, 1500);