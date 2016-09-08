var campoVision = 100;
var relacionAspecto = window.innerWidth / window.innerWidth;
var planoCercano = 100;
var planoLejano = 100;
var camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.z=50;

var cubo = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", 
                     "c11", "c12", "c13", "c14", "c15", "c16", "c17", "c18", "c19", "c20",
                     "c21", "c22", "c23", "c24", "c25", "c26", "c27", "c28", "c29", "c30",
                     "c31", "c32", "c33", "c34", "c35", "c36", "c37", "c38", "c39", "c40",
                     "c41", "c42", "c43", "c44", "c45", "c46", "c47", "c48", "c49", "c50", 
                     "c51", "c52", "c53", "c54", "c55", "c56", "c57", "c58", "c59", "c60",
                     "c61", "c62", "c63", "c64"];
for (k = 0; k < 64; k++) {    
  if (k%2==0) {
    var cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 10), new THREE.MeshBasicMaterial(0xFFFFFF) );
  }else{
    var cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 10), new THREE.MeshBasicMaterial(0x888888) );
  }
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++){
      cubo[k].rotateX(Math.PI/4);
      cubo[k].position.x=i*10;
      cubo[k].position.y=j*10;
    }
  }
}


var escena = new THREE.Scene();
escena.add(cubo);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
