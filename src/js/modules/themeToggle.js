document.addEventListener('DOMContentLoaded', function() {
    let themeToggle = document.querySelector('.js-themeToggle');
    if(themeToggle) {
        let wrapper = document.querySelector('.wrapper');
        wrapper.classList.add('light');
        themeToggle.addEventListener('click', () => {
            wrapper.classList.toggle('dark');
            wrapper.classList.toggle('light');
        })
    }
})