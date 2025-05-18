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

// Kiểm tra mật khẩu với SHA-256
function checkPassword() {
    const password = document.getElementById('password-input').value;
    // Băm mật khẩu đầu vào bằng SHA-256
    const hash = sha256(password);
    // Giá trị băm của "12345"
    const correctHash = '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5';
    const passwordContainer = document.getElementById('password-container');
    const content = document.getElementById('content');

    if (hash === correctHash) {
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

// Phát hiện DevTools bằng cách ghi đè console.log
(function detectDevTools() {
    let devtoolsOpen = false;
    const originalConsoleLog = console.log;

    console.log = function () {
        devtoolsOpen = true;
        originalConsoleLog.apply(console, arguments);
    };

    setInterval(() => {
        if (devtoolsOpen) {
            alert('Vui lòng không mở DevTools!');
            devtoolsOpen = false;
            window.location.reload();
        }
    }, 1000);

    setInterval(() => {
        const start = new Date();
        debugger;
        if (new Date() - start > 100) {
            alert('Vui lòng không mở DevTools!');
            window.location.reload();
        }
    }, 1000);
});

// Thư viện SHA-256 từ CDN (được tải tự động qua script bên dưới)