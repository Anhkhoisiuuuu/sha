// Hàm định dạng thời gian
function formatDateTime() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    
    return `Date: ${dayName} ${month} ${day}th ${year} TIME: ${hours}:${minutes} ${ampm}`;
}

// Cập nhật thời gian mỗi giây
function updateDateTime() {
    const dateTimeElement = document.querySelector('.date-time');
    dateTimeElement.textContent = formatDateTime();
}

// Chạy lần đầu và cập nhật mỗi giây
updateDateTime();
setInterval(updateDateTime, 1000);

// Kiểm tra mật khẩu
function checkPassword() {
    const password = document.getElementById('password-input').value;
    const correctPassword = 'Anhkhoiyeungoc';
    const passwordContainer = document.getElementById('password-container');
    const content = document.getElementById('content');

    if (password === correctPassword) {
        passwordContainer.style.display = 'none';
        content.style.display = 'block';
    } else {
        alert('Mật khẩu sai!');
    }
}

// Ngăn chặn click chuột phải
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Ngăn chặn Ctrl+S
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
    }
});

// Ngăn chặn F12 và DevTools
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12') {
        e.preventDefault();
    }
});

// Ngăn DevTools mở bằng Ctrl+Shift+I, Ctrl+U, Ctrl+Shift+J
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'I' || e.key === 'U' || e.key === 'J') && e.shiftKey) {
        e.preventDefault();
    }
});

// Phát hiện khi DevTools được mở
(function detectDevTools() {
    const threshold = 160; // Ngưỡng để phát hiện DevTools
    const checkDevTools = () => {
        const width = window.outerWidth - window.innerWidth;
        const height = window.outerHeight - window.innerHeight;
        if (width > threshold || height > threshold) {
            alert('Vui lòng không mở DevTools!');
            // Thử đóng cửa sổ (có thể không hoạt động trên một số trình duyệt)
            window.close();
        }
    };
    setInterval(checkDevTools, 1000);
})();