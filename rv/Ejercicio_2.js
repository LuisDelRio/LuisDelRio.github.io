var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

var cyl_width = 1;
var cyl_height = 5;
var forma = new THREE.CylinderGeometry(cyl_width, cyl_width, cyl_height, 20, 1, false);

var material = new THREE.MeshNormalMaterial();
var cilindro = new THREE.Mesh( forma, material);
cilindro.rotateX(-Math.PI/4);
cilindro.rotateY(Math.PI/4);
escena.add(cilindro);
renderizador.render( escena, camara);
