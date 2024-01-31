function bloomFlower() {
    var flower = document.getElementById('flower');

    // Toggle the 'hidden' class to show/hide the flower
    flower.classList.toggle('hidden');

    // Reset the flower state after animation ends
    setTimeout(function () {
        flower.classList.toggle('hidden');
    }, 1000);
}

let basicMaterial, shaderMaterial;
let renderer = new THREE.WebGLRenderer({
    canvas: canvasEL,
    alpha: true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
let sceneShader = new THREE.Scene();
let sceneBasic = new THREE.Scene();
let camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);
let clock = new THREE.Clock();
let flowerObject;  // Added flowerObject variable

// Existing Three.js initialization code...
function init() {
    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // Add objects, lights, etc.
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Set up camera position, renderer size, etc.
    camera.position.z = 5;
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer to the DOM
    document.body.appendChild(renderer.domElement);

    // Render loop
    function animate() {
        requestAnimationFrame(animate);

        // Perform animations, updates, etc.

        renderer.render(scene, camera);
    }

    animate();

    // Call the createFlower function to initialize your flower
    createFlower();

    // Event listener for the clear button
    document.addEventListener("DOMContentLoaded", function () {
        const clearButton = document.querySelector(".clean-btn");
        clearButton.addEventListener("click", clearScene);
    });
}

function createFlower() {
    // Replace this with your actual flower creation logic
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    flowerObject = new THREE.Mesh(geometry, material);

    // Add the flower object to the scene
    sceneShader.add(flowerObject);
}

function clearScene() {
    // Check if flowerObject exists before removing it
    if (flowerObject) {
        sceneShader.remove(flowerObject);
        flowerObject = null; // Optionally set it to null to indicate that it's removed
    }
}

// Start the initialization process
init();
