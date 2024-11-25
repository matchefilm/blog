document.addEventListener('DOMContentLoaded', () => {
    const navCardLinks = document.querySelectorAll('.nav-card-link');
    const cards = document.querySelectorAll('.card');

    navCardLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // 阻止默认链接行为

            // 隐藏所有卡片
            cards.forEach(card => {
                card.style.display = 'none';
            });

            // 显示对应的卡片
            const cardId = link.getAttribute('data-card-id');
            const cardToShow = document.getElementById(cardId);
            cardToShow.style.display = 'block';
        });
    });

    // 点击卡片外部区域时隐藏卡片（可选）
    window.addEventListener('click', (event) => {
        if (!event.target.closest('.card') && !event.target.closest('.nav-card-link')) {
            cards.forEach(card => {
                card.style.display = 'none';
            });
        }
    });
});
