import './Home.css'
import { useEffect } from 'react';

function Home(){

    useEffect(() => {
  const move = (e) => {
    document.documentElement.style.setProperty("--x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--y", `${e.clientY}px`);
  };

  window.addEventListener("mousemove", move);

  return () => window.removeEventListener("mousemove", move);
}, []);
    return(
        <>

    <div className="spotlight"></div>

        
        <div className='d-flex align-items-start'>
            <div>
<div className='ms-5 mt-5 '> 
    <h1 className='text-white ms-5 fs-1 fw-bold'>GIRINATH P</h1>
            <p className='text-white ms-5 fw-bold'>Full Stack Developer</p>
            <p className='text-white ms-5'>I create responsive, fast accessible web applications <br/> using modern technologies and best <br/> development practices.</p>
            <div className="nav-menu ms-5">
    <a href="#About"> About</a>
    <a href="#Projects"> Projects</a>
    <a href="#Skills"> Skills</a>
</div>
        </div>
            </div>
            <div className='mt-5 ms-auto me-5'>
                <h4 className='text-white mb-5' style={{fontFamily : 'fantasy'}} id='About'>ABOUT</h4>
                <p className='light-blue mb-5'>
    I am a <span className='text-white'>Full Stack Developer</span> with hands-on training in <span className='text-white'>Java Full Stack Development<br/> with Generative AI</span> from <span className='text-white'>NIIT</span>. I have a strong foundation in frontend, backend,<br/> databases, and AI integration, with experience building  complete web applications<br/> that solve real-world problems.
</p>

<p className='light-blue mb-5'>
    My technical expertise includes <span className='text-white'>Java, Spring Boot, React.js, TypeScript, JavaScript,<br/> HTML5, CSS3, Bootstrap, MySQL</span>, and <span className='text-white'>MongoDB</span>. I also have experience with<br/> <span className='text-white'>REST APIs, JWT Authentication, Spring Security, Swagger, Postman, Git, GitHub,</span> <br/>and AI technologies such as <span className='text-white'>Groq API, Llama 3</span>, and <span className='text-white'>Prompt Engineering</span>.
</p>

<p className='light-blue mb-5'>
    I have developed end-to-end projects including <span className='text-white'>ResumeGenie</span>, an AI-powered<br/> resume optimization platform, <span className='text-white'>TaskTrackr</span>, a smart task management dashboard,<br/> and a <span className='text-white'>City Complaint Management System</span>. These projects strengthened <br/> my skills in full-stack development, microservices, authentication, database <br/>management, and API development.
</p>

<p className='light-blue mb-5'>
    I am seeking an opportunity as a <span className='text-white'>Full Stack Developer</span> where I can contribute<br/> my technical skills, collaborate with experienced professionals, and continue<br/> growing as a software engineer. I am passionate about writing <span className='text-white'>clean, <br/>maintainable code</span> and building impactful applications that deliver value to <br/>users and organizations.
</p>



<h4 className='text-white' style={{fontFamily:'fantasy'}} id='Projects'>Projects</h4>
 <div className="project-card mt-5">

    <img  src="./src/assets/Resume.png" alt="ResumeGenie"className="project-image"/>

    <div className="project-content">
        <p className="project-title fw-bold">ResumeGenie – AI Resume Assistant</p>

        <p className="project-description">
            AI-powered resume optimization platform that analyzes resumes,
            suggests improvements, generates ATS-friendly content, and helps
            job seekers create professional resumes using Generative AI.
            Built with React, Spring Boot, MySQL, JWT Authentication,
            and Groq API integration.
        </p>
    </div>
</div>


 <div className="project-card mt-5">
    <img
        src="./src/assets/TaskTracker.jpg"
        alt="ResumeGenie"
        className="project-image"
    />

    <div className="project-content">
        <p className="project-title fw-bold">
            TaskTrackr – Smart To-Do Dashboard            
            </p>

        <p className="project-description">
            TaskTrackr – Smart To-Do Dashboard is a task management web application developed using React.js to help users create, organize, update, and manage daily tasks efficiently. The application enables users to perform complete CRUD operations while tracking task progress through a clean and intuitive dashboard.
        </p>
    </div>
</div>


 <div className="project-card mt-5">
    <img
        src="./src/assets/Cookify.png"
        alt="ResumeGenie"
        className="project-image"
    />

    <div className="project-content">
        <p className="project-title fw-bold">
Cookify – Recipe Sharing Website            
            </p>

        <p className="project-description">
            Cookify – Recipe Sharing Website is a responsive web application that enables users to discover, share, and explore a variety of recipes through an intuitive and user-friendly interface. Users can view detailed cooking instructions, ingredients, and preparation steps, making it easy to prepare meals at home.
        </p>
    </div>
</div>
<div className="project-card mt-5">
    <img
        src="./src/assets/moviemate.jpeg"
        alt="ResumeGenie"
        className="project-image"
    />

    <div className="project-content">
        <p className="project-title fw-bold">
MovieMate – Movie Database Management System            
            </p>

        <p className="project-description">
            MovieMate – Movie Database Management System is a relational database project developed using MySQL to efficiently manage and organize movie-related information. The database stores details using well-structured relational tables with primary and foreign key constraints to maintain data integrity
        </p>
    </div>
</div>

<div className="project-card mt-5">
    <img
        src="./src/assets/Local Service.jpeg"
        alt="ResumeGenie"
        className="project-image"
    />

    <div className="project-content">
        <p className="project-title fw-bold">
Local Service Search System            
            </p>

        <p className="project-description">
            Local Service Search System – Java Console Application is a console-based application developed using Java and Data Structures to help users search and manage local service providers efficiently. The application stores and organizes information about various services
        </p>
    </div>
</div>

<div className="project-card mt-5">
    <img
        src="./src/assets/skillmatch.jpeg"
        alt="ResumeGenie"
        className="project-image"
    />

    <div className="project-content">
        <p className="project-title fw-bold">
       SkillMatch            
            </p>

        <p className="project-description">
            SkillMatch – Freelancer & Client Matching System is a console-based application developed using Java that connects freelancers with clients based on required skills and project needs. The application allows clients to post projects, freelancers to create profiles highlighting their skills and expertise, and enables efficient matching between both parties.
        </p>
    </div>
</div>

<div className="project-card mt-5">
    <img
        src="./src/assets/Citycomplain.png"
        alt="ResumeGenie"
        className="project-image"
    />

    <div className="project-content">
        <p className="project-title fw-bold">
City Complaint Management System            
            </p>

        <p className="project-description">
            City Complaint Management System – Backend is a backend application developed using Spring Boot to streamline the process of reporting, tracking, and managing civic issues such as road damage, garbage collection, water leakage, and streetlight failures.
        </p>
    </div>
</div>

{/* ================= Skills ================= */}

<h4 className="text-white mt-5" style={{ fontFamily: "fantasy" }} id='Skills'>
    Skills
</h4>

<div className="skills-container mt-4">

    <div className="skill-category">
        <h6 className="text-info">Frontend Development</h6>
        <div className="skill-tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React.js</span>
        </div>
    </div>

    <div className="skill-category mt-4">
        <h6 className="text-info">Backend Development</h6>
        <div className="skill-tags">
            <span>Java</span>
            <span>Spring Boot</span>
        </div>
    </div>

    <div className="skill-category mt-4">
        <h6 className="text-info">Databases</h6>
        <div className="skill-tags">
            <span>MySQL</span>
            <span>MongoDB</span>
        </div>
    </div>

    <div className="skill-category mt-4">
        <h6 className="text-info">AI & LLMs</h6>
        <div className="skill-tags">
            <span>Prompt Engineering</span>
            <span>Groq API</span>
            <span>Llama 3</span>
            <span>AI Integration</span>
        </div>
    </div>

    <div className="skill-category mt-4">
        <h6 className="text-info">Tools & Platforms</h6>
        <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>GitLab</span>
            <span>Postman</span>
            <span>Swagger</span>
        </div>
    </div>

    <div className="skill-category mt-4">
        <h6 className="text-info">Other Technologies</h6>
        <div className="skill-tags">
            <span>Debugging</span>
            <span>API Management</span>
            <span>REST APIs</span>
            <span>Role-Based Access Control</span>
            <span>JWT Authentication</span>
        </div>
    </div>

    <div className="skill-category mt-4">
        <h6 className="text-info">Soft Skills</h6>
        <div className="skill-tags">
            <span>Communication</span>
            <span>Teamwork</span>
            <span>Analytical Thinking</span>
        </div>
    </div>

</div>
            </div>


        

        </div>
        </>
    )
}


export default Home;