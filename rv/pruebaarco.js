var figura = new THREE.Shape();

figura.moveTo(0, 0);
figura.arc(3.75, 1.36, 4, 20, -20);
figura.lineTo(3.75, -1.36);

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);

var escena = new THREE.Scene();
escena.add(malla);
var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
