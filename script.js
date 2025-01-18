// Handle Tab Switching for Search Section
const dimensionTab = document.getElementById('search-dimension-btn');
const carTab = document.getElementById('search-car-btn');
const dimensionForm = document.getElementById('search-dimension');
const carForm = document.getElementById('search-car');

dimensionTab.addEventListener('click', () => {
    dimensionTab.classList.add('active');
    carTab.classList.remove('active');
    dimensionForm.classList.add('active');
    carForm.classList.remove('active');
});

carTab.addEventListener('click', () => {
    carTab.classList.add('active');
    dimensionTab.classList.remove('active');
    carForm.classList.add('active');
    dimensionForm.classList.remove('active');
});
