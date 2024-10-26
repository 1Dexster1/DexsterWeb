function toggleMenu() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show");
}

function openCV() {
    const frame = document.getElementById("contentFrame");
    frame.src = "cv.html"; // مسار ملف الـ CV
    document.getElementById("popup").style.display = "block";
}

function openFeedbacks() {
    const frame = document.getElementById("contentFrame");
    frame.src = "feedback/website/public/index.html"; // مسار ملف الـ Feedback
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("contentFrame").src = ""; // تفريغ الـ iframe عند الإغلاق
}




