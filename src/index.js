import * as THREE from "three";

let camera, scene, renderer;
let geometry, material, cubes = [];

init();
animate();
window.addEventListener( 'resize', onWindowResize );

function init() {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 5;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
    material = new THREE.MeshNormalMaterial();
    cubes.push(createCube(geometry, material, 2), createCube(geometry, material, 0), createCube(geometry, material, -2));


    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
}

function animate() {
    requestAnimationFrame( animate );
    cubes.forEach((item, i) => {
        item.rotation.x += 0.01 * i+0.01;
        item.rotation.y += 0.02 * i+0.01
    });

    renderer.render( scene, camera );
}

function createCube (geometry, material, x) {
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    cube.position.x = x;

    return cube;
}

function onWindowResize() {
    // set the aspect ratio to match the new browser window aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;


    // update the camera's frustum
    camera.updateProjectionMatrix();

    // update the size of the renderer AND the canvas
    renderer.setSize( window.innerWidth, window.innerHeight );
}