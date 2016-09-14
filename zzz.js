var campoVision = 45;
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;
var camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.z=25;
camara.position.x=120;
camara.position.y=-40;
//camara.rotateY(1.365);
//camara.rotateX(Math.PI/4);
camara.lookAt(new THREE.Vector3(40,40,0));
camara.rotateZ(-Math.PI/2);


var escena = new THREE.Scene();
var cubo= new Array();
var a=2;
for(var k=0; k<64; k++){
  for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
      if(a==2){
        cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 2), new THREE.MeshBasicMaterial({color: 0xffffff}) );
        a=1;
      }else{
        cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 2), new THREE.MeshBasicMaterial({color: 0x999999}) );
        a=2;
      }
     cubo[k].position.x=j*10;
     cubo[k].position.y=i*10;
     escena.add(cubo[k]);
   }
   if(a==2){
        a=1;
      }else{
        a=2;
      }
  }
}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
