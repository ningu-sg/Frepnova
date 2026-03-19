// ============================================
// ONLINE COURSE PLATFORM - CORE APPLICATION
// ============================================

// --- Course Data ---
const COURSES = [
  {
    id: 1, title: "Complete Web Development Bootcamp",
    instructor: "Dr. Sarah Chen", price: 2499, originalPrice: 7999,
    category: "Web Development", rating: 4.8, students: 12450, duration: "42 hours",
    level: "Beginner", emoji: "🌐",
    description: "Master HTML, CSS, JavaScript, React, Node.js and more. Build 20+ real-world projects from scratch and become a full-stack developer.",
    modules: [
      { title: "Introduction to Web Development", lessons: 8, duration: "2h 30m" },
      { title: "HTML5 Fundamentals", lessons: 12, duration: "4h 15m" },
      { title: "CSS3 & Responsive Design", lessons: 15, duration: "5h 45m" },
      { title: "JavaScript ES6+", lessons: 20, duration: "8h 20m" },
      { title: "React.js Framework", lessons: 18, duration: "7h 30m" },
      { title: "Node.js & Express", lessons: 14, duration: "6h 10m" },
      { title: "Database Integration", lessons: 10, duration: "4h 00m" },
      { title: "Deployment & DevOps", lessons: 8, duration: "3h 30m" }
    ]
  },
  {
    id: 2, title: "Python Programming Masterclass",
    instructor: "Prof. James Miller", price: 1999, originalPrice: 5999,
    category: "Programming", rating: 4.7, students: 18320, duration: "38 hours",
    level: "Beginner", emoji: "🐍",
    description: "Learn Python from zero to hero. Covers data structures, OOP, file handling, and automation with hands-on projects.",
    modules: [
      { title: "Python Basics & Setup", lessons: 10, duration: "3h 00m" },
      { title: "Data Types & Structures", lessons: 14, duration: "5h 20m" },
      { title: "Control Flow & Functions", lessons: 12, duration: "4h 45m" },
      { title: "Object-Oriented Programming", lessons: 16, duration: "6h 30m" },
      { title: "File Handling & Exceptions", lessons: 8, duration: "3h 15m" },
      { title: "Python Libraries & APIs", lessons: 12, duration: "5h 00m" },
      { title: "Automation Projects", lessons: 10, duration: "4h 10m" }
    ]
  },
  {
    id: 3, title: "Artificial Intelligence Fundamentals",
    instructor: "Dr. Aisha Patel", price: 3499, originalPrice: 9999,
    category: "Artificial Intelligence", rating: 4.9, students: 8760, duration: "56 hours",
    level: "Intermediate", emoji: "🤖",
    description: "Deep dive into AI concepts including machine learning, neural networks, NLP, and computer vision with TensorFlow and PyTorch.",
    modules: [
      { title: "Introduction to AI", lessons: 6, duration: "2h 00m" },
      { title: "Mathematics for AI", lessons: 14, duration: "6h 30m" },
      { title: "Machine Learning Algorithms", lessons: 18, duration: "8h 45m" },
      { title: "Deep Learning & Neural Networks", lessons: 20, duration: "10h 00m" },
      { title: "Natural Language Processing", lessons: 12, duration: "5h 30m" },
      { title: "Computer Vision", lessons: 14, duration: "6h 15m" },
      { title: "AI Ethics & Deployment", lessons: 8, duration: "3h 00m" }
    ]
  },
  {
    id: 4, title: "Data Science with R & Python",
    instructor: "Emily Watson", price: 2999, originalPrice: 8499,
    category: "Data Science", rating: 4.6, students: 9540, duration: "48 hours",
    level: "Intermediate", emoji: "📊",
    description: "Master data analysis, visualization, and statistical modeling using R and Python. Work with real datasets and create compelling insights.",
    modules: [
      { title: "Data Science Overview", lessons: 6, duration: "2h 00m" },
      { title: "Statistics & Probability", lessons: 14, duration: "5h 30m" },
      { title: "Data Wrangling with Pandas", lessons: 12, duration: "4h 45m" },
      { title: "Data Visualization", lessons: 10, duration: "4h 00m" },
      { title: "Machine Learning for Data Science", lessons: 16, duration: "7h 20m" },
      { title: "R Programming", lessons: 12, duration: "5h 15m" },
      { title: "Capstone Projects", lessons: 8, duration: "6h 00m" }
    ]
  },
  {
    id: 5, title: "React.js Advanced Patterns",
    instructor: "Kevin Park", price: 1799, originalPrice: 4999,
    category: "Web Development", rating: 4.8, students: 6780, duration: "28 hours",
    level: "Advanced", emoji: "⚛️",
    description: "Take your React skills to the next level with advanced hooks, performance optimization, state management, and micro-frontend architecture.",
    modules: [
      { title: "Advanced Hooks Patterns", lessons: 10, duration: "4h 00m" },
      { title: "State Management Deep Dive", lessons: 8, duration: "3h 30m" },
      { title: "Performance Optimization", lessons: 12, duration: "5h 15m" },
      { title: "Testing React Applications", lessons: 10, duration: "4h 20m" },
      { title: "Server-Side Rendering", lessons: 8, duration: "3h 45m" },
      { title: "Micro-Frontend Architecture", lessons: 6, duration: "3h 00m" }
    ]
  },
  {
    id: 6, title: "Java Programming: Zero to Hero",
    instructor: "Michael Torres", price: 1499, originalPrice: 4499,
    category: "Programming", rating: 4.5, students: 15200, duration: "35 hours",
    level: "Beginner", emoji: "☕",
    description: "Comprehensive Java course covering syntax, OOP, collections, multithreading, and Spring Boot framework for enterprise applications.",
    modules: [
      { title: "Java Fundamentals", lessons: 12, duration: "4h 30m" },
      { title: "Object-Oriented Programming", lessons: 14, duration: "5h 45m" },
      { title: "Collections Framework", lessons: 10, duration: "4h 00m" },
      { title: "Exception Handling & I/O", lessons: 8, duration: "3h 15m" },
      { title: "Multithreading & Concurrency", lessons: 10, duration: "4h 30m" },
      { title: "Spring Boot Basics", lessons: 12, duration: "5h 00m" }
    ]
  },
  {
    id: 7, title: "Machine Learning A-Z",
    instructor: "Dr. Raj Krishnan", price: 2799, originalPrice: 7499,
    category: "Artificial Intelligence", rating: 4.7, students: 11230, duration: "44 hours",
    level: "Intermediate", emoji: "🧠",
    description: "Complete machine learning course with regression, classification, clustering, reinforcement learning, and real-world case studies.",
    modules: [
      { title: "ML Fundamentals & Math", lessons: 10, duration: "4h 00m" },
      { title: "Regression Models", lessons: 12, duration: "5h 30m" },
      { title: "Classification Algorithms", lessons: 14, duration: "6h 15m" },
      { title: "Clustering & Dimensionality Reduction", lessons: 10, duration: "4h 45m" },
      { title: "Ensemble Methods", lessons: 8, duration: "3h 30m" },
      { title: "Deep Learning Introduction", lessons: 12, duration: "5h 00m" },
      { title: "ML Projects & Deployment", lessons: 10, duration: "5h 00m" }
    ]
  },
  {
    id: 8, title: "Full-Stack JavaScript Developer",
    instructor: "Lisa Nguyen", price: 3299, originalPrice: 8999,
    category: "Web Development", rating: 4.9, students: 7890, duration: "52 hours",
    level: "Intermediate", emoji: "🚀",
    description: "Become a full-stack developer with JavaScript. Covers MERN stack (MongoDB, Express, React, Node.js) with CI/CD and cloud deployment.",
    modules: [
      { title: "Advanced JavaScript", lessons: 14, duration: "5h 30m" },
      { title: "React & Redux", lessons: 16, duration: "7h 00m" },
      { title: "Node.js & Express APIs", lessons: 14, duration: "6h 15m" },
      { title: "MongoDB & Mongoose", lessons: 10, duration: "4h 30m" },
      { title: "Authentication & Security", lessons: 8, duration: "3h 45m" },
      { title: "Testing & CI/CD", lessons: 10, duration: "4h 00m" },
      { title: "Cloud Deployment", lessons: 8, duration: "3h 30m" }
    ]
  },
  {
    id: 9, title: "Data Visualization Masterclass",
    instructor: "Anna Schmidt", price: 1299, originalPrice: 3999,
    category: "Data Science", rating: 4.6, students: 5430, duration: "22 hours",
    level: "Beginner", emoji: "📈",
    description: "Create stunning data visualizations using D3.js, Tableau, and Python. Transform raw data into beautiful interactive charts and dashboards.",
    modules: [
      { title: "Visualization Principles", lessons: 6, duration: "2h 00m" },
      { title: "D3.js Fundamentals", lessons: 12, duration: "5h 00m" },
      { title: "Interactive Charts", lessons: 10, duration: "4h 30m" },
      { title: "Tableau for Business", lessons: 8, duration: "3h 15m" },
      { title: "Python Visualization Libraries", lessons: 10, duration: "4h 00m" },
      { title: "Dashboard Projects", lessons: 6, duration: "3h 15m" }
    ]
  },
  {
    id: 10, title: "C++ Game Development",
    instructor: "Alex Rivera", price: 2199, originalPrice: 5999,
    category: "Programming", rating: 4.4, students: 4320, duration: "40 hours",
    level: "Advanced", emoji: "🎮",
    description: "Build games from scratch using C++ and Unreal Engine. Learn game physics, rendering, AI, and multiplayer networking.",
    modules: [
      { title: "C++ Essentials", lessons: 14, duration: "5h 30m" },
      { title: "Game Architecture", lessons: 10, duration: "4h 00m" },
      { title: "Unreal Engine Basics", lessons: 12, duration: "5h 15m" },
      { title: "Game Physics & Collision", lessons: 10, duration: "4h 30m" },
      { title: "Graphics & Rendering", lessons: 12, duration: "5h 45m" },
      { title: "AI for Games", lessons: 8, duration: "3h 30m" },
      { title: "Multiplayer & Networking", lessons: 10, duration: "5h 00m" }
    ]
  },
  {
    id: 11, title: "Deep Learning Specialization",
    instructor: "Dr. Lin Wei", price: 3999, originalPrice: 11999,
    category: "Artificial Intelligence", rating: 4.9, students: 6540, duration: "60 hours",
    level: "Advanced", emoji: "🔬",
    description: "Master deep learning with CNNs, RNNs, GANs, transformers and attention mechanisms. Implement cutting-edge architectures in PyTorch.",
    modules: [
      { title: "Neural Network Foundations", lessons: 12, duration: "5h 00m" },
      { title: "Convolutional Neural Networks", lessons: 14, duration: "6h 30m" },
      { title: "Recurrent Neural Networks", lessons: 12, duration: "5h 45m" },
      { title: "Generative Adversarial Networks", lessons: 10, duration: "5h 00m" },
      { title: "Transformers & Attention", lessons: 14, duration: "7h 00m" },
      { title: "Advanced Architectures", lessons: 10, duration: "5h 30m" },
      { title: "Research & Papers", lessons: 8, duration: "4h 15m" }
    ]
  },
  {
    id: 12, title: "SQL & Database Management",
    instructor: "Robert Kim", price: 999, originalPrice: 2999,
    category: "Data Science", rating: 4.5, students: 20100, duration: "18 hours",
    level: "Beginner", emoji: "🗄️",
    description: "Learn SQL from basics to advanced queries. Master database design, optimization, and work with MySQL, PostgreSQL, and MongoDB.",
    modules: [
      { title: "Database Fundamentals", lessons: 8, duration: "2h 30m" },
      { title: "SQL Basics & CRUD", lessons: 10, duration: "3h 30m" },
      { title: "Advanced Queries", lessons: 12, duration: "4h 15m" },
      { title: "Database Design & Normalization", lessons: 8, duration: "3h 00m" },
      { title: "Performance Optimization", lessons: 6, duration: "2h 15m" },
      { title: "NoSQL & MongoDB", lessons: 6, duration: "2h 30m" }
    ]
  }
];

// --- Category Colors ---
const CATEGORY_COLORS = {
  "Web Development": { bg: "#e0f2fe", color: "#0369a1", dark_bg: "rgba(3,105,161,0.2)", dark_color: "#38bdf8" },
  "Programming": { bg: "#fce7f3", color: "#be185d", dark_bg: "rgba(190,24,93,0.2)", dark_color: "#f472b6" },
  "Artificial Intelligence": { bg: "#ede9fe", color: "#6d28d9", dark_bg: "rgba(109,40,217,0.2)", dark_color: "#a78bfa" },
  "Data Science": { bg: "#d1fae5", color: "#047857", dark_bg: "rgba(4,120,87,0.2)", dark_color: "#34d399" }
};

// --- Testimonials Data ---
const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Software Developer", text: "This platform transformed my career. The courses are well-structured and the instructors are amazing. I went from knowing nothing about coding to landing my dream job!", rating: 5, initial: "P" },
  { name: "David Chen", role: "Data Analyst", text: "The data science courses here are top-notch. The hands-on projects gave me real-world experience that I use every day at work. Highly recommended!", rating: 5, initial: "D" },
  { name: "Maria García", role: "Student", text: "As a beginner, I was worried about keeping up. But the course structure and community support made learning so enjoyable. Best investment in myself!", rating: 5, initial: "M" }
];

// ============================
// AUTH MODULE
// ============================
const Auth = {
  getUsers() {
    return JSON.parse(localStorage.getItem("ocp_users") || "[]");
  },
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("ocp_current_user") || "null");
  },
  signup(name, email, password) {
    const users = this.getUsers();
    if (users.find(u => u.email === email)) return { success: false, message: "Email already registered." };
    const user = { id: Date.now(), name, email, password, enrolledCourses: [], joined: new Date().toISOString() };
    users.push(user);
    localStorage.setItem("ocp_users", JSON.stringify(users));
    localStorage.setItem("ocp_current_user", JSON.stringify(user));
    return { success: true, user };
  },
  login(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { success: false, message: "Invalid email or password." };
    localStorage.setItem("ocp_current_user", JSON.stringify(user));
    return { success: true, user };
  },
  logout() {
    localStorage.removeItem("ocp_current_user");
    window.location.href = "index.html";
  },
  updateUser(updatedUser) {
    const users = this.getUsers().map(u => u.id === updatedUser.id ? updatedUser : u);
    localStorage.setItem("ocp_users", JSON.stringify(users));
    localStorage.setItem("ocp_current_user", JSON.stringify(updatedUser));
  },
  enrollCourse(courseId) {
    const user = this.getCurrentUser();
    if (!user) return { success: false, message: "Please login to enroll." };
    if (user.enrolledCourses.find(e => e.courseId === courseId)) return { success: false, message: "Already enrolled in this course." };
    user.enrolledCourses.push({ courseId, progress: 0, enrolledAt: new Date().toISOString() });
    this.updateUser(user);
    return { success: true };
  },
  isEnrolled(courseId) {
    const user = this.getCurrentUser();
    return user ? user.enrolledCourses.some(e => e.courseId === courseId) : false;
  }
};

// ============================
// UI MODULE
// ============================
const UI = {
  // Toast notifications
  showToast(message, type = "info") {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    const icons = { success: "✅", error: "❌", info: "ℹ️" };
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${icons[type] || ""}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  },

  // Render course card
  renderCourseCard(course) {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const catColor = CATEGORY_COLORS[course.category] || {};
    const bgColor = isDark ? (catColor.dark_bg || catColor.bg) : catColor.bg;
    const textColor = isDark ? (catColor.dark_color || catColor.color) : catColor.color;

    return `
      <div class="card course-card" onclick="window.location.href='course-details.html?id=${course.id}'" data-category="${course.category}">
        <div class="card-img-placeholder" style="background: ${bgColor}">
          ${course.emoji}
        </div>
        <div class="card-body">
          <span class="card-category" style="background:${bgColor};color:${textColor}">${course.category}</span>
          <h3 class="card-title">${course.title}</h3>
          <p class="card-instructor">by ${course.instructor}</p>
          <div class="card-meta">
            <span class="card-rating">⭐ ${course.rating} <span style="color:var(--text-muted);font-weight:400">(${course.students.toLocaleString()})</span></span>
            <span class="card-price">₹${course.price.toLocaleString()}</span>
          </div>
        </div>
      </div>
    `;
  },

  // Update nav for auth state
  updateNavAuth() {
    const authBtns = document.getElementById("nav-auth-btns");
    if (!authBtns) return;
    const user = Auth.getCurrentUser();
    if (user) {
      authBtns.innerHTML = `
        <a href="dashboard.html" class="btn btn-ghost">Dashboard</a>
        <button onclick="Auth.logout()" class="btn btn-secondary btn-sm">Logout</button>
      `;
    } else {
      authBtns.innerHTML = `
        <a href="login.html" class="btn btn-ghost">Login</a>
        <a href="signup.html" class="btn btn-primary btn-sm">Sign Up</a>
      `;
    }
  },

  // Set active nav link
  setActiveNav() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach(link => {
      const href = link.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) {
        link.classList.add("active");
      }
    });
  },

  // Form validation
  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  validateField(input, condition, errorMsg) {
    const errorEl = input.nextElementSibling;
    if (!condition) {
      input.classList.add("error");
      if (errorEl && errorEl.classList.contains("form-error")) {
        errorEl.textContent = errorMsg;
        errorEl.style.display = "block";
      }
      return false;
    }
    input.classList.remove("error");
    if (errorEl && errorEl.classList.contains("form-error")) errorEl.style.display = "none";
    return true;
  }
};

// ============================
// THEME MODULE
// ============================
const Theme = {
  init() {
    const saved = localStorage.getItem("ocp_theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
    this.updateIcon(saved);
  },
  toggle() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("ocp_theme", next);
    this.updateIcon(next);
  },
  updateIcon(theme) {
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
  }
};

// ============================
// INIT
// ============================

// --- Animations (Scroll Reveal) ---
const Reveal = {
  init() {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: stop observing once revealed
          // obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Trigger when 15% visible
    });

    reveals.forEach(el => observer.observe(el));
  }
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  Theme.init();
  UI.updateNavAuth();
  UI.setActiveNav();
  Reveal.init();

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => navLinks.classList.toggle("show"));
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".navbar")) navLinks.classList.remove("show");
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
