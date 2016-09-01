var arco = new THREE.Shape();
arco.arc(3.75,1.36, 4, 20,-20);
arco.lineTo(3.75,-1.36);
var pico1 = new THREE.ExtrudeGeometry( arco, {amount: 5} );

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( pico1, material );
malla.rotateX( Math.PI/4 );

var escena = new THREE.Scene();
escena.add(malla);
var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
