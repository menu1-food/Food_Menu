document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".categories .category");
  const cards = document.querySelectorAll(".cards-container .card");

  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all
      categoryButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedCategory = button.textContent.trim().toLowerCase();

      cards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");

        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
