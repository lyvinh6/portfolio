// =====================================================
// 1. NÚT SÁNG / TỐI
// =====================================================
const themeButton = document.getElementById("themeButton");

// Khi đổi giao diện, cập nhật luôn chữ trên nút.
function showTheme() {
    const light = document.body.classList.contains("light-mode");
    themeButton.textContent = light ? "🌙 Tối" : "☀️ Sáng";
    themeButton.setAttribute("aria-pressed", String(light));
    themeButton.setAttribute("aria-label", light ? "Chuyển sang giao diện tối" : "Chuyển sang giao diện sáng");
}

// Ghi nhớ chế độ đã chọn lần trước (nếu trình duyệt cho phép).
try {
    if (localStorage.getItem("my-theme") === "light") {
        document.body.classList.add("light-mode");
    }
} catch (error) { /* Không có lưu trữ vẫn chạy bình thường. */ }
showTheme();

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    showTheme();
    try {
        localStorage.setItem("my-theme", document.body.classList.contains("light-mode") ? "light" : "dark");
    } catch (error) { /* Bỏ qua nếu trình duyệt chặn lưu trữ. */ }
});

// =====================================================
// 2. MENU ĐIỆN THOẠI
// =====================================================
const menuButton = document.getElementById("menuButton");
const mainMenu = document.getElementById("mainMenu");

menuButton.addEventListener("click", function () {
    const opened = mainMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(opened));
    menuButton.setAttribute("aria-label", opened ? "Đóng menu" : "Mở menu");
    menuButton.textContent = opened ? "✕" : "☰";
});

// Bấm mục menu thì đóng menu lại.
mainMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        mainMenu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Mở menu");
        menuButton.textContent = "☰";
    });
});

// =====================================================
// 3. BỘ LỌC DỰ ÁN
// =====================================================
const filterButtons = document.querySelectorAll(".filter-button");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const type = button.dataset.filter;

        filterButtons.forEach(function (otherButton) {
            const selected = otherButton === button;
            otherButton.classList.toggle("active", selected);
            otherButton.setAttribute("aria-pressed", String(selected));
        });

        projects.forEach(function (project) {
            project.hidden = type !== "all" && project.dataset.category !== type;
        });
    });
});

// =====================================================
// 4. KIỂM TRA FORM, SAU ĐÓ MỞ GMAIL
// =====================================================
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const gmailFallback = document.getElementById("gmailFallback");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Tránh tải lại trang.

    const name = document.getElementById("senderName").value.trim();
    const email = document.getElementById("senderEmail").value.trim();
    const message = document.getElementById("senderMessage").value.trim();
    const emailCorrect = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    gmailFallback.hidden = true;

    if (!name || !email || !message) {
        formMessage.textContent = "Vui lòng điền đầy đủ thông tin.";
        return;
    }
    if (!emailCorrect) {
        formMessage.textContent = "Email chưa hợp lệ. Bạn kiểm tra lại nhé.";
        return;
    }

    // Chỉ tạo email soạn sẵn, KHÔNG tự gửi thư.
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1"
        + "&to=" + encodeURIComponent("lyvinh4145@gmail.com")
        + "&su=" + encodeURIComponent("Liên hệ từ Portfolio - " + name)
        + "&body=" + encodeURIComponent("Họ tên: " + name
            + "\nEmail: " + email + "\n\nNội dung:\n" + message);

    gmailFallback.href = gmailUrl;
    gmailFallback.hidden = false;
    formMessage.textContent = "Thông tin hợp lệ. Hãy kiểm tra Gmail để gửi thư.";
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
});

// =====================================================
// 5. TẮT / BẬT HIỆU ỨNG ĐỘNG (NẾU CẦN)
// =====================================================
const effectsButton = document.getElementById("effectsButton");

function updateEffectsButton() {
    const disabled = document.body.classList.contains("motion-off");
    effectsButton.textContent = disabled ? "✦ Bật hiệu ứng" : "✦ Hiệu ứng";
    effectsButton.setAttribute("aria-pressed", String(!disabled));
}

effectsButton.addEventListener("click", function () {
    document.body.classList.toggle("motion-off");
    updateEffectsButton();
});
updateEffectsButton();

// =====================================================
// 6. THANH TIẾN TRÌNH CUỘN TRANG (DẢI SÁNG Ở MENU)
// =====================================================
const scrollProgress = document.getElementById("scrollProgress");

function updateScrollProgress() {
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;
    scrollProgress.style.width = Math.min(percent, 100) + "%";
}
window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();
