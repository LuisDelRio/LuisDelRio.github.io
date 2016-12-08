var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
var base3Forma = new THREE.CylinderGeometry(3,4,2,20,2,false);
var troncoForma = new THREE.CylinderGeometry(3,3,6,20,6,false);
var cubierta1Forma = new THREE.CylinderGeometry(4,3,2,20,2,false);
var cabezaForma = new THREE.CylinderGeometry(.25,5,5,20,2,false);

var arco3 = new THREE.Shape();
arco3.moveTo(0, 0);
arco3.arc(0, 0, 4, .52, -.52, true);
arco3.lineTo(3.46, -2);
var pico3 = new THREE.ExtrudeGeometry( arco3, {amount: 8, bevelEnabled: false});
pico3.rotateX(Math.PI/2);
pico3.rotateY(Math.PI);

base2Forma.translate(0,1,0);
base3Forma.translate(0,2,0);
troncoForma.translate(0,4,0);
cubierta1Forma.translate(0,8,0);
cabezaForma.rotateZ(-Math.PI/2);
cabezaForma.translate(0,12,0);
pico3.translate(0,15,0);

var base1Malla = new THREE.Mesh(base1Forma);
var base2Malla= new THREE.Mesh(base2Forma);
var base3Malla= new THREE.Mesh(base3Forma);
var toncoMalla= new THREE.Mesh(troncoForma);
var cubierta1Malla= new THREE.Mesh(cubierta1Forma);
var cabezaMalla= new THREE.Mesh(cabezaForma);
var pico3Malla= new THREE.Mesh(pico3);

var caballoForma = new THREE.Geometry();
caballoForma.merge(base1Malla.geometry, base1Malla.matrix);
caballoForma.merge(base2Malla.geometry, base2Malla.matrix);
caballoForma.merge(base3Malla.geometry, base3Malla.matrix);
caballoForma.merge(toncoMalla.geometry, toncoMalla.matrix);
caballoForma.merge(cubierta1Malla.geometry, cubierta1Malla.matrix);
caballoForma.merge(cabezaMalla.geometry, cabezaMalla.matrix);
caballoForma.merge(pico3Malla.geometry, pico3Malla.matrix);
var material= new THREE.MeshNormalMaterial();
var caballoMalla = new THREE.Mesh(caballoForma, material);

caballoMalla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add(caballoMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=50;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
