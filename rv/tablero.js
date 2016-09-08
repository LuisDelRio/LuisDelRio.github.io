var campoVision = 100;
var relacionAspecto = window.innerWidth / window.innerWidth;
var planoCercano = 100;
var planoLejano = 100;
var camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.z=50;

for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++){
    var cubo = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 10), new THREE.MeshNormalMaterial() );
    cubo[i,j].rotateX(Math.PI/4);
    cubo[i,j].position.x=i+10;
  }
  cubo[i,j].position.y=j+10;
}

var esfera1 = new THREE.Mesh( new THREE.SphereGeometry(1), new THREE.MeshNormalMaterial() );
esfera1.position.x=5;
var esfera2= new THREE.Mesh( new THREE.SphereGeometry(1), new THREE.MeshNormalMaterial());
esfera2.position.x=-5;
esfera2.position.z=-10;

var escena = new THREE.Scene();
escena.add(esfera1);
escena.add(esfera2);
escena.add(cubo);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
