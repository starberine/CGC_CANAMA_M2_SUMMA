const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
scene.add(camera);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 15;

const directionalLight = new THREE.DirectionalLight( "#FFFFFF ");
scene.add( directionalLight );

//walls
const geometry = new THREE.BoxGeometry( 1, 15.5,10 );
const material = new THREE.MeshBasicMaterial( {color: "#E3FFE5"} );
const wall = new THREE.Mesh( geometry, material );
scene.add(wall);

const geometry1 = new THREE.BoxGeometry( 1, 15.5, 10 );
const material1 = new THREE.MeshBasicMaterial( {color: "#E3FFE5"} );
const wall1 = new THREE.Mesh( geometry1, material1 );
scene.add(wall1);

//floor & ceiling
const geometry2 = new THREE.BoxGeometry( 1, 14, 43);
const material2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const ceiling = new THREE.Mesh( geometry2, material2 );
scene.add(ceiling);

const geometry3 = new THREE.BoxGeometry( 1, 14, 43 );
const material3 = new THREE.MeshStandardMaterial( {color: "#FDE3FF"} );
const floor = new THREE.Mesh( geometry3, material3 );
scene.add(floor);

function animate() {
    //wall
    wall.position.y = 0;
    wall.position.x = -20;
    wall1.position.z = -0.4;

    //wall1
    wall1.position.y = 0;
    wall1.position.x = 20.3;
    wall1.position.z = 0.1;

    //fceiling wall2
    ceiling.rotation.y = Math.PI /2;
    ceiling.rotation.x = Math.PI /2;

    ceiling.position.y = 8.9;
    ceiling.position.z = 0.4;

    //floor
    floor.rotation.y = Math.PI /2;
    floor.rotation.x = Math.PI /2;

    floor.position.y = -8.9;
    floor.position.z = 0.4;


    requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();