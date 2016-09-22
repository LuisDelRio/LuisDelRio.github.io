function init (p){
  malla = new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial());
  escena = new THREE.Scene();
  escena.add(malla);
  camara = new THREE.PerspectiveCamera();
  camara.position.z=50;
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700,700);
  document.body.appendChild(renderizador.domElement);
  }
  
  var loop = function(p){
    a=a+1;
    requestAnimationFrame(loop);
    renderizador.render(escena, camara);
    malla.position.x=0.01;
    if(a==100){
      requestAnimationFrame(loop);
    renderizador.render(escena, camara);
    malla.position.x=-0.01;
    }
  }

var escena, camara, renderizador, malla;
var a=0;
init(1);
loop();
