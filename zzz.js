var campoVision = 45;
var relacionAspecto = window.innerWidth / window.innerWidth;
var planoCercano = 1;
var planoLejano = 1000;
var camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.z=100;

var escena = new THREE.Scene();
var cubo= new Array();
for(var i=0; i<3; i++){
cubo[i] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 2), new THREE.MeshNormalMaterial({color: 0xffffff}) );
cubo[i].rotateY(Math.PI/4);
cubo[i].rotateX(Math.PI/4);
cubo[i].position.x=i*10;
escena.add(cubo[i]);
}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
