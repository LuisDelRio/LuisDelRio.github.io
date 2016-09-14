var campoVision = 45;
var relacionAspecto = window.innerWidth / window.innerWidth;
var planoCercano = 1;
var planoLejano = 1000;
var camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.z=50;

var cubo = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 2), new THREE.MeshNormalMaterial({color: 0xffffff}) );
cubo.rotateY(Math.PI/4);
var cubo1 = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 2), new THREE.MeshNormalMaterial({color: 0x888888}) );
cubo1.position.x=20;
var cubo2= new THREE.Mesh(new THREE.BoxGeometry(10, 10, 2), new THREE.MeshNormalMaterial({color: '#00cc00'}));
cubo2.position.x=-10;
cubo2.position.z=-10;

var escena = new THREE.Scene();
escena.add(cubo1);
escena.add(cubo2);
escena.add(cubo);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
