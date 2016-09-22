function init (p){
  var camara = new THREE.PerspectiveCamera();
  camara.position.z=5*p;
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
