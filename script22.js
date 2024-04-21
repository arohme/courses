document.addEventListener("DOMContentLoaded", function() {
    const courses =  [
        {
          name: "DSA with Self paced (Geeks for Geeks)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Amazon SDE test series (Geeks for Geeks)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Java Foundation (Geeks for Geeks)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Low level Design for SDE interview (Geeks for Geeks)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Java Backend (Geeks for Geeks)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Data Structure with Python (Geeks for Geeks)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Fundamentals of Java and Java Collection (Geeks for Geeks)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Android App Development [Premium] (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Competitive Programming (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Java Foundation with Data Structures & Algorithms [English & Hindi] (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Machine Learning and Data Science (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Basics of Aptitude Preparation for Interview Rounds (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "[Premium] Data Structures and Algorithms [Career Camp] (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Advanced Data Structures (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Advanced Front-End Web Development with React (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Data Structures and Algorithms [C++] 2020 (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Full Stack Web Development (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Interview Preparation (JAVA) (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Interview Preparation [C++] (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Introduction to C++ (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
          name: "Python Foundation with Data Structures & Algorithms (Coding Ninjas)",
          category: "programming",
          realPrice: 5999,
          price: 300
        },
        {
    name: "[MySirG]Web Development with Python",
    category: "programming",
    realPrice: 5999,
    price: 300
  },
  {
    name: "[MySirG]Java Programming For beginners",
    category: "programming",
    realPrice: 5999,
    price: 300
  },
  {
    name: "[MySirG]C++ with DSA",
    category: "programming",
    realPrice: 5999,
    price: 300
  }
      ]
      
          
    
  
    const courseContainer = document.getElementById("courseContainer");
    const courseCardTemplate = document.getElementById("courseCardTemplate");
  
    function renderCourses(courseList) {
      courseContainer.innerHTML = "";
      courseList.forEach((course, index) => {
        const card = courseCardTemplate.content.cloneNode(true);
        const cardElement = card.querySelector(".course-card");
        cardElement.querySelector(".course-title").innerText = course.name;
        cardElement.querySelector(".course-real-price").innerText = `Real Price: Rs${course.realPrice}`;
        cardElement.querySelector(".course-price").innerText = `My Price: Rs${course.price}`;
        const buyButton = cardElement.querySelector(".course-buy-btn");
        const buyButton2 = cardElement.querySelector(".course-buy-btn2");
        buyButton.innerText = "Buy Now";
        buyButton.addEventListener("click", function() {
          window.location.href = "https://t.me/BuyCourses_me_bot";
        });
        buyButton2.innerText = "Buy Now";
        buyButton2.addEventListener("click", function() {
          window.location.href = "https://t.me/BuyCourses_me_bot";
        });
        cardElement.style.backgroundColor = getRandomColor(index);
        courseContainer.appendChild(card);
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
  
