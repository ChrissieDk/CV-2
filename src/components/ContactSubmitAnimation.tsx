import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SHAPES = [
  () => new THREE.BoxGeometry(1.2, 1.2, 1.2),
  () => new THREE.TetrahedronGeometry(1.1),
  () => new THREE.IcosahedronGeometry(1),
  () => new THREE.OctahedronGeometry(1.1),
  () => new THREE.DodecahedronGeometry(1.1),
];
const COLOR_PALETTE = [0x7f9cf5, 0x805ad5, 0x63b3ed, 0x90cdf4, 0x6b46c1];

const DURATION = 1.2; // seconds

const ContactSubmitAnimation = ({ onDone }: { onDone?: () => void }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const timeoutRef = useRef<number>();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.offsetWidth / mount.offsetHeight,
      0.1,
      1000
    );
    camera.position.z = 16;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(mount.offsetWidth, mount.offsetHeight);
    mount.appendChild(renderer.domElement);

    // Create burst shapes
    const group = new THREE.Group();
    const shapeCount = 18;
    for (let i = 0; i < shapeCount; i++) {
      const geometry = SHAPES[Math.floor(Math.random() * SHAPES.length)]();
      const color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
      const material = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.7,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, 0);
      mesh.userData = {
        direction: new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ).normalize(),
        speed: 6 + Math.random() * 4,
        rotSpeed: (Math.random() - 0.5) * 0.2,
      };
      group.add(mesh);
    }
    scene.add(group);

    // Animation loop
    const start = performance.now();
    const animate = () => {
      const now = performance.now();
      const elapsed = (now - start) / 1000;
      group.children.forEach((mesh: any) => {
        // Burst outward
        mesh.position.x = mesh.userData.direction.x * mesh.userData.speed * elapsed;
        mesh.position.y = mesh.userData.direction.y * mesh.userData.speed * elapsed;
        mesh.position.z = mesh.userData.direction.z * mesh.userData.speed * elapsed * 0.5;
        // Rotate
        mesh.rotation.x += mesh.userData.rotSpeed;
        mesh.rotation.y += mesh.userData.rotSpeed * 0.7;
        // Fade out
        (mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.7 * (1 - elapsed / DURATION));
      });
      renderer.render(scene, camera);
      if (elapsed < DURATION) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        if (onDone) onDone();
      }
    };
    animate();

    // Cleanup
    timeoutRef.current = window.setTimeout(() => {
      if (onDone) onDone();
    }, DURATION * 1000 + 200);
    return () => {
      cancelAnimationFrame(animationRef.current!);
      clearTimeout(timeoutRef.current!);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [onDone]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 20,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default ContactSubmitAnimation; 