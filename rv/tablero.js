var campoVision = 45;
var relacionAspecto = window.innerWidth / window.innerWidth;
var planoCercano = 1;
var planoLejano = 1000;
var camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.z=15;

var escena = new THREE.Scene();
var cubo = new Array();

for (var k = 0; k < 64; k++) {    
  if (k%2==0) {
    cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 2), new THREE.MeshBasicMaterial({color: 0xFFFFFF}) );
  }else{
    cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 2), new THREE.MeshBasicMaterial({color: 0x888888}) );
  }
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++){
      cubo[k].rotateX(Math.PI/4);
      cubo[k].position.x=i*10;
      cubo[k].position.y=j*10;
      
    }
  }
  escena.add(cubo[k]);
}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
