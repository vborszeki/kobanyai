'use strict';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);

const renderer = new THREE.WebGLRenderer({ alpha: true, preserveDrawingBuffer: true });
renderer.autoClearColor = false;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let cylinder;

for (let i = 0; i < 230; i ++) {
  const geometry = new THREE.CylinderGeometry( 34, 34, 168, 50, 50 );
  let texture = new THREE.TextureLoader().load('beer.png');
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);

  const material = new THREE.MeshBasicMaterial({ map: texture });
  cylinder = new THREE.Mesh(geometry, material);
  cylinder.position.x = Math.random() * 1000 - 500;
  cylinder.position.y = Math.random() * 1000 - 500;
  cylinder.position.z = Math.random() * 1000 - 500;
  cylinder.rotation.x = Math.random() * 2 * Math.PI;
  cylinder.rotation.y = Math.random() * 2 * Math.PI;
  cylinder.rotation.z = Math.random() * 2 * Math.PI;
  scene.add(cylinder);
}

camera.position.z = 500;

function animate() {
  requestAnimationFrame(animate);
  camera.position.z = Math.sin(Date.now() * 0.002) * 500;
  camera.position.y = Math.sin(Date.now() * 0.002) * 300;
  camera.lookAt(cylinder.position);
  renderer.render(scene, camera);
}

animate();
