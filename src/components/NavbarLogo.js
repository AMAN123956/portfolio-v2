import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NavbarLogo = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = 60;
    const height = 60;
    
    // Three.js setup
    const scene = new THREE.Scene();
    scene.background = null;
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(width, height, true);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 300;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i += 3) {
      // Create a sphere shape
      const radius = 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create two particle systems with different colors
    const particlesMaterial1 = new THREE.PointsMaterial({
      size: 0.03,
      color: '#1B9EFC',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particlesMaterial2 = new THREE.PointsMaterial({
      size: 0.025,
      color: '#00ff88',
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particlesMesh1 = new THREE.Points(particlesGeometry, particlesMaterial1);
    const particlesMesh2 = new THREE.Points(particlesGeometry.clone(), particlesMaterial2);
    
    scene.add(particlesMesh1);
    scene.add(particlesMesh2);

    camera.position.z = 2;

    // Animation
    let time = 0;
    let animationFrameId;
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.005;
      
      particlesMesh1.rotation.x = time * 0.5;
      particlesMesh1.rotation.y = time * 0.3;
      
      particlesMesh2.rotation.x = -time * 0.3;
      particlesMesh2.rotation.y = -time * 0.5;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, true);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="navbar-logo-animation"
      aria-label="Animated Logo"
    />
  );
};

export default NavbarLogo; 