import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider';
import FeatureIcon from '../../components/FeatureIcon';

const screenshots = [
  { src: 'https://lh3.googleusercontent.com/aida/ADBb0uhIFQqLm9JCIOKFifKcGHdv1A8S8_YeDDgxzfe4NNIqJ-LKrz9DCAlxkIf-cQpP4AtbOq5E0k6wozngwMs3V1Eq4L0itVuCssCdhzejBn-vSjAJLeB_65n50rddRUMEO7cmxjIhF16dNtfsmjfEMxTggnkujJ_wwbuH5S1i3eJpNgIdlPRMGpUzPIEt5k_axA97t2v9GJkIa-oLG-qJ-eClxSLyrp3caJBnpXBklK9IA6V4w8-wAY2gnzg', alt: 'AI Chat Interface' },
  { src: 'https://lh3.googleusercontent.com/aida/ADBb0uhIFQqLm9JCIOKFifKcGHdv1A8S8_YeDDgxzfe4NNIqJ-LKrz9DCAlxkIf-cQpP4AtbOq5E0k6wozngwMs3V1Eq4L0itVuCssCdhzejBn-vSjAJLeB_65n50rddRUMEO7cmxjIhF16dNtfsmjfEMxTggnkujJ_wwbuH5S1i3eJpNgIdlPRMGpUzPIEt5k_axA97t2v9GJkIa-oLG-qJ-eClxSLyrp3caJBnpXBklK9IA6V4w8-wAY2gnzg', alt: 'Knowledge Base' },
  { src: 'https://lh3.googleusercontent.com/aida/ADBb0uhIFQqLm9JCIOKFifKcGHdv1A8S8_YeDDgxzfe4NNIqJ-LKrz9DCAlxkIf-cQpP4AtbOq5E0k6wozngwMs3V1Eq4L0itVuCssCdhzejBn-vSjAJLeB_65n50rddRUMEO7cmxjIhF16dNtfsmjfEMxTggnkujJ_wwbuH5S1i3eJpNgIdlPRMGpUzPIEt5k_axA97t2v9GJkIa-oLG-qJ-eClxSLyrp3caJBnpXBklK9IA6V4w8-wAY2gnzg', alt: 'Analytics Dashboard' },
];

const features = [
  { iconSvg: 'intelligent-chat', title: 'Intelligent Chat', desc: 'Context-aware AI conversations with natural language understanding, multi-turn dialogue, and intent recognition.' },
  { iconSvg: 'document-analysis', title: 'Document Analysis', desc: 'Upload PDFs, docs, and knowledge bases — the bot learns your content and answers from your data.' },
  { iconSvg: 'auto-replies', title: 'Auto-Replies', desc: 'Smart response templates, out-of-hours handling, FAQ auto-detection, and escalation triggers.' },
  { iconSvg: 'smart-recommend', title: 'Smart Recommendations', desc: 'AI-powered product suggestions, next-best-action prompts, and contextual help article surfacing.' },
  { iconSvg: 'ai-analytics', title: 'Analytics Dashboard', desc: 'CSAT tracking, resolution times, bot vs. human handling ratios, and conversation heat maps.' },
  { iconSvg: 'multi-channel', title: 'Multi-Channel', desc: 'Deploy across website widget, WhatsApp, Telegram, Slack, and custom integrations via API.' },
];

const techStack = ['React', 'Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI'];

export default function AISupportBotPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="product-deploy-page" style={{ '--product-accent': '#8B5CF6', '--product-accent-rgb': '139, 92, 246' }}>
      <section className="pdp-hero">
        <div className="pdp-hero-bg" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(139,92,246,0.12) 0%, transparent 60%)' }} />
        <div className="pdp-hero-content">
          <span className="pdp-tag mono">AI PLATFORM</span>
          <h1 className="pdp-title">AI Support <span style={{ color: '#8B5CF6' }}>Bot</span></h1>
          <p className="pdp-subtitle">Intelligent chatbot with document analysis, auto-replies, and smart recommendations — powered by cutting-edge AI.</p>
          <div className="pdp-hero-actions">
            <Link to="/contact" className="btn btn-primary pdp-cta" style={{ background: '#8B5CF6', color: '#fff' }}>REQUEST DEMO →</Link>
            <Link to="/products" className="btn btn-ghost">← BACK TO PRODUCTS</Link>
          </div>
          <div className="pdp-hero-stats">
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#8B5CF6' }}>80%</span><span className="pdp-stat-label mono">AUTO-RESOLVED</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#8B5CF6' }}>&lt;2s</span><span className="pdp-stat-label mono">RESPONSE TIME</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#8B5CF6' }}>24/7</span><span className="pdp-stat-label mono">AVAILABILITY</span></div>
          </div>
        </div>
      </section>

      <section className="pdp-screenshot-section">
        <div className="pdp-screenshot-wrapper" style={{ boxShadow: '0 30px 80px rgba(139,92,246,0.15)' }}>
          <div className="pdp-screenshot-topbar"><div className="pdp-dots"><span /><span /><span /></div><span className="mono" style={{ fontSize: '0.6rem', color: 'var(--outline)' }}>OBSIDIAN CORE — AI CHAT INTERFACE</span></div>
          <ImageSlider images={screenshots} />
        </div>
      </section>

      <section className="pdp-features-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#8B5CF6' }}>CORE MODULES</span>
          <h2 className="pdp-section-title">AI-Powered <span style={{ color: '#8B5CF6' }}>Intelligence</span></h2>
        </div>
        <div className="pdp-features-grid">
          {features.map((f, i) => (
            <div key={i} className="pdp-feature-card" style={{ '--card-accent': '#8B5CF6' }}>
              <div className="pdp-feature-icon"><FeatureIcon name={f.iconSvg} color="#8B5CF6" /></div>
              <h3 className="pdp-feature-title">{f.title}</h3>
              <p className="pdp-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pdp-tech-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#8B5CF6' }}>TECHNOLOGY</span>
          <h2 className="pdp-section-title">Built With <span style={{ color: '#8B5CF6' }}>Cutting-Edge</span> AI</h2>
        </div>
        <div className="pdp-tech-pills">
          {techStack.map((t, i) => <span key={i} className="pdp-tech-pill" style={{ borderColor: 'rgba(139,92,246,0.3)', color: '#8B5CF6' }}>{t}</span>)}
        </div>
      </section>

      <section className="pdp-cta-section" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), transparent)' }}>
        <h2 className="pdp-cta-title">Deploy Your AI <span style={{ color: '#8B5CF6' }}>Assistant</span></h2>
        <p className="pdp-cta-desc">Train it on your data. Deploy it everywhere. Support customers 24/7.</p>
        <Link to="/contact" className="btn btn-primary btn-large" style={{ background: '#8B5CF6', color: '#fff' }}>START YOUR PROJECT →</Link>
      </section>
    </div>
  );
}
