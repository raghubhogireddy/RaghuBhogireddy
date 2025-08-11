import React, { useState, useEffect } from "react";
import { personalInfo } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <nav className="navbar">
        <h1>{personalInfo.name}</h1>
        <div>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      <section className="hero" data-aos="fade-up">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <h2>{personalInfo.title}</h2>
        <p>{personalInfo.summary}</p>
        <a href="/resume.pdf" className="btn" download>Download Resume</a>
      </section>

      <section className="skills" data-aos="fade-up">
        <h3>Skills</h3>
        <ul>
          {Object.entries(personalInfo.skills).map(([key, values]) => (
            <li key={key}>
              <strong>{key}:</strong> {values.join(", ")}
            </li>
          ))}
        </ul>
      </section>

      <section className="experience" data-aos="fade-up">
        <h3>Experience</h3>
        {personalInfo.experience.map((job, idx) => (
          <div key={idx}>
            <h4>{job.title} @ {job.company}</h4>
            <span>{job.duration} | {job.location}</span>
            <ul>
              {job.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="education" data-aos="fade-up">
        <h3>Education</h3>
        <p>{personalInfo.education.degree}</p>
        <p>{personalInfo.education.university} ({personalInfo.education.graduationYear})</p>
      </section>

      <footer>
        <a href={personalInfo.linkedIn}>LinkedIn</a> | 
        <a href={personalInfo.github}>GitHub</a> |
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      </footer>
    </div>
  );
}
