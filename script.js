document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const radios = document.querySelectorAll('.box-radio');
    const totalPriceElement = document.querySelector('.total-price');

    function updateTotalPrice(box) {
        const priceElement = box.querySelector('.price');
        const price = priceElement.textContent;
        totalPriceElement.textContent = `Total : ${price}`;
    }

    function handleBoxSelection(event) {
        const box = event.currentTarget;
        const radio = box.querySelector('.box-radio');
        boxes.forEach(b => b.classList.remove('expanded'));
        box.classList.add('expanded');
        radio.checked = true;
        updateTotalPrice(box);
    }

    boxes.forEach(box => {
        box.addEventListener('click', handleBoxSelection);
    });

    radios.forEach(radio => {
        radio.addEventListener('click', (event) => {
            event.stopPropagation();
            const box = event.currentTarget.closest('.box');
            boxes.forEach(b => b.classList.remove('expanded'));
            box.classList.add('expanded');
            updateTotalPrice(box);
        });
    });

    const defaultBox = document.querySelector('.box.most-popular');
    if (defaultBox) {
        updateTotalPrice(defaultBox);
    }
}); 