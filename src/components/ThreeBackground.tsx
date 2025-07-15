import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SHAPES = [
  () => new THREE.BoxGeometry(2, 2, 2),
  () => new THREE.TetrahedronGeometry(1.8),
  () => new THREE.IcosahedronGeometry(1.5),
  () => new THREE.OctahedronGeometry(1.7),
  () => new THREE.DodecahedronGeometry(1.6),
];

const COLOR_PALETTE = [0x7f9cf5, 0x805ad5, 0x63b3ed, 0x90cdf4, 0x6b46c1];

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const mouse = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0); // transparent
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Responsive resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouse.current.x = x;
      mouse.current.y = y;
      // Target rotation is subtle, not 1:1
      targetRotation.current.x = y * 0.3;
      targetRotation.current.y = x * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create group of geometric shapes (wireframe)
    const group = new THREE.Group();
    const shapeCount = 28;
    for (let i = 0; i < shapeCount; i++) {
      const geometry = SHAPES[Math.floor(Math.random() * SHAPES.length)]();
      const color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
      const material = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.6 + Math.random() * 0.2,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 40
      );
      mesh.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.07,
          (Math.random() - 0.5) * 0.07,
          (Math.random() - 0.5) * 0.07
        ),
        baseY: mesh.position.y,
        floatSpeed: 0.5 + Math.random() * 0.5,
        floatPhase: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.01,
      };
      group.add(mesh);
    }
    scene.add(group);

    // Animation loop
    const animate = () => {
      const time = performance.now() * 0.001;
      // Smoothly interpolate group rotation toward target
      group.rotation.x += (targetRotation.current.x - group.rotation.x) * 0.07;
      group.rotation.y += (targetRotation.current.y - group.rotation.y) * 0.07;
      group.children.forEach((mesh: any) => {
        // Gentle floating
        mesh.position.y = mesh.userData.baseY + Math.sin(time * mesh.userData.floatSpeed + mesh.userData.floatPhase) * 2;
        // Subtle drifting
        mesh.position.x += mesh.userData.velocity.x;
        mesh.position.y += mesh.userData.velocity.y * 0.2;
        mesh.position.z += mesh.userData.velocity.z;
        // Wrap around
        if (mesh.position.x > 50) mesh.position.x = -50;
        if (mesh.position.x < -50) mesh.position.x = 50;
        if (mesh.position.y > 30) mesh.position.y = -30;
        if (mesh.position.y < -30) mesh.position.y = 30;
        if (mesh.position.z > 30) mesh.position.z = -30;
        if (mesh.position.z < -30) mesh.position.z = 30;
        // Subtle rotation
        mesh.rotation.x += mesh.userData.rotSpeed;
        mesh.rotation.y += mesh.userData.rotSpeed * 0.7;
      });
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default ThreeBackground; 