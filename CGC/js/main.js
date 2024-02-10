
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const ambientLight = new THREE.AmbientLight("#FBFCD6"); // Choose a color for ambient light
ambientLight.intensity = 0.5;
scene.add(ambientLight);
//Create a DirectionalLight and turn on shadows for the light
const light = new THREE.DirectionalLight( '#FFFFFF');
light.position.set( 0, 10, 5 ); //default; light shining from top
light.castShadow = true; // default false

//Set up shadow properties for the light
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 200; // default
scene.add( light );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

camera.position.z = 15;

//walls
const geometry = new THREE.BoxGeometry( 1, 15.5,10 );
const material = new THREE.MeshStandardMaterial( {color: "#FFDBD2"} );
const wall = new THREE.Mesh( geometry, material );
wall.position.y = 0;
wall.position.x = -20.3;
wall.position.z = 0.1;
wall.receiveShadow = true;
scene.add(wall);

const geometry1 = new THREE.BoxGeometry( 1, 15.5, 10 );
const material1 = new THREE.MeshStandardMaterial( {color: "#FFDBD2"} );
const wall1 = new THREE.Mesh( geometry1, material1 );
wall1.position.y = 0;
wall1.position.x = 20.3;
wall1.position.z = 0.1;
wall1.receiveShadow = true;
scene.add(wall1);

const geometry4 = new THREE.BoxGeometry( 43, 1, 15.7 );
const material4 = new THREE.MeshStandardMaterial( {color: "#C6A59D"} );
const wall2 = new THREE.Mesh( geometry4, material4 );
wall2.rotation.x = Math.PI/2;
wall2.position.z = -5.7;
wall2.position.y = 0;
wall2.receiveShadow = true;
scene.add(wall2);

//floor & ceiling
const geometry2 = new THREE.BoxGeometry( 1, 14, 43);
const material2 = new THREE.MeshStandardMaterial( {color: "#DFB4AA"} );
const ceiling = new THREE.Mesh( geometry2, material2 );
ceiling.rotation.y = Math.PI /2;
ceiling.rotation.x = Math.PI /2;

ceiling.position.y = 8.9;
ceiling.position.z = 0.4;

scene.add(ceiling);

const geometry3 = new THREE.BoxGeometry( 1, 14, 43 );
const material3 = new THREE.MeshStandardMaterial( {color: "#EADED9"} );
const floor = new THREE.Mesh( geometry3, material3 );
floor.rotation.y = Math.PI /2;
floor.rotation.x = Math.PI /2;

floor.position.y = -8.9;
floor.position.z = 0.4;

scene.add(floor);

//table?
const geometry5 = new THREE.BoxGeometry(6,0.5,12);
const material5 = new THREE.MeshStandardMaterial({color: "#F3849B"});
const table1 = new THREE.Mesh(geometry5, material5);
table1.position.x = -18;
table1.position.y = -4.6;
table1.position.z = -5;
table1.castShadow = true;
scene.add(table1);

    //sidetable 1
const geometry6 = new THREE.BoxGeometry(4.5,0.5,3.2);
const material6 = new THREE.MeshStandardMaterial({color: "#F6B3C1"});
const sidetable = new THREE.Mesh(geometry6, material6);
    sidetable.position.x = -17.3;
    sidetable.position.y = -6.3;
    sidetable.position.z = -5;

    sidetable.rotation.x = Math.PI/2;
    sidetable.castShadow = true;
    scene.add(sidetable);

    //sidetable 2
    const geometry7 = new THREE.BoxGeometry(4.5,0.5,3.2);
    const material7 = new THREE.MeshStandardMaterial({color: "#F6B3C1"});
    const sidetable2 = new THREE.Mesh(geometry7, material7);
    sidetable2.position.x = -17.5;
    sidetable2.position.y = -6.5;
    sidetable2.position.z = 0.6;

    sidetable2.rotation.x = Math.PI/2;
    sidetable2.castShadow = true;
    scene.add(sidetable2);

//bed
const geometry8 = new THREE.BoxGeometry(3,2,9);
const material8 = new THREE.MeshStandardMaterial({color: "#B8CEDD"});
const bed = new THREE.Mesh(geometry8, material8);
bed.position.x = 13;
bed.position.y = -6.5;
bed.position.z = -3;

bed.rotation.y = Math.PI /2;
scene.add(bed);

const geometry9 = new THREE.BoxGeometry(4,0.5,12);
const material9 = new THREE.MeshStandardMaterial({color: "#716053"});
const bedframe = new THREE.Mesh(geometry9, material9);
bedframe.position.x = 14;
bedframe.position.y = -7.5;
bedframe.position.z = -3;
bedframe.rotation.y = Math.PI/2;

scene.add(bedframe);

const geometry10 = new THREE.BoxGeometry(3,2,3);
const material10 = new THREE.MeshStandardMaterial({color: "#FFF2E7"});
const pillow = new THREE.Mesh(geometry10, material10);
pillow.position.x = 19;
pillow.position.y = -6.5;
pillow.position.z = -3;

pillow.rotation.y = Math.PI /2;

scene.add(pillow);


// light source
const pointLight = new THREE.PointLight("#FBFCD6", 1, 10);
pointLight.position.set(0, 9, -1);
pointLight.castShadow = true;

const geometry11 = new THREE.CylinderGeometry(3, 3, 2, 32);
const material11 = new THREE.MeshStandardMaterial({
  color: "#FBFCD6",
  emissive: "#FBFCD6",
  side: THREE.DoubleSide
});
const cylinder = new THREE.Mesh(geometry11, material11);

cylinder.receiveShadow = false;
cylinder.add(pointLight);

cylinder.position.y = 9;
cylinder.position.z = -1;

scene.add(cylinder);

//poster
const geometry12 = new THREE.PlaneGeometry(9,5);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('txt.jpg');
const material12 = new THREE.MeshStandardMaterial({map: texture});
const poster = new THREE.Mesh(geometry12,material12);

poster.position.z = 0;
poster.position.x = -19;
poster.position.y = 3;

poster.rotation.y = 8;

scene.add(poster);

//chair
const geometry13 = new THREE.BoxGeometry(3,0.5,3);
const material13 = new THREE.MeshStandardMaterial({color: "#F3849B"});
const chair = new THREE.Mesh(geometry13, material13);
chair.position.x = -15;
chair.position.y = -6;
chair.position.z = -2;
chair.castShadow = true;
chair.receiveShadow = true;
scene.add(chair);

//chair legs
const geometry14 = new THREE.BoxGeometry(0.5,0.5,6);
const material14 = new THREE.MeshStandardMaterial({color: "#F6B3C1"});
const leg1 = new THREE.Mesh(geometry14, material14);
    leg1.position.x = -13.1;
    leg1.position.y = -7;
    leg1.position.z = -3;

    leg1.rotation.x = Math.PI/2;
    leg1.castShadow = true;
    scene.add(leg1);

    //sidetable 2
    const geometry15 = new THREE.BoxGeometry(0.5,0.5,6);
    const material15 = new THREE.MeshStandardMaterial({color: "#F6B3C1"});
    const leg2 = new THREE.Mesh(geometry15, material15);
    leg2.position.x = -13.1;
    leg2.position.y = -7;
    leg2.position.z = -0.5;
    leg2.rotation.x = Math.PI/2;
    leg2.castShadow = true;
    scene.add(leg2);

    const geometry16 = new THREE.BoxGeometry(0.5,0.5,2.5);
    const material16 = new THREE.MeshStandardMaterial({color: "#F6B3C1"});
    const leg3 = new THREE.Mesh(geometry16, material16);
    leg3.position.x = -16;
    leg3.position.y = -7.5;
    leg3.position.z = -0.8;
    leg3.rotation.x = Math.PI/2;
    leg3.castShadow = true;
    scene.add(leg3);

    const geometry17 = new THREE.BoxGeometry(0.5,0.5,2.5);
    const material17 = new THREE.MeshStandardMaterial({color: "#F6B3C1"});
    const leg4 = new THREE.Mesh(geometry17, material17);
    leg4.position.x = -16;
    leg4.position.y = -7.5;
    leg4.position.z = -3;
    leg4.rotation.x = Math.PI/2;
    leg4.castShadow = true;
    scene.add(leg4);

    //backplate- chair
    const geometry18 = new THREE.BoxGeometry(3,0.5,2);
const material18 = new THREE.MeshStandardMaterial({color: "#F3849B"});
const chair2 = new THREE.Mesh(geometry18, material18);
chair2.position.x = -13.5;
chair2.position.y = -4;
chair2.position.z = -2;
chair2.rotation.x= Math.PI/2;
chair2.rotation.z= Math.PI/2;
chair2.castShadow = true;
chair2.receiveShadow = true;
scene.add(chair2);

// window
const textureLoader1 = new THREE.TextureLoader();
const texture1 = textureLoader.load('windowsbg.jpg');
const material19 = new THREE.MeshStandardMaterial({map: texture1});
const geometry19 = new THREE.PlaneGeometry(15, 8, 8);

const window1 = new THREE.Mesh(geometry19, material19);
scene.add(window1);

window1.castShadow = true;
window1.position.z = -5;

//windowsill
const geometry20 = new THREE.BoxGeometry(15,0.5,0.5);
const material20 = new THREE.MeshStandardMaterial({color:"#958E88"});
const sill = new THREE.Mesh(geometry20, material20);
scene.add(sill);
sill.castShadow = true;
sill.receiveShadow = true;

sill.position.x = 0;
sill.position.y = -4;
sill.position.z = -5;

//windowframe
const framegeo = new THREE.BoxGeometry(8,0.5,0.5);
const framematerial = new THREE.MeshStandardMaterial({color:"#958E88"});
const frame = new THREE.Mesh(framegeo, framematerial);
scene.add(frame);
frame.castShadow = true;
frame.receiveShadow = true;

frame.rotation.z = Math.PI/2;
frame.position.x = -7.29;
frame.position.y = 0;
frame.position.z = -5;

const framegeo1 = new THREE.BoxGeometry(8,0.5,0.5);
const framematerial1 = new THREE.MeshStandardMaterial({color:"#958E88"});
const frame1 = new THREE.Mesh(framegeo1, framematerial1);
scene.add(frame1);
frame1.castShadow = true;
frame1.receiveShadow = true;

frame1.rotation.z = Math.PI/2;
frame1.position.x = 7.29;
frame1.position.y = 0;
frame1.position.z = -5;

const framegeo2 = new THREE.BoxGeometry(15,0.5,0.5);
const framematerial2 = new THREE.MeshStandardMaterial({color:"#958E88"});
const sill2 = new THREE.Mesh(framegeo2, framematerial2);
scene.add(sill2);
sill2.castShadow = true;
sill2.receiveShadow = true;

sill2.position.x = 0;
sill2.position.y = 4;
sill2.position.z = -5;
//sphere
const geometry21 = new THREE.SphereGeometry(1, 32, 16);
const material21 = new THREE.MeshStandardMaterial({
  color: 0xffff00,
  emissive: "#F9E3D1",
  emissiveIntensity: 1000,
});
const sphere = new THREE.Mesh(geometry21, material21);
scene.add(sphere);
sphere.castShadow = true;
sphere.position.set(0, 6, 0);

// Add a point light to simulate illumination from the sphere
const pointLight1 = new THREE.PointLight(0xffff00, 1, 10);
pointLight1.position.copy(sphere.position);
scene.add(pointLight1);

//Monitor
const geometry22 = new THREE.BoxGeometry(3,0.2,2.5);
const material22 = new THREE.MeshStandardMaterial({color: "#4F4C49"});
const monitor = new THREE.Mesh(geometry22, material22);
monitor.position.x = -19;
monitor.position.y = -2.5;
monitor.position.z = -2;
monitor.rotation.x= Math.PI/2;
monitor.rotation.z= Math.PI/2;
monitor.castShadow = true;
monitor.receiveShadow = true;
scene.add(monitor);

//keyboard
const geometry23 = new THREE.BoxGeometry(2,0.2,1);
const material23 = new THREE.MeshStandardMaterial({color: "#4F4C49"});
const keeb = new THREE.Mesh(geometry23, material23);
keeb.position.x = -16.5;
keeb.position.y = -4;
keeb.position.z = -1;
keeb.rotation.y= Math.PI/2;
keeb.castShadow = true;
keeb.receiveShadow = true;
scene.add(keeb);

//monitor base
const geometry24 = new THREE.CylinderGeometry( 0.5, 1, 1, 32); 
const material24 = new THREE.MeshStandardMaterial( {color: "#4F4C49"} );
const cone = new THREE.Mesh(geometry24, material24 ); 
cone.position.x = -19.5;
cone.position.y = -4;
cone.position.z = -2;
cone.castShadow = true;
scene.add( cone );

const geometry25 = new THREE.CapsuleGeometry( 1.5, 1.5, 4, 8 ); 
const material25 = new THREE.MeshStandardMaterial( {color: "#ECFFFE"} ); 
const capsule = new THREE.Mesh( geometry25, material25 ); 
capsule.receiveShadow = true;
capsule.castShadow = true;
capsule.position.x = 19;
capsule.position.y = -8;
scene.add( capsule );

function animate() {
    sphere.rotation.y += 0.1;
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();