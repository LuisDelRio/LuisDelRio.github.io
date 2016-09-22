function init (p){
  var campoVision = 45;
  var relacionAspecto = window.innerWidth / window.innerWidth;
  var planoCercano = 1;
  var planoLejano = 1000;
  var camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
  camara.position.z=5;
  var malla = new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial());
  escena = new THREE.Scene();
  escena.add(malla);
  camara = new THREE.PerspectiveCamera();
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700,700);
  document.body.appendChild(renderizador.domElement);
  }
  
  var main = function(p){
    renderizador.render(escena, camara);
  }

var escena, camara, renderizador;
init(1);
main(2);
