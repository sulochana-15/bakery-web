const API_URL = "http://localhost:5000/api";


// Load dashboard statistics

async function loadDashboard() {

    try {

        const productsResponse =
            await fetch(`${API_URL}/products`);

        const ordersResponse =
            await fetch(`${API_URL}/orders`);

        const usersResponse =
            await fetch(`${API_URL}/users`);

        const reviewsResponse =
            await fetch(`${API_URL}/reviews`);


        const products =
            await productsResponse.json();

        const orders =
            await ordersResponse.json();

        const users =
            await usersResponse.json();

        const reviews =
            await reviewsResponse.json();


        document.getElementById("productCount").textContent =
            Array.isArray(products) ? products.length : 0;

        document.getElementById("orderCount").textContent =
            Array.isArray(orders) ? orders.length : 0;

        document.getElementById("userCount").textContent =
            Array.isArray(users) ? users.length : 0;

        document.getElementById("reviewCount").textContent =
            Array.isArray(reviews) ? reviews.length : 0;


    } catch (error) {

        console.error(
            "Dashboard loading error:",
            error
        );

    }

}


// Logout

document
    .getElementById("logoutBtn")
    .addEventListener("click", () => {

        alert("Admin logged out");

        window.location.href = "../index.html";

    });


// Start dashboard

loadDashboard();