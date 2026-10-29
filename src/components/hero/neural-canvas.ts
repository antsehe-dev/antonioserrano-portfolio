/**
 * Neural network particle canvas — Three.js.
 * Points connected when distance < CONNECTION_DIST.
 * Reacts to mouse position.
 */
import * as THREE from 'three';

const PARTICLE_COUNT = 120;
const CONNECTION_DIST = 0.28;
const SPEED = 0.0004;

export function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 1.8;

  // Particles
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const velocities: THREE.Vector3[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
    velocities.push(new THREE.Vector3(
      (Math.random() - 0.5) * SPEED,
      (Math.random() - 0.5) * SPEED,
      0,
    ));
  }

  const ptGeo = new THREE.BufferGeometry();
  const posAttr = new THREE.BufferAttribute(positions, 3);
  ptGeo.setAttribute('position', posAttr);
  const ptMat = new THREE.PointsMaterial({ color: 0x8b9fff, size: 0.009, transparent: true, opacity: 0.5 });
  const points = new THREE.Points(ptGeo, ptMat);
  scene.add(points);

  // Lines geometry (pre-allocated max connections)
  const maxLines = PARTICLE_COUNT * PARTICLE_COUNT;
  const linePositions = new Float32Array(maxLines * 6);
  const lineGeo = new THREE.BufferGeometry();
  const linePosAttr = new THREE.BufferAttribute(linePositions, 3);
  linePosAttr.setUsage(THREE.DynamicDrawUsage);
  lineGeo.setAttribute('position', linePosAttr);
  const lineMat = new THREE.LineSegments(
    lineGeo,
    new THREE.LineBasicMaterial({ color: 0x3d5080, transparent: true, opacity: 0.15 }),
  );
  scene.add(lineMat);

  // Mouse influence
  const mouse = new THREE.Vector2(0, 0);
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, { passive: true });

  function animate() {
    requestAnimationFrame(animate);

    // Move particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3]     += velocities[i].x;
      positions[i * 3 + 1] += velocities[i].y;

      // Bounce
      if (Math.abs(positions[i * 3])     > 1) velocities[i].x *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 1) velocities[i].y *= -1;

      // Subtle mouse attraction
      const dx = mouse.x - positions[i * 3];
      const dy = mouse.y - positions[i * 3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 0.5) {
        positions[i * 3]     += dx * 0.00015;
        positions[i * 3 + 1] += dy * 0.00015;
      }
    }
    posAttr.needsUpdate = true;

    // Rebuild lines
    let lineIdx = 0;
    for (let a = 0; a < PARTICLE_COUNT; a++) {
      for (let b = a + 1; b < PARTICLE_COUNT; b++) {
        const dx = positions[a * 3]     - positions[b * 3];
        const dy = positions[a * 3 + 1] - positions[b * 3 + 1];
        if (Math.sqrt(dx * dx + dy * dy) < CONNECTION_DIST) {
          linePositions[lineIdx++] = positions[a * 3];
          linePositions[lineIdx++] = positions[a * 3 + 1];
          linePositions[lineIdx++] = positions[a * 3 + 2];
          linePositions[lineIdx++] = positions[b * 3];
          linePositions[lineIdx++] = positions[b * 3 + 1];
          linePositions[lineIdx++] = positions[b * 3 + 2];
        }
      }
    }
    lineGeo.setDrawRange(0, lineIdx / 3);
    linePosAttr.needsUpdate = true;

    renderer.render(scene, camera);
  }
  animate();
}
