var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

var forma = new THREE.CylinderGeometry(1, 1, 5, 10, 1, false);

var material = new THREE.MeshNormalMaterial();
var cilindro = new THREE.Mesh( forma, material);
escena.add(cilindro);
renderizador.render( escena, camara);
