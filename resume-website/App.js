import React, { useState, useEffect } from "react";
import "./style.css";
import myPhoto from './assets/photo.jpg';



const App = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "enabled";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Projects Data (Enhanced)
  const projects = [
    {
      name: "Bacteria detection using CNN Alogrithm in Machine Learning",
      description: "The project of bactera detection was done as a software where this is developed inorder to identify the bacteria that will be present on human in realtime and developed usin the Convolutional Neural Network in Machine Learning.",
      techStack: ["Python", "Streamlit", "OpenCV", "NumPy", "PIL"],
      github: "https://github.com/Divyasree-palanisamy/Bacteria-Detection",
    },
    {
      name: "InternSpace Explorer",
      description: "It is a website designed using HTML, CSS and JS. This website serves as a very efficient in searching for the internships based on the user requirements quickly by having more filter options and to produce all the details directly. It is very helpful in retrieving the Internships that user search for within a quick time.",
      techStack: ["HTML","CSS","JavaScript","Python","Flask","MySQL Workbench"],
      github: "https://github.com/Divyasree-palanisamy/Internship-Explorer",
    },
    
  ];

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      {/* Navigation Bar */}
      <header className="portfolio-title">
    <h1>My Portfolio</h1>
  </header>
      <nav className="navbar">
        <ul>
          <li><a href="#" onClick={() => setActiveSection("Home")}>Home</a></li>
          <li><a href="#" onClick={() => setActiveSection("Education")}>Education</a></li>
          <li><a href="#" onClick={() => setActiveSection("Skills")}>Skills</a></li>
          <li><a href="#" onClick={() => setActiveSection("Certifications")}>Certifications</a></li> 
          <li><a href="#" onClick={() => setActiveSection("CoCurricular")}>Co-Curricular</a></li>

          <li><a href="#" onClick={() => setActiveSection("Projects")}>Projects</a></li>
          <li><a href="#" onClick={() => setActiveSection("Contact")}>Contact</a></li>
        </ul>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Sections */}
      {activeSection === "Home" && (
  <section className="home fade-in">
    <h1 className="marquee-text">Welcome to My Portfolio</h1>
    
    <div className="home-content">
    <img src={myPhoto} alt="Divyasree P" className="profile-photo" />
    <h1>Divyasree P</h1>
      <p>Software Developer</p>
      <p className="intro-text">
        This website serves as a digital portfolio of my skills, experiences, and achievements. 
        Explore the sections above to learn more about me.
      </p>
      
      <p className="quote-text" style={{ color: '#d4af37' }}>
  <b>"The only way to do great work is to love what you do."</b>
</p>

    </div>
  </section>
)}


{activeSection === "Education" && (
  <section className="education fade-in">
    <h2>Education</h2>

    <div className="education-item">
      <h3><span className="highlight">Schooling 📚</span></h3>
      <p>Sri Jayendra Sarawathy Vidhyalaya Matriculation School Ondipudur</p>
      <p>• Secondary Education – Secured <b>78%</b></p>
<p>• Higher Secondary Education – Secured <b>85%</b></p>

    </div>

    <div className="education-item">
      <h3><span className="highlight">Bachelor's Degree 🎓</span></h3>
      <p>B.E in Computer Science and Engineering</p>
      <p>Kalaignarkarunanidhi Institute of Technology, Pallapalayam-Coimbatore</p>
      <p>• Currently pursuing <b>3rd year</b></p>
      <p>• Current CGPA: <b>8.94</b></p>
    </div>

  </section>
)}

{/* Skills Section */}
{/* Skills Section */}
{activeSection === "Skills" && (
  <section className="skills fade-in">
  <h2>Skills</h2>
  <div className="skills-container">
    
    {/* Left Column - Technical Skills */}
    <div className="skills-column">
      <h3>Technical Skills</h3>

      <div className="skill-item">
        <h4>Programming Languages</h4>
        <p>Python</p>
        <p>Java</p>
        <p>C</p>

      </div>

      <div className="skill-item">
        <h4>Web Development</h4>
        <p><b>Frontend:</b> HTML, CSS, JavaScript</p>
        <p><b>Backend:</b> Python</p>
        <p><b>Database:</b> MySQL</p>
      </div>

      <div className="skill-item">
        <h4>Machine Learning</h4>
        <p>Machine Learning</p>
      </div>
      
      <div className="skill-item">
        <h4>Data Structures and Algorithms</h4>
        <p>Basic concepts of DSA</p>
      </div>
      
    </div>

  {/* Right Column - Soft Skills */}
<div className="skills-column">
  <h3>Soft Skills</h3>

  <div className="skill-item">
    <h4>Problem-Solving</h4>
  </div>

  <div className="skill-item">
    <h4>Time Management</h4>
  </div>

  <div className="skill-item">
    <h4>Adaptability</h4>
  </div>

  <div className="skill-item">
    <h4>Team Collaboration</h4>
  </div>
</div>


  </div>
</section>
)}

{activeSection === "Certifications" && (
  <section className="certifications fade-in">
    <h2 className="section-title">Certifications</h2>

    {/* Internship */}
    <div className="certification-category">
      <h3>Internship</h3>
      <div className="certification-item">
        <h4>Web Development using Python</h4>
        <p><strong>Company:</strong> Livewire</p>
        <p><strong>Duration:</strong> 8th July 2024 – 24th July 2024</p>
        <p><strong>Skills Gained:</strong> HTML, CSS, JavaScript (Frontend), Python (Backend), MySQL</p>
        <p>Currently working on a personal project, <strong>"Internship Finder"</strong>.</p>
        <p>
          <strong>Internship Certificate:</strong>{" "}
          <a
            href="https://drive.google.com/file/d/1KgaIa0K2cwCaybVyClOHGJxdcUZYGfBw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </p>
      </div>
    </div>

    {/* In-Plant Training */}
    <div className="certification-category">
      <h3>In-Plant Training</h3>

      <div className="certification-item">
        <h4>Web Designing - Braineryspot Technology, Coimbatore</h4>
        <p><strong>Duration:</strong> 20th July 2023 – 26th July 2023</p>
        <p>
          <strong>Training Certificate:</strong>{" "}
          <a
            href="https://drive.google.com/file/d/1WcPFeFFoXqOri7g88VSk3IPQ9TuahrDw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </p>
      </div>

      <div className="certification-item">
        <h4>Machine Learning - CodeBind Technology, Coimbatore</h4>
        <p><strong>Duration:</strong> 7th February 2024 – 12th February 2024</p>
        <p>
          <strong>Training Certificate:</strong>{" "}
          <a
            href="https://drive.google.com/file/d/17rY__91w6AodT7o7ORqXXdJePkTXC3eI/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </p>
      </div>
    </div>

    {/* Infosys Springboard Certifications */}
    <div className="certification-category">
      <h3>Infosys Springboard Certifications</h3>
      <p>
        <b>Python Foundation</b> (Completed on October 1, 2023): <a
          href="https://drive.google.com/file/d/1986511CRLJ8xIzcqxg00KeLiL9JqKoQB/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </p>
      <b>Java Foundation</b> (Completed on April 19, 2025): <a
          href="https://drive.google.com/file/d/1WvbgOS2oNHP6FP95arpFKHuai4M_fSh5/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
    </div>

    {/* Coursera Certifications */}
    <div className="certification-category">
      <h3>Coursera Certifications</h3>
      <p>
       <b>Advanced Relational Database & SQL </b>(Completed on July 26, 2024): <a
          href="https://drive.google.com/file/d/162ghxWnm9otQJMKsUcYTQLD3i6cLsyjw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </p>
      <p>
        <b>Intermediate Relational Database & SQL </b>(Completed on November 25, 2024): <a
          href="https://drive.google.com/file/d/17qqTScVW7V-YfzPrH03YU3fzWANqE7aW/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </p>
      <p>
       <b>Introduction to Microsoft Excel</b> (Completed in May 2024): <a
          href="https://drive.google.com/file/d/17ia-PyoI7pdoFhFNJv8Rmpp-2vpKbn2v/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </p>
    </div>

    {/* NPTEL Certifications */}
    <div className="certification-category">
      <h3>NPTEL Certifications</h3>
      <p>
        <b>Problem Solving Through Programming in C </b>(Elite, 69%) - July to October 2023: <a
          href="https://drive.google.com/file/d/1Eucl4abgrf-2KFjmU-6PqxZo-4YHJagy/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </p>
      <p>
        <b>Programming, Data Structures, and Algorithms using Python (57%)</b> - July to September 2024: <a
          href="https://drive.google.com/file/d/17_J6hQdndXySO_1TnRQGCG-p6MoNaM2K/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </p>
      <p>
        <b>Programming in Java (Elite, 61%)</b> - July to October 2024: <a
          href="https://drive.google.com/file/d/17fMl4W_uRyN7JoUew4zWot_YnzOHMTke/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </p>

        <p>
        <b>Design Thinking (75%)</b> - January to February 2025: <a
          href="https://drive.google.com/file/d/1WxzmC7Rh3TQKjBDXFUIZXMDwRR7ZzwC8/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </p>

    </div>

    {/* Workshops */}
    <div className="certification-category">
      <h3>Workshops</h3>
      <p>
        <strong>One-Day National Level Hands-on Workshop on "Transforming Tomorrow with AI"</strong>
        <p><b>Venue : </b>Kalaignarkarunanidhi Institute of Technology, September 21, 2024:</p> <a
          href="https://drive.google.com/file/d/17jABAErPQvuldMj629my4Nu70l3uWM0m/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </p>
         <p>
        <strong>10-Days Data Structures and Algorithms Workshop</strong>
        <p><b>Venue : </b>Kalaignarkarunanidhi Institute of Technology,February 13, 2025 to February 22, 2025:</p> <a
          href="https://drive.google.com/file/d/1X63fiE-hvNokJqxYxuoBSbp92GBrHRsj/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </p>
    </div>
  </section>
)}
    {activeSection === "CoCurricular" && (
  <section className="co-curricular fade-in">
    <h2>Co-Curricular Activities</h2>
    <div className="activities-container">
      
      <div className="activity-card">
        <h3>Hackathon for Women in Engineering Participant</h3><p>
        <p>Participated in Hackathon for Women in Engineering conducted by <b>Tamil Nadu Centre of Excellence for Advanced Manufacturing(TANCAM)</b>, presented my "leaf disease prediction project."</p>
        <p><b>Date:</b> March 8, 2024</p>
        <a
          href="https://drive.google.com/file/d/1XF7iurQnygy78SKueIQlb2ykghed2xLx/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
        </p>
      </div>

         <div className="activity-card"><p>
        <h3>Hackathon for Women in Engineering Participant</h3>
        <p>Reached finals in Hackathon for Women in Engineering conducted by <b>Tamil Nadu Centre of Excellence for Advanced Manufacturing(TANCAM)</b>, presented my "bacteria detection project."</p>
        <p><b>Date:</b> March 8, 2025</p>
        <a
          href="https://drive.google.com/file/d/1XJFS6EcbW5iZTW2e4DpUDRmZ6gMUmSnv/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
        </p>
      </div>


      <div className="activity-card">
        <h3>Paper Presentation</h3>
        <p>
        <p>Participated in the paper presentation event of the title "Emotional AI in crime prediction using unsupervised learning" during the Henosis 2k24 held at<b> NGP iTECH</b>
        </p>
        <p><b>Date:</b> March 4, 2024</p>
        <a
          href="https://drive.google.com/file/d/1XOsXIae4qnPgyVcWuOqtFZfJbSliTlNZ/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
        </p>
      </div>

   <div className="activity-card">
        <h3>CLISTE' 2023 Participant</h3>
        <p>
        <p>Participated in Project Expo with Bacteria Detection Project<b> organized by Department of Computer Science and Engineering at KIT College.</b></p>
        <p><b>Date:</b> September 21, 2023</p>
         <a
          href="https://drive.google.com/file/d/1XPzO6fNltQz8Hi-W46xIyxdfG4NT1s5V/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
        </p>
      </div>

      <div className="activity-card">
        <h3>24 Hours Hackathon Attendee</h3>
        <p>Attended 24 hours hackathon conducted by Kalaignarkarunanidhi Institute of Technology, Coimbatore</p>
        <p><b>Date:</b> October 7,2023 9:30am to October 8,2023 9:30am</p>
        <p><b>Date:</b> April 17,2024 1pm to April 18,2024 1pm</p>


      </div>

    </div>
  </section>
)}

      
      {/* Projects Section (Enhanced with Embedded Videos) */}
{activeSection === "Projects" && (
  <section className="projects fade-in">
    <h2>Projects</h2>
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p><b>Tech Stack:</b> {project.techStack.join(", ")}</p>
      
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              💻 GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
)}


{/* Contact Section */}

{activeSection === "Contact" && (
  <section className="contact fade-in">
    <div className="contact-container">
      
      <div className="contact-card">
        <h3>Contact Information</h3>
        <p><b>Name :</b> Divyasree.P</p>
        <p><b>Place : </b>Site no: 15, Sravana Nagar, Nadupalayam Pirivu, 
        Coimbatore - 641016, Tamil Nadu, India</p>
        <p><b>Contact Number : </b> 7010669571</p>
      </div>
      
      <div className="contact-card">
        <h3>Social Media Links</h3>
        <p><b>Email ✉ : </b> divyasreep12@gmail.com</p>
        <p><b>LinkedIn 🌐: </b> 
          <a href="https://www.linkedin.com/in/divya-sree-p-9603b9265" target="_blank" rel="noopener noreferrer">
           LinkedIn Profile
          </a>
        </p>
        <p><b>GitHub 👨🏻‍💻: </b> 
          <a href="https://github.com/Divyasree-palanisamy" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
        <p><b>CodeChef 🍽️: </b>  
            <a href="https://www.codechef.com/users/divyasreep12" target="_blank" rel="noopener noreferrer">
        Codechef Profile
          </a>
        </p>
        <p><b>LeetCode 🏆: </b> 
  <a href="https://leetcode.com/u/divyasreep12/" target="_blank" rel="noopener noreferrer">LeetCode Profile</a>
</p>

      </div>
      <div className="contact-card">
  <h3>Personal Information</h3>
  
  {/* Small Box Inside the Main Card */}
  <div className="info-box">
  <p><b>Languages Known:</b></p>
  <ul>
    <li><b>English :</b> Fluent (Read, Write, Speak)</li>
    <li><b>Tamil :</b> Native (Read, Write, Speak)</li>
  </ul>

    <p><b>Resume:</b> 
      <a href="https://drive.google.com/file/d/1-bSvJ0KY_tLADdzxMo_8-mXjLtAoladm/view?usp=drivesdk" 
         target="_blank" 
         rel="noopener noreferrer"> Download Resume</a>
    </p>
  </div>
</div>

    
    </div>
  </section>
)}



      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Divyasree. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
