import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TrainingScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / Math.max(container.clientHeight, 350), 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, Math.max(container.clientHeight, 350));
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x333344, 0.6));
    const dirLight = new THREE.DirectionalLight(0xFF4D00, 1);
    dirLight.position.set(3, 4, 5);
    scene.add(dirLight);
    const backLight = new THREE.PointLight(0x00D4FF, 0.8, 10);
    backLight.position.set(-3, -2, 2);
    scene.add(backLight);

    // DNA Helix
    const helix = new THREE.Group();
    for (let i = 0; i < 30; i++) {
      const t = i / 30;
      const y = (t - 0.5) * 6;
      const a1 = t * Math.PI * 4;
      const a2 = a1 + Math.PI;

      const s1 = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 8, 8),
        new THREE.MeshPhysicalMaterial({ color: 0xFF4D00, emissive: 0xFF4D00, emissiveIntensity: 0.2, metalness: 0.8, roughness: 0.2 })
      );
      s1.position.set(Math.cos(a1) * 0.8, y, Math.sin(a1) * 0.8);
      helix.add(s1);

      const s2 = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 8, 8),
        new THREE.MeshPhysicalMaterial({ color: 0x00D4FF, emissive: 0x00D4FF, emissiveIntensity: 0.2, metalness: 0.8, roughness: 0.2 })
      );
      s2.position.set(Math.cos(a2) * 0.8, y, Math.sin(a2) * 0.8);
      helix.add(s2);

      if (i % 3 === 0) {
        const conn = new THREE.Mesh(
          new THREE.CylinderGeometry(0.015, 0.015, 1.6, 4),
          new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.15 })
        );
        conn.position.set(0, y, 0);
        conn.rotation.z = Math.PI / 2;
        conn.rotation.y = a1;
        helix.add(conn);
      }
    }
    scene.add(helix);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      helix.rotation.y += 0.005;
      helix.position.y = Math.sin(Date.now() * 0.001) * 0.2;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} id="training-3d-container" className="training-3d" />;
}
