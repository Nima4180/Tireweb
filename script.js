// Mock data for tires
const tires = [
    { name: "All-Season Tire A", performance: "Great for all seasons", price: 120 },
    { name: "Winter Tire B", performance: "Excellent in snow", price: 150 },
    { name: "Performance Tire C", performance: "Optimal for high speed", price: 200 },
];

document.getElementById("tireSearchForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const carBrand = document.getElementById("carBrand").value;
    const carModel = document.getElementById("carModel").value;
    const carYear = document.getElementById("carYear").value;
    const tireSize = document.getElementById("tireSize").value;

    const results = tires.filter((tire) =>
        tire.name.toLowerCase().includes(tireSize.toLowerCase())
    );

    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";

    if (results.length) {
        results.forEach((tire) => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("tire-result");
            resultItem.innerHTML = `
                <h3>${tire.name}</h3>
                <p>${tire.performance}</p>
                <p>Price: $${tire.price}</p>
                <button onclick="addToCart('${tire.name}', 1, ${tire.price})">Add to Cart</button>
            `;
            searchResults.appendChild(resultItem);
        });
    } else {
        searchResults.innerHTML = "<p>No tires found. Try different search criteria.</p>";
    }
});

// Cart functionality
const cart = [];

function addToCart(item, quantity, price) {
    cart.push({ item, quantity, price, total: quantity * price });
    alert(`${item} added to cart.`);
}
