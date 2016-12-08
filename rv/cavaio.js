var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
var base3Forma = new THREE.CylinderGeometry(3,4,2,20,2,false);
var troncoForma = new THREE.CylinderGeometry(3,3,6,20,6,false);
var cubierta1Forma = new THREE.CylinderGeometry(4,3,2,20,2,false);
var cubierta2Forma = new THREE.CylinderGeometry(4,4,2,20,3,false);
//var cabezaForma = new THREE.CylinderGeometry(.2,3,10,10);

var arco1 = new THREE.Shape();
arco1.moveTo(0, 0);
arco1.arc(0, 0, 4, .52, -.52, true);
arco1.lineTo(3.46, -2);
var pico1 = new THREE.ExtrudeGeometry( arco1, {amount: 5, bevelEnabled: false});
pico1.rotateX(Math.PI/2);

base2Forma.translate(0,1,0);
base3Forma.translate(0,2,0);
troncoForma.translate(0,4,0);
cubierta1Forma.translate(0,8,0);
cubierta2Forma.translate(0,10,0);
pico1.translate(0,12,0);
//cabezaForma.rotateZ(-Math.PI/2);
//cabezaForma.translate(0,12,0);
//cabezaForma.rotateZ(Math.PI/4);

var base1Malla = new THREE.Mesh(base1Forma);
var base2Malla= new THREE.Mesh(base2Forma);
var base3Malla= new THREE.Mesh(base3Forma);
var toncoMalla= new THREE.Mesh(troncoForma);
var cubierta1Malla= new THREE.Mesh(cubierta1Forma);
var cubierta2Malla= new THREE.Mesh(cubierta2Forma);
var picoMalla= new THREE.Mesh(cubierta2Forma);
//var cabezaMalla = new THREE.Mesh(cabezaForma);

var caballoForma = new THREE.Geometry();
caballoForma.merge(base1Malla.geometry, base1Malla.matrix);
caballoForma.merge(base2Malla.geometry, base2Malla.matrix);
caballoForma.merge(base3Malla.geometry, base3Malla.matrix);
caballoForma.merge(toncoMalla.geometry, toncoMalla.matrix);
caballoForma.merge(cubierta1Malla.geometry, cubierta1Malla.matrix);
caballoForma.merge(cubierta2Malla.geometry, cubierta2Malla.matrix);
caballoForma.merge(picoMalla.geometry, picoMalla.matrix);
//caballoForma.merge(cabezaMalla.geometry, cabezaMalla.matrix);

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
