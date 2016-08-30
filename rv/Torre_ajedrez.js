var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
base2Forma.translate(0,1,0);
var base1Malla = new THREE.Mesh(base1Forma);
var base2Malla= new THREE.Mesh(base2Forma);

var torreForma = new THREE.Geometry();
torreForma.merge(base1Malla.geometry, base1Malla.matrix);
torreForma.merge(base2Malla.geometry, base2Malla.matrix);
var material= new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);

var escena = new THREE.Scene();
escena.add(torreMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=100;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
