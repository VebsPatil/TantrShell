import React, { useEffect, useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

const categories = ['All', 'Engineering', 'AI & ML', 'Business', 'Design', 'Culture'];

const blogPosts = [
  {
    id: 1,
    category: 'Engineering',
    title: 'Building Scalable Multi-Tenant SaaS Architecture from Scratch',
    excerpt: 'A deep dive into how we architect our white-label products to support hundreds of tenants with isolated data, shared infrastructure, and zero-downtime deployments.',
    author: 'Vebson Patil',
    role: 'CTO & Co-Founder',
    date: 'Apr 20, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    category: 'AI & ML',
    title: 'How We Integrated GPT-Powered Chatbots Into Hospital Feedback Systems',
    excerpt: 'Real-world lessons from deploying conversational AI that handles patient feedback, routes complaints, and generates actionable insights for hospital administrators.',
    author: 'Tanmay S.',
    role: 'AI Engineer',
    date: 'Apr 14, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    category: 'Business',
    title: 'Why Small Businesses Should Invest in Custom Software Over Off-the-Shelf',
    excerpt: 'The hidden costs of generic solutions and how purpose-built software pays for itself in efficiency gains, competitive advantage, and customer experience.',
    author: 'Vebson Patil',
    role: 'CTO & Co-Founder',
    date: 'Apr 8, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 4,
    category: 'Design',
    title: 'The Dark Mode Aesthetic: Designing Premium Tech Interfaces',
    excerpt: 'Our design philosophy behind TantrShell\'s industrial-futurist visual language — from grain textures to monospace typography and purposeful orange accents.',
    author: 'Priya K.',
    role: 'Lead Designer',
    date: 'Mar 30, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 5,
    category: 'Culture',
    title: 'From Training Program to Tech Company: The TantrShell Origin Story',
    excerpt: 'How a small training initiative in Pune evolved into a full-service tech startup — the challenges, pivots, and relentless drive that shaped who we are today.',
    author: 'Vebson Patil',
    role: 'CTO & Co-Founder',
    date: 'Mar 22, 2026',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: 6,
    category: 'Engineering',
    title: 'Automating Business Workflows: A Practical Guide with Real Examples',
    excerpt: 'Step-by-step walkthrough of how we automated invoice generation, lead follow-ups, and inventory alerts for three different businesses using n8n and custom APIs.',
    author: 'Rahul M.',
    role: 'Full-Stack Developer',
    date: 'Mar 15, 2026',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 7,
    category: 'AI & ML',
    title: 'Document Intelligence: Extracting Insights from Unstructured Data',
    excerpt: 'Building AI pipelines that turn PDFs, scanned documents, and handwritten notes into structured, queryable data for enterprise clients.',
    author: 'Tanmay S.',
    role: 'AI Engineer',
    date: 'Mar 8, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 8,
    category: 'Business',
    title: 'The ROI of Digital Transformation for Local Businesses',
    excerpt: 'Case studies showing how family-run restaurants, clinics, and retail stores 3x-ed their efficiency after going digital with TantrShell solutions.',
    author: 'Vebson Patil',
    role: 'CTO & Co-Founder',
    date: 'Feb 28, 2026',
    readTime: '6 min read',
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.blog-card, .blog-featured-card').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [activeCategory]);

  const filteredPosts = activeCategory === 'All' ? blogPosts : blogPosts.filter(p => p.category === activeCategory);
  const featuredPosts = filteredPosts.filter(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured);

  return (
    <section id="blog" className="section section-blog" style={{ paddingTop: '8rem' }}>
      <SectionHeader tag="INSIGHTS // BLOG" title="THOUGHTS &" accentWord="INSIGHTS" desc="Technical deep-dives, business strategies, and behind-the-scenes stories from the TantrShell team." />

      {/* Category Filter */}
      <div className="blog-categories">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="blog-featured">
          {featuredPosts.map(post => (
            <div key={post.id} className="blog-featured-card" data-animate="">
              <div className="blog-featured-content">
                <div className="blog-featured-meta">
                  <span className="blog-category-tag mono">{post.category}</span>
                  <span className="blog-featured-badge mono">FEATURED</span>
                </div>
                <h3 className="blog-featured-title">{post.title}</h3>
                <p className="blog-featured-excerpt">{post.excerpt}</p>
                <div className="blog-featured-footer">
                  <div className="blog-author">
                    <div className="blog-author-avatar">{post.author.charAt(0)}</div>
                    <div className="blog-author-info">
                      <span className="blog-author-name">{post.author}</span>
                      <span className="blog-author-role mono">{post.role}</span>
                    </div>
                  </div>
                  <div className="blog-post-meta">
                    <span className="mono">{post.date}</span>
                    <span className="blog-meta-dot">·</span>
                    <span className="mono">{post.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="blog-featured-visual">
                <div className="blog-visual-pattern">
                  <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15">
                    <circle cx="100" cy="100" r="80" />
                    <circle cx="100" cy="100" r="60" />
                    <circle cx="100" cy="100" r="40" />
                    <circle cx="100" cy="100" r="20" />
                    <line x1="100" y1="0" x2="100" y2="200" />
                    <line x1="0" y1="100" x2="200" y2="100" />
                    <line x1="29" y1="29" x2="171" y2="171" />
                    <line x1="171" y1="29" x2="29" y2="171" />
                  </svg>
                </div>
                <span className="blog-read-cta mono">READ ARTICLE →</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Regular Posts Grid */}
      <div className="blog-grid">
        {regularPosts.map((post, i) => (
          <div key={post.id} className="blog-card" data-animate="" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="blog-card-top">
              <span className="blog-category-tag mono">{post.category}</span>
              <span className="blog-card-date mono">{post.date}</span>
            </div>
            <h4 className="blog-card-title">{post.title}</h4>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <div className="blog-card-footer">
              <div className="blog-author-small">
                <div className="blog-author-avatar small">{post.author.charAt(0)}</div>
                <span className="blog-author-name-small">{post.author}</span>
              </div>
              <span className="blog-read-time mono">{post.readTime}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="blog-newsletter">
        <div className="blog-newsletter-inner">
          <h3>Stay in the <span className="accent">Loop</span></h3>
          <p>Get the latest articles, insights, and TantrShell updates delivered straight to your inbox. No spam — just signal.</p>
          <div className="blog-newsletter-form">
            <input type="email" placeholder="your@email.com" className="blog-newsletter-input" />
            <button className="btn btn-primary btn-small">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </section>
  );
}
