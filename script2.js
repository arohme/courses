document.addEventListener("DOMContentLoaded", function() {
    const courses = [
        { name: "Apna College -C++ with Data Structures & Algorithms  Release on 18 April", category: "programming", realPrice: 5750, price: 300 },
    ];
  
    const UpcommingCourses = document.getElementById("UpcommingCourses");
    const courseCardTemplate = document.getElementById("courseCardTemplate");
  
    function renderCourses(courseList) {
      UpcommingCourses.innerHTML = "";
      courseList.forEach((course, index) => {
        const card = courseCardTemplate.content.cloneNode(true);
        const cardElement = card.querySelector(".course-card");
        cardElement.querySelector(".course-title").innerText = course.name;
        cardElement.querySelector(".course-real-price").innerText = `Real Price: Rs${course.realPrice}`;
        cardElement.querySelector(".course-price").innerText = `My Price: Rs${course.price}`;
        const buyButton = cardElement.querySelector(".course-buy-btn");
        buyButton.innerText = "Buy Now";
        buyButton.addEventListener("click", function() {
          window.location.href = "https://t.me/BuyCourses_me_bot";
        });
        cardElement.style.backgroundColor = getRandomColor(index);
        UpcommingCourses.appendChild(card);
      });
    }
  
    function getRandomColor(index) {
      const hue = (index * 137.508) % 360; // Generate a unique hue for each index
      return `hsl(${hue}, 70%, 80%)`; // Adjust saturation and lightness for better readability
    }
  
    // Initial rendering of all courses
    renderCourses(courses);
  
    // Search functionality
    document.getElementById("searchInput").addEventListener("input", function() {
      const searchTerm = this.value.trim().toLowerCase();
      const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(searchTerm));
      renderCourses(filteredCourses);
    });
  
    // Category filtering
    document.getElementById("categorySelect").addEventListener("change", function() {
      const selectedCategory = this.value;
      if (selectedCategory === "all") {
        renderCourses(courses);
      } else {
        const filteredCourses = courses.filter(course => course.category === selectedCategory);
        renderCourses(filteredCourses);
      }
    });
});
