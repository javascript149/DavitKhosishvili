document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const productItems = document.querySelectorAll('.product');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        productItems.forEach(function (item) {
            const productName = item.querySelector('h2').textContent.toLowerCase();
            const isVisible = productName.includes(searchTerm);

            if (isVisible) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
