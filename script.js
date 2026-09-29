// переключение темы в 2 цвета

const themeBtn = document.getElementById('themeBtn');
const htmlElement = document.documentElement;

// установка темы
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// переключение темы + наоборот
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
}

// определене темы при открытии страницы
function initTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        setTheme(savedTheme);
        return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
}

themeBtn.addEventListener('click', toggleTheme);

initTheme();
