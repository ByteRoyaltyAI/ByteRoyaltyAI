import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import ReactTypingEffect from "react-typing-effect";
import { useLocation } from "react-router-dom";

const NeoAI: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const brainRef = useRef<THREE.Mesh | null>(null);
  const particlesMeshRef = useRef<THREE.Points | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const location=useLocation()
  const isHomePage=location.pathname==="/"
  
  useEffect(() => {
    if (!sceneRef.current) return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      windowSize.width / windowSize.height,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(windowSize.width, windowSize.height);
    sceneRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x00ffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // 3D Brain Model
    const brainSize = Math.min(2, windowSize.width / 300);
    const brainGeometry = new THREE.SphereGeometry(brainSize, 32, 32);
    const brainMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const brain = new THREE.Mesh(brainGeometry, brainMaterial);
    scene.add(brain);
    brainRef.current = brain;

    // Neural Network Connections
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = Math.min(1000, windowSize.width * 0.5);
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
    });
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);
    particlesMeshRef.current = particlesMesh;

    camera.position.z = 5;

    // Render function
    const render = () => {
      renderer.render(scene, camera);
    };

    // Initial render
    render();

    // Interactive rotation
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / windowSize.width) * 2 - 1;
      const mouseY = -(event.clientY / windowSize.height) * 2 + 1;

      if (brainRef.current) {
        gsap.to(brainRef.current.rotation, {
          x: mouseY * 0.3,
          y: mouseX * 0.3,
          duration: 0.5,
          onUpdate: render, // Re-render on each update
        });
      }
      if (particlesMeshRef.current) {
        gsap.to(particlesMeshRef.current.rotation, {
          x: mouseY * 0.1,
          y: mouseX * 0.1,
          duration: 0.5,
          onUpdate: render, // Re-render on each update
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Pulsating effect for the brain
    if (brainRef.current) {
      gsap.to(brainRef.current.scale, {
        x: 1.05,
        y: 1.05,
        z: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        onUpdate: render, // Re-render on each update
      });
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
    };
  }, [windowSize]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Button hover effect
  // const handleButtonEnter = () => {
  //   if (sceneRef.current && sceneRef.current.children[0]) {
  //     const scene = sceneRef.current.children[0] ;
  //     const pointLight = scene.children[1] ;
  //     gsap.to(pointLight, {
  //       intensity: 2,
  //       duration: 0.3
  //     });
  //   }
  // };

  // const handleButtonLeave = () => {
  //   if (sceneRef.current && sceneRef.current.children[0]) {
  //     const scene = sceneRef.current.children[0] ;
  //     const pointLight = scene.children[1] ;
  //     gsap.to(pointLight, {
  //       intensity: 1,
  //       duration: 0.3
  //     });
  //   }
  // };

  return (
    <>
      <div
        ref={sceneRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
      ></div>
      {isHomePage &&
      <div
        className="content"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(4rem, 5vw, 7rem)",
            textShadow: "0 0 10px rgba(0,255,255,0.5)",
            height: "clamp(4rem, 15vw, 8rem)",
            fontWeight: "600",
            marginBottom: "50px",
          }}
        >
          <ReactTypingEffect
            text={["Welcome to IMAIGEN !", "Explore our AI Universe"]}
            speed={100}
            eraseSpeed={100}
            typingDelay={1000}
            eraseDelay={2000}
            displayTextRenderer={(text) => {
              return (
                <h1 style={{ fontSize: "inherit", margin: 0 }}>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span key={key} style={{ color: "white" }}>
                        {char}
                      </span>
                    );
                  })}
                </h1>
              );
            }}
          />
        </h1>
        
        <h1 className="font-bold textContainer sm:text-sm md:text-6xl" style={{fontSize: "clamp(2rem, 5vw, 4rem)"}}>
          <span className="text-with-stroke">You IMAGINE... We AI-MAGINE...</span><br /> <span className="remainText">Let's make it real... </span>
        </h1>
        {/* <a href="#" className="cta-button" 
           onMouseEnter={handleButtonEnter}
           onMouseLeave={handleButtonLeave}
           style={{
            display: 'inline-block',
            backgroundColor: '#00ffff',
            color: '#000',
            padding: 'clamp(0.5rem, 2vw, 1rem) clamp(1rem, 4vw, 2rem)',
            borderRadius: '2rem',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            border: '2px solid #00ffff',
            cursor: 'pointer',
            fontSize: 'clamp(0.8rem, 2vw, 1rem)',
           }}>
          Explore Our AI Universe
        </a> */}
      </div>}
    </>
  );
};

export default NeoAI;
