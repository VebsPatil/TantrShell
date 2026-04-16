import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { SectionHeader } from '../components/SectionHeader';
import TrainingScene from '../components/TrainingScene';

const trackData = {
  webdev: { title: 'Web Development', desc: 'Master modern web technologies from HTML/CSS to React, Node.js, databases, and deployment. Build real-world projects with mentorship from industry experts.', features: ['12-Week Program','Real Client Projects','Job Placement Support','Expert Mentorship'] },
  appdev: { title: 'App Development', desc: 'Build native and cross-platform mobile applications using React Native, Flutter, and native SDKs. Design, develop, and deploy professional mobile experiences.', features: ['10-Week Program','App Store Publishing','UI/UX Integration','Live Projects'] },
  uiux: { title: 'UI/UX Design', desc: 'Learn Figma, prototyping, user research, and design systems. Create beautiful, functional interfaces that users love.', features: ['8-Week Program','Portfolio Building','Design Systems','User Testing'] },
  ai: { title: 'AI Tools for Business', desc: 'Harness the power of AI for business automation, content generation, data analysis, and customer engagement.', features: ['6-Week Program','Hands-On Projects','Business Integration','ChatBot Building'] },
  cloud: { title: 'Cloud & DevOps', desc: 'Deploy and manage applications on AWS, GCP, and Azure. Learn CI/CD, containers, and infrastructure as code.', features: ['10-Week Program','Cloud Certifications','Real Infrastructure','Security Best Practices'] },
  nocode: { title: 'No-Code / Low-Code', desc: 'Build powerful applications without traditional coding. Master platforms like Bubble, Webflow, and Zapier.', features: ['4-Week Program','Rapid Prototyping','Business Automation','MVP Building'] },
};

const trackKeys = Object.keys(trackData);

export default function TrainingPage() {
  const [active, setActive] = useState('webdev');
  const infoRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const switchTrack = (key) => {
    if (key === active) return;
    const el = infoRef.current;
    gsap.to(el, {
      opacity: 0, x: -20, duration: 0.2,
      onComplete: () => {
        setActive(key);
        gsap.to(el, { opacity: 1, x: 0, duration: 0.3 });
      }
    });
  };

  const data = trackData[active];

  return (
    <section id="training" className="section section-training" style={{ paddingTop: '8rem' }}>
      <SectionHeader tag="03 // LEARN & GROW" title="TRAINING" accentWord="ACADEMY" desc="Practical, industry-focused training for students, teams, and growing companies." />
      <div className="training-content visible">
        <div className="training-tracks">
          {trackKeys.map((key, i) => (
            <div key={key} className={`training-track${active === key ? ' active' : ''}`} onClick={() => switchTrack(key)}>
              <span className="track-number mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="track-title">{trackData[key].title}</span>
              <span className="track-arrow">→</span>
            </div>
          ))}
        </div>
        <div className="training-detail">
          <div className="training-info" ref={infoRef}>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
            <div className="training-features">
              {data.features.map(f => (
                <div key={f} className="feature mono"><span className="accent">→</span> {f}</div>
              ))}
            </div>
            <Link to="/contact" className="btn btn-primary">ENROLL NOW →</Link>
          </div>
          <TrainingScene />
        </div>
      </div>
    </section>
  );
}
