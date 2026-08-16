const reviewForm = document.getElementById("reviewForm");
const reviewsContainer = document.getElementById("reviewsContainer");

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

function displayReviews() {
    reviewsContainer.innerHTML = "";

    reviews.forEach(function(review) {
        const reviewDiv = document.createElement("div");
        reviewDiv.className = "review";

        reviewDiv.innerHTML = `
            <h3>${review.name}</h3>
            <p>${"⭐".repeat(review.rating)}</p>
            <p>${review.text}</p>
        `;

        reviewsContainer.appendChild(reviewDiv);
    });
}

reviewForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("reviewerName").value;
    const rating = Number(document.getElementById("rating").value);
    const text = document.getElementById("reviewText").value;

    const newReview = {
        name: name,
        rating: rating,
        text: text
    };

    reviews.push(newReview);

    localStorage.setItem("reviews", JSON.stringify(reviews));

    reviewForm.reset();

    displayReviews();

    alert("Review submitted successfully!");
});

displayReviews();