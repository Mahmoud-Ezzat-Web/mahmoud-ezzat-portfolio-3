document.addEventListener('DOMContentLoaded', () => {
    // 1. القائمة الجانبية للموبايل
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. معالجة نموذج البحث العقاري
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const location = searchForm.querySelector('input').value;
            alert(`جاري البحث عن العقارات المتاحة في (${location})...`);
        });
    }
});