import * as THREE from "three";

let camera, scene, renderer;
let geometry, material, line;
const points = [];

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth/ window.innerHeight, 1, 100);
    camera.position.set( 0, 0, 100 );
    camera.lookAt( 0, 0, 0 );

    scene = new THREE.Scene();

    points.push( new THREE.Vector3( - 10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 10, 0 ) );
    points.push( new THREE.Vector3( 10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, -10, 0 ) );
    points.push( new THREE.Vector3( -10, 0, 0 ) );

    geometry = new THREE.BufferGeometry().setFromPoints( points );

    //create a blue LineBasicMaterial
    material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

    line = new THREE.Line( geometry, material );

    scene.add( line );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
}

function animate() {

    requestAnimationFrame( animate );

    renderer.render( scene, camera );

}
