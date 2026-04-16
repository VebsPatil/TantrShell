/* ===================================================
   TANTRSHELL — Main Entry Point
   Three.js 3D Models + GSAP Animations
   =================================================== */

import * as THREE from 'three';
import gsap from 'gsap';

// ============================================
// 1. LOADING SCREEN
// ============================================
const loader = document.getElementById('loader');
const loaderFill = document.querySelector('.loader-fill');
let loadProgress = 0;

function updateLoader() {
  loadProgress += Math.random() * 15 + 5;
  if (loadProgress > 100) loadProgress = 100;
  loaderFill.style.width = loadProgress + '%';

  if (loadProgress < 100) {
    setTimeout(updateLoader, 200);
  } else {
    setTimeout(() => {
      loader.classList.add('hidden');
      initHeroAnimations();
      document.querySelector('#main-nav').classList.add('visible');
    }, 500);
  }
}

setTimeout(updateLoader, 300);

// ============================================
// 2. CUSTOM CURSOR
// ============================================
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover effects
const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .service-card, .product-card, .training-track, .about-feature');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
});

// ============================================
// 3. THREE.JS — HERO 3D SCENE
// ============================================
const heroContainer = document.getElementById('three-canvas-container');
let heroScene, heroCamera, heroRenderer, heroShell, heroParticles;
let heroAnimationId;

function initHeroScene() {
  heroScene = new THREE.Scene();
  heroScene.fog = new THREE.FogExp2(0x0A0A0F, 0.0015);

  heroCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  heroCamera.position.set(0, 0, 6);

  heroRenderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  heroRenderer.setSize(window.innerWidth, window.innerHeight);
  heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  heroRenderer.setClearColor(0x0A0A0F, 0);
  heroContainer.appendChild(heroRenderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x222233, 0.5);
  heroScene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xFF4D00, 1.2);
  mainLight.position.set(5, 5, 5);
  heroScene.add(mainLight);

  const secondLight = new THREE.DirectionalLight(0x00D4FF, 0.4);
  secondLight.position.set(-5, -3, 3);
  heroScene.add(secondLight);

  const rimLight = new THREE.PointLight(0xFF4D00, 2, 15);
  rimLight.position.set(0, 3, -3);
  heroScene.add(rimLight);

  // Main Shell — Icosahedron (geometric shell)
  const shellGeometry = new THREE.IcosahedronGeometry(1.6, 1);
  const shellMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x1a1a2e,
    metalness: 0.85,
    roughness: 0.15,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    emissive: 0xFF4D00,
    emissiveIntensity: 0.05,
    transparent: true,
    opacity: 0.9,
  });
  heroShell = new THREE.Mesh(shellGeometry, shellMaterial);
  heroScene.add(heroShell);

  // Wireframe overlay
  const wireGeometry = new THREE.IcosahedronGeometry(1.65, 1);
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0xFF4D00,
    wireframe: true,
    transparent: true,
    opacity: 0.12,
  });
  const wireShell = new THREE.Mesh(wireGeometry, wireMaterial);
  heroShell.add(wireShell);

  // Inner core glow
  const coreGeometry = new THREE.IcosahedronGeometry(0.6, 2);
  const coreMaterial = new THREE.MeshBasicMaterial({
    color: 0xFF4D00,
    transparent: true,
    opacity: 0.15,
  });
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  heroShell.add(core);

  // Outer ring
  const ringGeometry = new THREE.TorusGeometry(2.5, 0.015, 16, 100);
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0xFF4D00,
    transparent: true,
    opacity: 0.2,
  });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.rotation.x = Math.PI / 2;
  heroShell.add(ring);

  // Second ring
  const ring2Geometry = new THREE.TorusGeometry(3.0, 0.01, 16, 100);
  const ring2Material = new THREE.MeshBasicMaterial({
    color: 0x00D4FF,
    transparent: true,
    opacity: 0.08,
  });
  const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
  ring2.rotation.x = Math.PI / 3;
  ring2.rotation.y = Math.PI / 4;
  heroShell.add(ring2);

  // Floating particles
  const particleCount = 300;
  const particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const r = 3 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const isOrange = Math.random() > 0.7;
    colors[i * 3] = isOrange ? 1.0 : 0.6;
    colors[i * 3 + 1] = isOrange ? 0.3 : 0.6;
    colors[i * 3 + 2] = isOrange ? 0.0 : 0.65;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMaterial = new THREE.PointsMaterial({
    size: 0.02,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true,
  });

  heroParticles = new THREE.Points(particleGeometry, particleMaterial);
  heroScene.add(heroParticles);

  // Orbit lines
  for (let i = 0; i < 3; i++) {
    const orbitGeo = new THREE.TorusGeometry(3.5 + i * 0.8, 0.003, 8, 128);
    const orbitMat = new THREE.MeshBasicMaterial({
      color: 0xFF4D00,
      transparent: true,
      opacity: 0.04 - i * 0.01,
    });
    const orbit = new THREE.Mesh(orbitGeo, orbitMat);
    orbit.rotation.x = (Math.PI / 6) * (i + 1);
    orbit.rotation.y = (Math.PI / 4) * i;
    heroScene.add(orbit);
  }
}

function animateHero() {
  heroAnimationId = requestAnimationFrame(animateHero);

  const time = Date.now() * 0.001;

  if (heroShell) {
    heroShell.rotation.y += 0.003;
    heroShell.rotation.x = Math.sin(time * 0.3) * 0.15;
    heroShell.position.y = Math.sin(time * 0.5) * 0.15;

    // Mouse interaction
    const targetRotX = (mouseY / window.innerHeight - 0.5) * 0.3;
    const targetRotY = (mouseX / window.innerWidth - 0.5) * 0.3;
    heroShell.rotation.x += (targetRotX - heroShell.rotation.x) * 0.02;
    heroShell.rotation.z = targetRotY * 0.1;
  }

  if (heroParticles) {
    heroParticles.rotation.y += 0.0003;
    heroParticles.rotation.x += 0.0001;
  }

  heroRenderer.render(heroScene, heroCamera);
}

initHeroScene();
animateHero();

// ============================================
// 4. THREE.JS — TRAINING 3D SCENE
// ============================================
const trainingContainer = document.getElementById('training-3d-container');
let trainingScene, trainingCamera, trainingRenderer, trainingModel;

function initTrainingScene() {
  trainingScene = new THREE.Scene();

  trainingCamera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  trainingCamera.position.set(0, 0, 5);

  trainingRenderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  trainingRenderer.setSize(400, 350);
  trainingRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  trainingRenderer.setClearColor(0x000000, 0);
  trainingContainer.appendChild(trainingRenderer.domElement);

  // Lights
  const ambLight = new THREE.AmbientLight(0x333344, 0.6);
  trainingScene.add(ambLight);

  const dirLight = new THREE.DirectionalLight(0xFF4D00, 1);
  dirLight.position.set(3, 4, 5);
  trainingScene.add(dirLight);

  const backLight = new THREE.PointLight(0x00D4FF, 0.8, 10);
  backLight.position.set(-3, -2, 2);
  trainingScene.add(backLight);

  // Build a DNA-like helix (representing learning/growth)
  const helixGroup = new THREE.Group();

  for (let i = 0; i < 30; i++) {
    const t = i / 30;
    const y = (t - 0.5) * 6;
    const angle1 = t * Math.PI * 4;
    const angle2 = angle1 + Math.PI;

    // Strand 1
    const sphere1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 8, 8),
      new THREE.MeshPhysicalMaterial({
        color: 0xFF4D00,
        emissive: 0xFF4D00,
        emissiveIntensity: 0.2,
        metalness: 0.8,
        roughness: 0.2,
      })
    );
    sphere1.position.set(Math.cos(angle1) * 0.8, y, Math.sin(angle1) * 0.8);
    helixGroup.add(sphere1);

    // Strand 2
    const sphere2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 8, 8),
      new THREE.MeshPhysicalMaterial({
        color: 0x00D4FF,
        emissive: 0x00D4FF,
        emissiveIntensity: 0.2,
        metalness: 0.8,
        roughness: 0.2,
      })
    );
    sphere2.position.set(Math.cos(angle2) * 0.8, y, Math.sin(angle2) * 0.8);
    helixGroup.add(sphere2);

    // Connecting bars
    if (i % 3 === 0) {
      const connGeometry = new THREE.CylinderGeometry(0.015, 0.015, 1.6, 4);
      const connMaterial = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        transparent: true,
        opacity: 0.15,
      });
      const conn = new THREE.Mesh(connGeometry, connMaterial);
      conn.position.set(0, y, 0);
      conn.rotation.z = Math.PI / 2;
      conn.rotation.y = angle1;
      helixGroup.add(conn);
    }
  }

  trainingModel = helixGroup;
  trainingScene.add(helixGroup);
}

function animateTraining() {
  requestAnimationFrame(animateTraining);

  if (trainingModel) {
    trainingModel.rotation.y += 0.005;
    trainingModel.position.y = Math.sin(Date.now() * 0.001) * 0.2;
  }

  trainingRenderer.render(trainingScene, trainingCamera);
}

initTrainingScene();
animateTraining();

// ============================================
// 5. GSAP HERO ANIMATIONS
// ============================================
function initHeroAnimations() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.to('.hero-top-label', {
    opacity: 1,
    y: 0,
    duration: 0.6,
  })
    .to('.line-1', {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.3')
    .to('.line-2', {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.5')
    .to('.line-3', {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.5')
    .to('.hero-subtitle', {
      opacity: 1,
      y: 0,
      duration: 0.6,
    }, '-=0.3')
    .to('.hero-actions', {
      opacity: 1,
      y: 0,
      duration: 0.6,
    }, '-=0.2')
    .to('.hero-stats', {
      opacity: 1,
      y: 0,
      duration: 0.6,
    }, '-=0.2');

  // Counter animation
  document.querySelectorAll('.stat-number').forEach(counter => {
    const target = parseInt(counter.dataset.count);
    gsap.to(counter, {
      textContent: target,
      duration: 2,
      delay: 1.5,
      snap: { textContent: 1 },
      ease: 'power2.out',
    });
  });
}

// ============================================
// 6. SCROLL ANIMATIONS — Intersection Observer
// ============================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px',
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stagger animation for grid children
      if (entry.target.classList.contains('about-feature')) {
        const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 0.1}s`;
      }
    }
  });
}, observerOptions);

// Observe section elements
document.querySelectorAll('.section-header, .services-grid, .products-categories, .products-grid, .training-content, .contact-content, .about-feature').forEach(el => {
  revealObserver.observe(el);
});

// ============================================
// 7. NAVIGATION — Active Section Tracking
// ============================================
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === id);
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => navObserver.observe(section));

// ============================================
// 8. PRODUCT CATEGORY FILTERING
// ============================================
const categoryPills = document.querySelectorAll('.category-pill');
const productCards = document.querySelectorAll('.product-card');

categoryPills.forEach(pill => {
  pill.addEventListener('click', () => {
    categoryPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    const category = pill.dataset.category;

    productCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.classList.remove('hidden');
        gsap.from(card, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ============================================
// 9. TRAINING TRACK SWITCHING
// ============================================
const tracks = document.querySelectorAll('.training-track');
const trainingInfo = document.querySelector('.training-info');

const trackData = {
  webdev: {
    title: 'Web Development',
    desc: 'Master modern web technologies from HTML/CSS to React, Node.js, databases, and deployment. Build real-world projects with mentorship from industry experts.',
    features: ['12-Week Program', 'Real Client Projects', 'Job Placement Support', 'Expert Mentorship']
  },
  appdev: {
    title: 'App Development',
    desc: 'Build native and cross-platform mobile applications using React Native, Flutter, and native SDKs. Design, develop, and deploy professional mobile experiences.',
    features: ['10-Week Program', 'App Store Publishing', 'UI/UX Integration', 'Live Projects']
  },
  uiux: {
    title: 'UI/UX Design',
    desc: 'Learn Figma, prototyping, user research, and design systems. Create beautiful, functional interfaces that users love.',
    features: ['8-Week Program', 'Portfolio Building', 'Design Systems', 'User Testing']
  },
  ai: {
    title: 'AI Tools for Business',
    desc: 'Harness the power of AI for business automation, content generation, data analysis, and customer engagement.',
    features: ['6-Week Program', 'Hands-On Projects', 'Business Integration', 'ChatBot Building']
  },
  cloud: {
    title: 'Cloud & DevOps',
    desc: 'Deploy and manage applications on AWS, GCP, and Azure. Learn CI/CD, containers, and infrastructure as code.',
    features: ['10-Week Program', 'Cloud Certifications', 'Real Infrastructure', 'Security Best Practices']
  },
  nocode: {
    title: 'No-Code / Low-Code',
    desc: 'Build powerful applications without traditional coding. Master platforms like Bubble, Webflow, and Zapier.',
    features: ['4-Week Program', 'Rapid Prototyping', 'Business Automation', 'MVP Building']
  },
};

tracks.forEach(track => {
  track.addEventListener('click', () => {
    tracks.forEach(t => t.classList.remove('active'));
    track.classList.add('active');

    const data = trackData[track.dataset.track];
    if (data) {
      gsap.to(trainingInfo, {
        opacity: 0,
        x: -20,
        duration: 0.2,
        onComplete: () => {
          trainingInfo.querySelector('h3').textContent = data.title;
          trainingInfo.querySelector('p').textContent = data.desc;
          const featuresContainer = trainingInfo.querySelector('.training-features');
          featuresContainer.innerHTML = data.features.map(f =>
            `<div class="feature mono"><span class="accent">→</span> ${f}</div>`
          ).join('');
          gsap.to(trainingInfo, {
            opacity: 1,
            x: 0,
            duration: 0.3,
          });
        }
      });
    }
  });
});

// ============================================
// 10. SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// ============================================
// 11. CONTACT FORM
// ============================================
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = document.getElementById('contact-submit');
  const originalText = btn.textContent;

  btn.textContent = 'SENDING...';
  btn.style.opacity = '0.7';

  setTimeout(() => {
    btn.textContent = 'MESSAGE SENT ✓';
    btn.style.background = '#00ff88';
    btn.style.color = '#0A0A0F';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.opacity = '';
      contactForm.reset();
    }, 3000);
  }, 1500);
});

// ============================================
// 12. WINDOW RESIZE
// ============================================
window.addEventListener('resize', () => {
  if (heroCamera && heroRenderer) {
    heroCamera.aspect = window.innerWidth / window.innerHeight;
    heroCamera.updateProjectionMatrix();
    heroRenderer.setSize(window.innerWidth, window.innerHeight);
  }
});

// ============================================
// 13. NAV HIDE/SHOW ON SCROLL
// ============================================
let lastScrollY = 0;
const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 100) {
    if (currentScrollY < lastScrollY) {
      nav.classList.add('visible');
    } else {
      nav.classList.remove('visible');
    }
  } else {
    nav.classList.add('visible');
  }

  lastScrollY = currentScrollY;
});

// ============================================
// 14. PARALLAX ON HERO TEXT
// ============================================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && scrollY < window.innerHeight) {
    heroTitle.style.transform = `translateY(${scrollY * 0.3}px)`;
    heroTitle.style.opacity = 1 - (scrollY / (window.innerHeight * 0.7));
  }
});

console.log('%c TANTRSHELL ', 'background: #FF4D00; color: #0A0A0F; font-size: 16px; font-weight: bold; padding: 8px 16px;');
console.log('%c Smart Tech. Ready to Deploy. ', 'color: #FF4D00; font-size: 12px;');
