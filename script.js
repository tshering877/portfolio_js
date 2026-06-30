const app = document.getElementById("app");

const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Certificates", link: "#certificates" },
  { name: "Contact", link: "#contact" }
];

const projects = [
  {
    number: "01",
    title: "GameFit AI",
    description:
      "Real-time motion-controlled gaming platform using Python, MediaPipe, OpenCV, and PyAutoGUI. I worked on backend components, gesture-to-input mapping, and low-latency processing.",
    images: ["assets/images/1.png", "assets/images/gamefit.png"],
    tags: ["Python", "OpenCV", "MediaPipe", "AI"],
    github: "https://github.com/tshering877/Hackathon_gamefitai2026.git",
    reverse: false
  },
  {
    number: "02",
    title: "Hospitality ERP Hackathon 2025",
    description:
      "Built a Business Intelligence dashboard for customer segmentation and analytics. The project achieved third place in the Hospitality ERP Hackathon 2025.",
    images: ["assets/images/erp.png"],
    imageClass: "erp-photo",
    tags: ["Power BI", "Dashboard", "Analytics", "CRM"],
    github: "https://github.com/tshering877/Hackathon.git",
    reverse: true
  },
  {
    number: "03",
    title: "BhutanDevelopersConnect",
    description:
      "A developer networking platform designed to connect developers in Bhutan, support team formation, project showcasing, progress sharing, and peer-to-peer support.",
    images: ["assets/images/bhutan.jpg"],
    imageClass: "bhutan-photo",
    tags: ["Frontend", "Community", "Web App"],
    github: "https://github.com/tshering877/developersconnect.git",
    reverse: false
  }
];

const skills = [
  {
    title: "Programming",
    text: "Python, Java, PHP, JavaScript, TypeScript, Dart"
  },
  {
    title: "Web",
    text: "HTML, CSS"
  },
  {
    title: "Database",
    text: "SQL, MySQL"
  },
  {
    title: "Tools",
    text: "Docker, Apache, Jupyter Notebook, Google Colab, AI Studio"
  },
  {
    title: "Data Visualization",
    text: "Power BI, Tableau, Python (Matplotlib, Seaborn)"
  },
  {
    title: "Design & Office",
    text: "Figma, Canva, Excel, Word, PowerPoint, Teams, Forms, OneDrive"
  }
];

const experiences = [
  {
    year: "2023 - Present",
    title: "B.Sc. Information and Communication Technology",
    text: "Rangsit University International College, Pathum Thani, Thailand"
  },
  {
    year: "Jan 2026 - Present",
    title: "Frontend Developer — KodaDev",
    text: "Developing responsive web applications with focus on usability, performance, and collaboration."
  },
  {
    year: "2019 - 2020",
    title: "Assistant Leader — IT Club",
    text: "Organized tech events, supported students in coding, and assisted with team coordination."
  }
];

const certificates = [
  {
    title: "Odoo Certification",
    text: "Certification achievement related to Odoo.",
    image: "assets/images/odoo.png"
  },
  {
    title: "Digital Literacy",
    text: "Certification in digital literacy skills.",
    image: "assets/images/digital-literacy.png"
  },
  {
    title: "3rd Place Hackathon",
    text: "Hospitality ERP Hackathon 2025 achievement.",
    image: "assets/images/hackathon.jpg"
  }
];

function createHeader() {
  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
    <nav class="navbar">
      <a href="#home" class="logo">TSHERING</a>
      <ul class="nav-links" id="navLinks"></ul>
      <button class="menu-btn" id="menuBtn">☰</button>
    </nav>
  `;

  app.appendChild(header);

  const navLinks = document.getElementById("navLinks");

  navItems.forEach(item => {
    navLinks.innerHTML += `
      <li><a href="${item.link}">${item.name}</a></li>
    `;
  });
}

function createHero() {
  const section = document.createElement("section");
  section.id = "home";
  section.className = "hero section reveal";

  section.innerHTML = `
    <div class="hero-content">
      <p class="small-title">ICT Student</p>
      <h2>Tshering Thinley Yangden</h2>
      <p class="hero-description">
        Hello, I'm a fourth-year Information and Communication Technology
        student at Rangsit University International College with experience
        in frontend development, backend development, machine learning, and
        data analytics. I enjoy transforming ideas into interactive and
        simple applications while constantly learning more about software
        development and new technologies.
      </p>
      <div class="hero-buttons">
        <a href="#projects" class="btn btn-light">View Projects</a>
        <a href="files/tsheringCV.pdf" download class="btn btn-outline">Download CV</a>
      </div>
    </div>

    <div class="hero-image">
      <img src="assets/images/profile.JPG" alt="Tshering profile photo" />
    </div>
  `;

  app.appendChild(section);
}

function createAbout() {
  const section = document.createElement("section");
  section.id = "about";
  section.className = "section about reveal";

  section.innerHTML = `
    <div class="section-heading">
      <h2>ABOUT ME</h2>
    </div>

    <div class="about-layout">
      <div class="about-text">
        <p>
          I am passionate about developing easy-to-use, responsive web
          applications and finding new techniques to turn data into valuable
          insights. My goal is to grow as a developer who builds intuitive
          user experiences and as a data scientist applying data to solve
          real world problems with data-driven solutions.
        </p>

        <p>
          Through academic projects, hackathons, and development work, I’ve
          developed practical experience in frontend development, backend
          development, computer vision, business intelligence dashboards,
          database systems, and applying data science and machine learning
          techniques to analyze data and make informed decisions.
        </p>

        <div class="about-stats">
          <div>
            <h3>3.94</h3>
            <span>GPA / 4.00</span>
          </div>
          <div>
            <h3>3+</h3>
            <span>Major Projects</span>
          </div>
          <div>
            <h3>2026</h3>
            <span>Open to Internship</span>
          </div>
        </div>
      </div>
    </div>
  `;

  app.appendChild(section);
}

function createProjects() {
  const section = document.createElement("section");
  section.id = "projects";
  section.className = "section reveal";

  section.innerHTML = `
    <div class="section-heading">
      <p>PROJECTS</p>
      <h2>Selected projects.</h2>
    </div>
    <div class="projects-grid"></div>
  `;

  const grid = section.querySelector(".projects-grid");

  projects.forEach(project => {
    const card = document.createElement("article");
    card.className = project.reverse ? "project-card reverse" : "project-card";

    card.innerHTML = `
      <div class="project-images">
        ${project.images
          .map(
            image =>
              `<img src="${image}" class="${project.imageClass || ""}" alt="${project.title}" />`
          )
          .join("")}
      </div>

      <div class="project-info">
        <p class="project-number">${project.number}</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <div class="project-tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>

        <div class="project-links">
          <a href="${project.github}" target="_blank">GitHub</a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  app.appendChild(section);
}

function createSkills() {
  const section = document.createElement("section");
  section.id = "skills";
  section.className = "section";

  section.innerHTML = `
    <h2 class="section-title">Technical Skills</h2>
    <div class="skills-grid">
      ${skills
        .map(
          skill => `
            <div class="skill-card">
              <h3>${skill.title}</h3>
              <p>${skill.text}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  app.appendChild(section);
}

function createExperience() {
  const section = document.createElement("section");
  section.id = "experience";
  section.className = "section reveal";

  section.innerHTML = `
    <div class="section-heading">
      <p>EXPERIENCE</p>
      <h2>Education and leadership timeline.</h2>
    </div>

    <div class="timeline">
      ${experiences
        .map(
          item => `
            <div class="timeline-item">
              <span>${item.year}</span>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  app.appendChild(section);
}

function createCertificates() {
  const section = document.createElement("section");
  section.id = "certificates";
  section.className = "section reveal";

  section.innerHTML = `
    <div class="section-heading">
      <p>CERTIFICATIONS</p>
      <h2>Certificates and achievements.</h2>
    </div>

    <div class="certificate-grid">
      ${certificates
        .map(
          cert => `
            <div class="certificate-card">
              <a href="${cert.image}" target="_blank">
                <img src="${cert.image}" alt="${cert.title}" />
              </a>
              <h3>${cert.title}</h3>
              <p>${cert.text}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  app.appendChild(section);
}

function createContact() {
  const section = document.createElement("section");
  section.id = "contact";
  section.className = "section contact reveal";

  section.innerHTML = `
    <p class="small-title">CONTACT</p>
    <h2>Let’s build something together.</h2>
    <p>
      I am open to frontend development, data science, and ICT internship
      opportunities.
    </p>

    <div class="contact-buttons">
      <a href="mailto:tsheringty877@gmail.com" class="btn btn-light">Email Me</a>
      <a href="https://www.linkedin.com/in/ttyangden8/" target="_blank" class="btn btn-outline">LinkedIn</a>
      <a href="https://github.com/tshering877" target="_blank" class="btn btn-outline">GitHub</a>
    </div>
  `;

  app.appendChild(section);
}

function createFooter() {
  const footer = document.createElement("footer");

  footer.innerHTML = `
    <p>© 2026 Tshering Thinley Yangden. All rights reserved.</p>
    <a href="#home" class="back-to-top">↑ Back to Top</a>
  `;

  app.appendChild(footer);
}

function createCursorGlow() {
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.prepend(glow);

  document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

function setupMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

function openImagesInNewTab() {
  document
    .querySelectorAll(".project-images img, .certificate-card img, .hero-image img")
    .forEach(img => {
      img.style.cursor = "pointer";

      img.addEventListener("click", () => {
        window.open(img.src, "_blank");
      });
    });
}

function revealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight - 120) {
      element.classList.add("active");
    }
  });
}

function init() {
  createCursorGlow();
  createHeader();
  createHero();
  createAbout();
  createProjects();
  createSkills();
  createExperience();
  createCertificates();
  createContact();
  createFooter();

  setupMenu();
  openImagesInNewTab();

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);

  revealOnScroll();
}

init();