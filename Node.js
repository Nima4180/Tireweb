const express = require("express");
const app = express();
app.use(express.json());

const tires = [
    { name: "All-Season Tire A", performance: "Great for all seasons", price: 120 },
    { name: "Winter Tire B", performance: "Excellent in snow", price: 150 },
];

app.get("/api/tires", (req, res) => {
    res.json(tires);
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
