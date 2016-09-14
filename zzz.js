var campoVision = 45;
var relacionAspecto = window.innerWidth / window.innerWidth;
var planoCercano = 1;
var planoLejano = 1000;
var camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.z=50;

var cubo= new Array();
var cubo[0] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 2), new THREE.MeshNormalMaterial({color: 0xffffff}) );
cubo[0].rotateY(Math.PI/4);
var cubo[1] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 2), new THREE.MeshNormalMaterial({color: 0x888888}) );
cubo[1].position.x=20;
var cubo[2]= new THREE.Mesh(new THREE.BoxGeometry(10, 10, 2), new THREE.MeshNormalMaterial({color: '#00cc00'}));
cubo[2].position.x=-10;
cubo[2].position.y=-10;

var escena = new THREE.Scene();
escena.add(cubo[1]);
escena.add(cubo[2]);
escena.add(cubo[0]);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
