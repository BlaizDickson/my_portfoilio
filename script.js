// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create geometry (icon shape)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Load textures
const textureLoader = new THREE.TextureLoader();
const javascriptTexture = textureLoader.load('Assets/javascript.png');
const laravelTexture = textureLoader.load('Assets/laravel.png');
const pythonTexture = textureLoader.load('Assets/python.png');
const cssTexture = textureLoader.load('Assets/css.png');
const htmlTexture = textureLoader.load('Assets/html.png');

// Create materials using the textures
const materials = [
  new THREE.MeshBasicMaterial({ map: javascriptTexture }), // Front
  new THREE.MeshBasicMaterial({ map: laravelTexture }), // Back
  new THREE.MeshBasicMaterial({ map: pythonTexture }), // Top
  new THREE.MeshBasicMaterial({ map: cssTexture }), // Bottom
  new THREE.MeshBasicMaterial({ map: htmlTexture }), // Right
  new THREE.MeshBasicMaterial({ color: 0x333333 }) // Left
];

// Create mesh with the materials
const icon = new THREE.Mesh(geometry, materials);

// Add mesh to the scene
scene.add(icon);

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  icon.rotation.x += 0.01;
  icon.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
