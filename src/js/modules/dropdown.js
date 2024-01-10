document.querySelectorAll('.js-dropdownBtn').forEach(btn => {
    btn.addEventListener('click', function () {
        const dropdown = this.closest('.js-dropdown');
        const onlyMobile = dropdown.hasAttribute('data-device') && dropdown.getAttribute('data-device') === 'mobile';
        if (onlyMobile && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            const dropdownList = dropdown.querySelector('.js-dropdownList');
            this.classList.toggle('active');
            dropdown.classList.toggle('active');
            dropdownList.classList.toggle('active');

            document.addEventListener('click', function (e) {
                if (!dropdown.contains(e.target)) {
                    btn.classList.remove('active');
                    dropdown.classList.remove('active');
                    dropdownList.classList.remove('active');
                }
            });
        }
    });
});