import { Link } from 'react-router-dom';
import MathCanvas from '../components/MathCanvas';
import { useStaggerReveal, useScrollReveal } from '../hooks/useScrollAnimation';
import './Training.css';

const Training = () => {
  const courses = [
    { icon: '🌐', title: 'Web Development', level: 'Beginner → Advanced', duration: '12 Weeks', desc: 'HTML, CSS, JavaScript, React, Node.js, databases, REST APIs and deployment.' },
    { icon: '📱', title: 'App Development', level: 'Intermediate', duration: '10 Weeks', desc: 'React Native and Flutter for cross-platform mobile application development.' },
    { icon: '🎨', title: 'UI/UX Design', level: 'Beginner → Intermediate', duration: '8 Weeks', desc: 'Figma, design systems, prototyping, user research and usability testing.' },
    { icon: '☁️', title: 'Cloud Basics', level: 'Beginner', duration: '6 Weeks', desc: 'AWS, Azure, GCP fundamentals, deployments, serverless and containers.' },
    { icon: '🔒', title: 'Cybersecurity', level: 'Beginner → Intermediate', duration: '8 Weeks', desc: 'Network security, ethical hacking basics, OWASP, security audits.' },
    { icon: '📊', title: 'Data Analytics', level: 'Beginner', duration: '8 Weeks', desc: 'Python, Pandas, SQL, dashboards, visualization and business intelligence.' },
    { icon: '🤖', title: 'AI Tools for Business', level: 'All Levels', duration: '6 Weeks', desc: 'ChatGPT workflows, AI automation, prompt engineering and business applications.' },
    { icon: '⚡', title: 'No-Code / Low-Code', level: 'Beginner', duration: '4 Weeks', desc: 'Build apps with Bubble, Webflow, Zapier and Airtable without writing code.' },
    { icon: '📋', title: 'Product Management', level: 'Intermediate', duration: '6 Weeks', desc: 'Roadmaps, user stories, agile, MVP strategy and product-market fit.' },
  ];

  const [courseRef, courseVisible] = useStaggerReveal(courses.length, 100);
  const [internRef, internVisible] = useScrollReveal();

  return (
    <div className="page-enter">
      <section className="training-hero" id="training-hero">
        <MathCanvas variant="fourier" opacity={0.1} />
        <div className="container training-hero-content">
          <span className="badge">Training Academy</span>
          <h1>Learn. Build.<br /><span className="hero-accent">Grow.</span></h1>
          <p>Industry-focused technical training for students, teams, and companies. From beginner to advanced.</p>
        </div>
      </section>

      <section className="courses-section section" id="courses">
        <div className="container">
          <div className="section-header">
            <span className="badge">Programs</span>
            <h2>Training Programs</h2>
            <p>Practical, project-based courses designed to get you job-ready or upskill your team.</p>
          </div>
          <div className="courses-grid grid grid-3">
            {courses.map((c, i) => (
              <div
                key={i}
                ref={courseRef(i)}
                className={`course-card ${courseVisible.has(i) ? 'visible' : ''}`}
              >
                <div className="course-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p className="course-desc">{c.desc}</p>
                <div className="course-meta">
                  <span className="meta-item">
                    <span className="meta-icon">📚</span> {c.level}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">⏱️</span> {c.duration}
                  </span>
                </div>
                <Link to="/contact" className="btn btn-outline-orange course-btn">Enroll Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="intern-section section" id="internship" ref={internRef}>
        <div className="container">
          <div className={`intern-inner ${internVisible ? 'visible' : ''}`}>
            <div className="intern-info">
              <span className="badge">Talent Pipeline</span>
              <h2>Tech Internship Program</h2>
              <p>
                Our training-to-hiring pipeline creates a win-win: students gain hands-on experience
                working on real client projects, while businesses get access to trained junior talent.
              </p>
              <div className="intern-steps">
                <div className="intern-step">
                  <span className="intern-num">1</span>
                  <div>
                    <h4>Learn</h4>
                    <p>Students complete our training programs</p>
                  </div>
                </div>
                <div className="intern-step">
                  <span className="intern-num">2</span>
                  <div>
                    <h4>Build</h4>
                    <p>Top performers work on real client projects</p>
                  </div>
                </div>
                <div className="intern-step">
                  <span className="intern-num">3</span>
                  <div>
                    <h4>Hire</h4>
                    <p>Businesses get skilled, project-ready talent</p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary btn-lg">Apply for Internship</Link>
            </div>
            <div className="intern-visual">
              <div className="intern-visual-bg"></div>
              <div className="intern-stats">
                <div className="intern-stat">
                  <span className="is-number">300+</span>
                  <span className="is-label">Students Trained</span>
                </div>
                <div className="intern-stat">
                  <span className="is-number">85%</span>
                  <span className="is-label">Placement Rate</span>
                </div>
                <div className="intern-stat">
                  <span className="is-number">50+</span>
                  <span className="is-label">Hiring Partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="training-pricing section" id="training-pricing">
        <div className="container text-center">
          <div className="section-header">
            <span className="badge">Pricing</span>
            <h2>Training Packages</h2>
          </div>
          <div className="grid grid-3 training-plans">
            {[
              { name: 'Individual', price: '$299', period: '/course', features: ['Self-paced learning', 'Project assignments', 'Certificate of completion', 'Community access', 'Email support'] },
              { name: 'Team', price: '$199', period: '/person/course', popular: true, features: ['Everything in Individual', 'Group sessions', 'Custom schedule', 'Team progress dashboard', 'Priority support', 'Bulk discount'] },
              { name: 'Enterprise', price: 'Custom', period: '', features: ['Everything in Team', 'On-site training', 'Custom curriculum', 'Dedicated trainer', 'Hiring pipeline access', 'SLA support'] },
            ].map((plan, i) => (
              <div key={i} className={`training-plan-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <span className="popular-badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((f, j) => (
                    <li key={j}><span className="check-icon">✓</span> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline-orange'} plan-btn`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
