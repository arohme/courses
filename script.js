document.addEventListener("DOMContentLoaded", function() {
    const courses = [
      { name: "Arpit Bhayani - The System Design Masterclass", category: "programming", realPrice: 5999, price: 300 },
      { name: "be-pec_com - Data Science CT E-Learning Weekend April '2022 Batch", category: "data-science", realPrice: 5999, price: 300 },
      { name: "be-pec_com - Data Science/AI CT Program-Holistic Learning Approach!!!", category: "data-science", realPrice: 5999, price: 300 },
      { name: "Bunch of Nerds (no offtopic allowed)", category: "other", realPrice: 5999, price: 300 },
      { name: "Bunch of Retards(Offtopic Chats)", category: "other", realPrice: 5999, price: 300 },
      { name: "catking - CAT Intensive Online(All Exam)", category: "other", realPrice: 5999, price: 300 },
      { name: "Coding Blocks - Java Master Course | Crux", category: "programming", realPrice: 5999, price: 300 },
      { name: "Durgasoft Courses", category: "programming", realPrice: 5999, price: 300 },
      { name: "Grow Data Skills - Fast Track Data Engineering Bootcamp(NooB 1_0 LIVE Batch)", category: "data-science", realPrice: 5999, price: 300 },
      { name: "IIB PCB (NEET)", category: "other", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - A Job Ready Bootcamp in C++, DSA and IOT", category: "programming", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Be A DevOps Pro", category: "programming", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Big Data Masters", category: "data-science", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Cyber Security Masters", category: "other", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - DSA for FAANG preparation with Python and JavaScript", category: "programming", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Enterprise Java with Spring Boot", category: "programming", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Full Stack Blockchain Development", category: "programming", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Full Stack Data Analytics 2_0", category: "data-science", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Full Stack Data Science BootCamp 2_0", category: "data-science", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Full Stack Java Developer", category: "programming", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Full Stack JavaScript Bootcamp 2_0", category: "programming", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Industry Ready Data Science Projects", category: "data-science", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Job Guaranteed Big Data Bootcamp", category: "data-science", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Job Guaranteed Big Data Bootcamp 2_0", category: "data-science", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Machine Learning Bootcamp", category: "machine-learning", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - System Design with Design Patterns", category: "programming", realPrice: 5999, price: 300 },
      { name: "iNeuron_ai - Web Automation Using Selenium With Java and Cucumber BDD", category: "programming", realPrice: 5999, price: 300 },
      { name: "Jobaaj Learning", category: "other", realPrice: 5999, price: 300 },
      { name: "Love Babbar - Web Development Bootcamp", category: "programming", realPrice: 5999, price: 300 },
      { name: "Love Babbar - Supreme Batch C++ With DSA", category: "programming", realPrice: 5999, price: 300 },
      { name: "Apna College Delta Batch WEBDEVELOPMENT", category: "webdevlopment", realPrice: 5999, price: 300 },
      { name: "Namaste React", category: "programming", realPrice: 5999, price: 300 },
      { name: "onlinelearningcenter_in - DE1", category: "other", realPrice: 5999, price: 300 },
      { name: "Prepinsta Prime", category: "other", realPrice: 5999, price: 300 },
      { name: "PW - Parakram GATE 2024 Computer Science Weekday (Hinglish)", category: "other", realPrice: 5999, price: 300 },
      { name: "PWSkills - Data Science Masters", category: "data-science", realPrice: 5999, price: 300 },
      { name: "PWSkills - Decode DSA with C++", category: "programming", realPrice: 5999, price: 300 },
      { name: "PWSkills - Full Stack Web Development", category: "programming", realPrice: 5999, price: 300 },
      { name: "PWSkills - Java with DSA and System Design", category: "programming", realPrice: 5999, price: 300 },
      { name: "PWSkills - Java with DSA and System Design 2_0", category: "programming", realPrice: 5999, price: 300 },
      { name: "Sanket Singh - Learn Backend In NodeJS From Scratch", category: "programming", realPrice: 5999, price: 300 },
      { name: "TLE Eliminators 7_0 Batch - Graphs + Trees Summer Bootcamp", category: "programming", realPrice: 5999, price: 300 },
      { name: "TLE Eliminators 7_0 Batch - Level 1 Course", category: "programming", realPrice: 5999, price: 300 },
      { name: "TLE Eliminators 7_0 Batch - Level 2 Course", category: "programming", realPrice: 5999, price: 300 },
      { name: "TLE Eliminators 7_0 Batch - Level 3 Course", category: "programming", realPrice: 5999, price: 300 },
      { name: "TLE Eliminators 7_0 Batch - Level 4 Course", category: "programming", realPrice: 5999, price: 300 }
    ];
  
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
        buyButton.innerText = "Buy Now";
        buyButton.addEventListener("click", function() {
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
  
