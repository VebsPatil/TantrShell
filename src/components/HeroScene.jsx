import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0A0A0F, 0.0015);

    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0A0A0F, 0);
    container.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0x222233, 0.5));
    const mainLight = new THREE.DirectionalLight(0xFF4D00, 1.2);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);
    const secondLight = new THREE.DirectionalLight(0x00D4FF, 0.4);
    secondLight.position.set(-5, -3, 3);
    scene.add(secondLight);
    const rimLight = new THREE.PointLight(0xFF4D00, 2, 15);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    // Shell
    const shell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.6, 1),
      new THREE.MeshPhysicalMaterial({
        color: 0x1a1a2e, metalness: 0.85, roughness: 0.15,
        clearcoat: 1.0, clearcoatRoughness: 0.1,
        emissive: 0xFF4D00, emissiveIntensity: 0.05,
        transparent: true, opacity: 0.9,
      })
    );
    scene.add(shell);

    // Wireframe overlay
    shell.add(new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.65, 1),
      new THREE.MeshBasicMaterial({ color: 0xFF4D00, wireframe: true, transparent: true, opacity: 0.12 })
    ));

    // Inner core
    shell.add(new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.6, 2),
      new THREE.MeshBasicMaterial({ color: 0xFF4D00, transparent: true, opacity: 0.15 })
    ));

    // Rings
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.5, 0.015, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0xFF4D00, transparent: true, opacity: 0.2 })
    );
    ring1.rotation.x = Math.PI / 2;
    shell.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.0, 0.01, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0x00D4FF, transparent: true, opacity: 0.08 })
    );
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    shell.add(ring2);

    // Particles
    const pCount = 300;
    const pGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(pCount * 3);
    const col = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const r = 3 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const isO = Math.random() > 0.7;
      col[i * 3] = isO ? 1.0 : 0.6;
      col[i * 3 + 1] = isO ? 0.3 : 0.6;
      col[i * 3 + 2] = isO ? 0.0 : 0.65;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
      size: 0.02, vertexColors: true, transparent: true, opacity: 0.6, sizeAttenuation: true,
    }));
    scene.add(particles);

    // Orbit lines
    for (let i = 0; i < 3; i++) {
      const orbit = new THREE.Mesh(
        new THREE.TorusGeometry(3.5 + i * 0.8, 0.003, 8, 128),
        new THREE.MeshBasicMaterial({ color: 0xFF4D00, transparent: true, opacity: 0.04 - i * 0.01 })
      );
      orbit.rotation.x = (Math.PI / 6) * (i + 1);
      orbit.rotation.y = (Math.PI / 4) * i;
      scene.add(orbit);
    }

    // Mouse tracking
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animate
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      shell.rotation.y += 0.003;
      shell.rotation.x = Math.sin(time * 0.3) * 0.15;
      shell.position.y = Math.sin(time * 0.5) * 0.15;
      const tRX = (mouseY / window.innerHeight - 0.5) * 0.3;
      const tRY = (mouseX / window.innerWidth - 0.5) * 0.3;
      shell.rotation.x += (tRX - shell.rotation.x) * 0.02;
      shell.rotation.z = tRY * 0.1;
      particles.rotation.y += 0.0003;
      particles.rotation.x += 0.0001;
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} id="three-canvas-container" />;
}
