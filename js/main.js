// var renderer = new THREE.WebGLRenderer();
// document.body.appendChild(renderer.domElement);
/* ******** RENDERER ******** */
//antialias: smooths out lines on graphics
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});

//Default color that the rendered scene renders background
renderer.setClearColor(0x00ff00);

//Use device's pixel aspect ratio if higher density display
renderer.setPixelRatio(window.devicePixelRatio);

//Set size of canvas element into document
renderer.setSize(window.innerWidth, window.innerHeight);

/* ******** CAMERA ******** */
//Tells perspective which to draw content. Things in distance get smaller as you get further away
//When things are too near or too far, will not re-render
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
// camera.position.set(0, 0, 0) = default position of camera

/* ******** SCENE ******** */
//Container object of whole world
var scene = new THREE.Scene();

/* ******** LIGHTS ******** */
//Can apply shading and light to adjust scene
//Creates ambient light that applies to entire scene. parameters: color, intensity
var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

//Point light which points to a specific point in the scene
var light1 = new THREE.PointLight(0xfffffff, 0.5);
scene.add(light1);

//Cube's size to create object
var geometry = new THREE.BoxGeometry(100, 100, 100);

// var material = new THREE.MeshBasicMaterial();
//When adding lights, need to use materials that respond to light
var material = new THREE.MeshLambertMaterial({color: 0xF3FFFE2});
var mesh = new THREE.Mesh(geometry, material);
//mesh default position is at 0, 0, 0 and camera is on top of the mesh
//so need to set the z-position of mesh to see it
mesh.position.set(0, 0, -1000);

scene.add(mesh);

requestAnimationFrame(render);

function render() {
  mesh.rotation.x += 0.1;
  mesh.rotation.y += 0.1;
  //Camera is placed in scene and renders to default background which is green
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
