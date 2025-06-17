document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const levelFilter = document.getElementById("levelFilter");
  const cards = document.querySelectorAll(".card");
  const overviewSection = document.querySelector(".overview-section");

  let selectedCategory = null;
  let selectedLevel = "all";

  // Function to apply both filters
  function applyFilters() {
    cards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category")?.toLowerCase();
      const cardLevel = card.getAttribute("data-level")?.toLowerCase();

      const matchesCategory = !selectedCategory || cardCategory === selectedCategory;
      const matchesLevel = selectedLevel === "all" || cardLevel === selectedLevel;

      card.style.display = (matchesCategory && matchesLevel) ? "block" : "none";
    });

    // Optional: show overview section based on filters
    if (overviewSection) {
      overviewSection.style.display = (selectedCategory === "overview" || selectedLevel === "all") ? "block" : "none";
    }
  }

  // Handle category button clicks
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedCategory = button.getAttribute("data-filter")?.toLowerCase();

      // Highlight active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      applyFilters();
    });
  });

  // Handle level dropdown change
  levelFilter.addEventListener("change", () => {
    selectedLevel = levelFilter.value.toLowerCase();
    applyFilters();
  });
});


  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  const closeModal = document.getElementById("closeModal");

  document.querySelectorAll(".start-btn").forEach(button => {
    button.addEventListener("click", () => {
      const videoUrl = button.getAttribute("data-video");
      videoFrame.src = videoUrl + "?autoplay=1";
      modal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    videoFrame.src = "";
  });

  // Optional: close modal when clicking outside
  window.addEventListener("click", e => {
    if (e.target == modal) {
      modal.style.display = "none";
      videoFrame.src = "";
    }
  });

