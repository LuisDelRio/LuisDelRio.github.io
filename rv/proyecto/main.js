function Agent( x=0, y=0){
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
 }
 
 Agent.prototype = new THREE.Object3D();
 
 Agent.prototype.sense = function(enviroment){};
 Agent.prototype.plan = function(enviroment){};
 Agent.prototype.act = function(enviroment){};
 
 function Enviroment(){
  THREE.Scene.call(this);
  }
 
 Enviroment.prototype = new THREE.Scene();
 
 Enviroment.prototype.sense = function(){
  for ( var i = 0; i < this.children.length; i++){
    if(this.children[i].sense !== undefined)
      this.children[i].sense(this);
     }
    }
 
Enviroment.prototype.plan = function(){
  for( var i = 0; i < this.children.length; i++){
    if(this.children[i].plan !== undefined)
      this.children[i].plan(this);
     }
    }

 Enviroment.prototype.act = function(){
  for ( var i = 0; i < this.children.length; i++){
    if(this.children[i].act !== undefined)
      this.children[i].act(this);
     }
    }
 
 function Sensor(position,direction){
  THREE.Raycaster.call(this, position, direction);
  this.colision=false;
}
Sensor.prototype= new THREE.Raycaster();

var TEXTURA = new Object();

function Torrem(material){
  //Torres
  var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
  var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
  var base3Forma = new THREE.CylinderGeometry(3,4,2,20,2,false);
  var troncoForma = new THREE.CylinderGeometry(3,3,6,20,6,false);
  var cubierta1Forma = new THREE.CylinderGeometry(4,3,2,20,2,false);
  var cubierta2Forma = new THREE.CylinderGeometry(4,4,2,20,3,false);

  var arco1 = new THREE.Shape();
  arco1.moveTo(0, 0);
  arco1.arc(0, 0, 4, .52, -.52, true);
  arco1.lineTo(3.46, -2);
  var pico1 = new THREE.ExtrudeGeometry( arco1, {amount: 1, bevelEnabled: false});
  pico1.rotateX(Math.PI/2);

  var arco2 = new THREE.Shape();
  arco2.moveTo(0, 0);
  arco2.arc(0, 0, 4, .52, -.52, true);
  arco2.lineTo(3.46, -2);
  var pico2 = new THREE.ExtrudeGeometry( arco2, {amount: 1, bevelEnabled: false});
  pico2.rotateX(Math.PI/2);
  pico2.rotateY(Math.PI/2);

  var arco3 = new THREE.Shape();
  arco3.moveTo(0, 0);
  arco3.arc(0, 0, 4, .52, -.52, true);
  arco3.lineTo(3.46, -2);
  var pico3 = new THREE.ExtrudeGeometry( arco3, {amount: 1, bevelEnabled: false});
  pico3.rotateX(Math.PI/2);
  pico3.rotateY(Math.PI);

  var arco4 = new THREE.Shape();
  arco4.moveTo(0, 0);
  arco4.arc(0, 0, 4, .52, -.52, true);
  arco4.lineTo(3.46, -2);
  var pico4 = new THREE.ExtrudeGeometry( arco4, {amount: 1, bevelEnabled: false});
  pico4.rotateX(Math.PI/2);
  pico4.rotateY(Math.PI*3/2);

  base2Forma.translate(0,1,0);
  base3Forma.translate(0,2,0);
  troncoForma.translate(0,4,0);
  cubierta1Forma.translate(0,8,0);
  cubierta2Forma.translate(0,10,0);
  pico1.translate(0,12,0);
  pico2.translate(0,12,0);
  pico3.translate(0,12,0);
  pico4.translate(0,12,0);
  
  var base1Malla = new THREE.Mesh(base1Forma);
  var base2Malla= new THREE.Mesh(base2Forma);
  var base3Malla= new THREE.Mesh(base3Forma);
  var toncoMalla= new THREE.Mesh(troncoForma);
  var cubierta1Malla= new THREE.Mesh(cubierta1Forma);
  var cubierta2Malla= new THREE.Mesh(cubierta2Forma);
  var pico1Malla= new THREE.Mesh(pico1);
  var pico2Malla= new THREE.Mesh(pico2);
  var pico3Malla= new THREE.Mesh(pico3);
  var pico4Malla= new THREE.Mesh(pico4);
  
  var torreForma = new THREE.Geometry();
  torreForma.merge(base1Malla.geometry, base1Malla.matrix);
  torreForma.merge(base2Malla.geometry, base2Malla.matrix);
  torreForma.merge(base3Malla.geometry, base3Malla.matrix);
  torreForma.merge(toncoMalla.geometry, toncoMalla.matrix);
  torreForma.merge(cubierta1Malla.geometry, cubierta1Malla.matrix);
  torreForma.merge(cubierta2Malla.geometry, cubierta2Malla.matrix);
  torreForma.merge(pico1Malla.geometry, pico1Malla.matrix);
  torreForma.merge(pico2Malla.geometry, pico2Malla.matrix);
  torreForma.merge(pico3Malla.geometry, pico3Malla.matrix);
  torreForma.merge(pico4Malla.geometry, pico4Malla.matrix);
  //var material= new THREE.MeshNormalMaterial();
  THREE.Mesh.call(this, torreForma, material);

}

function Alfilm(material){
  var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
  var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
  var troncoForma = new THREE.CylinderGeometry(1.5,3,12,12,12,false);
  var detalle1Forma = new THREE.CylinderGeometry(3.5,3.5,.5,20,.5,false);
  var detalle2Forma = new THREE.CylinderGeometry(2.5,2.5,.3,20,.3,false);
  var detalle3Forma = new THREE.CylinderGeometry(2.5,2.5,.3,20,.3,false);
  var cabeza1Forma = new THREE.SphereGeometry(2);
  var cabeza2Forma = new THREE.SphereGeometry(.5);

  base1Forma.translate(0,1,0);
  base2Forma.translate(0,2,0);
  troncoForma.translate(0,8,0);
  cabeza1Forma.translate(0,15,0);
  cabeza2Forma.translate(0,17,0);
  detalle1Forma.translate(0,11,0);
  detalle2Forma.translate(0,10.7,0);
  detalle3Forma.translate(0,11.5,0);

  var base1Malla = new THREE.Mesh(base1Forma);
  var base2Malla= new THREE.Mesh(base2Forma);
  var troncoMalla= new THREE.Mesh(troncoForma);
  var cabeza1Malla= new THREE.Mesh(cabeza1Forma);
  var cabeza2Malla= new THREE.Mesh(cabeza2Forma);
  var detalle1Malla= new THREE.Mesh(detalle1Forma);
  var detalle2Malla= new THREE.Mesh(detalle2Forma);
  var detalle3Malla= new THREE.Mesh(detalle3Forma);

  var alfilForma = new THREE.Geometry();
  alfilForma.merge(base1Malla.geometry, base1Malla.matrix);
  alfilForma.merge(base2Malla.geometry, base2Malla.matrix);
  alfilForma.merge(troncoMalla.geometry, troncoMalla.matrix);
  alfilForma.merge(cabeza1Malla.geometry, cabeza1Malla.matrix);
  alfilForma.merge(cabeza2Malla.geometry, cabeza2Malla.matrix);
  alfilForma.merge(detalle1Malla.geometry, detalle1Malla.matrix);
  alfilForma.merge(detalle2Malla.geometry, detalle2Malla.matrix);
  alfilForma.merge(detalle3Malla.geometry, detalle3Malla.matrix);
  //var material= new THREE.MeshNormalMaterial();
  THREE.Mesh.call(this, alfilForma, material);
}

function Peonm(material){
  var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
  var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
  var troncoForma = new THREE.CylinderGeometry(1.5,3,7,7,7,false);
  var cabezaForma = new THREE.SphereGeometry(2);

  base2Forma.translate(0,1,0);
  troncoForma.translate(0,5,0);
  cabezaForma.translate(0,9.5,0);

  var base1Malla = new THREE.Mesh(base1Forma);
  var base2Malla= new THREE.Mesh(base2Forma);
  var troncoMalla= new THREE.Mesh(troncoForma);
  var cabezaMalla= new THREE.Mesh(cabezaForma);

  var peonForma = new THREE.Geometry();
  peonForma.merge(base1Malla.geometry, base1Malla.matrix);
  peonForma.merge(base2Malla.geometry, base2Malla.matrix);
  peonForma.merge(troncoMalla.geometry, troncoMalla.matrix);
  peonForma.merge(cabezaMalla.geometry, cabezaMalla.matrix);
  THREE.Mesh.call(this, peonForma, material);
}

function Seleccionadorm(material){
  var base1selec = new THREE.CylinderGeometry(2,2,6,6,6,false);
  var base2selec = new THREE.CylinderGeometry(4,0,4,4,4,false);
  base2selec.translate(0,-4,0);
  var base1selec = new THREE.Mesh(base1selec);
  var base2selec= new THREE.Mesh(base2selec);
  var seleccionadorForma = new THREE.Geometry();
  seleccionadorForma.merge(base1selec.geometry, base1selec.matrix);
  seleccionadorForma.merge(base2selec.geometry, base2selec.matrix);
  THREE.Mesh.call(this, seleccionadorForma, material);
}

function Tablero(material1, material2){
var cubo= new Array();
  var a=2;
  for(var k=0; k<64; k++){
    for(var i=0; i<8; i++){
      for(var j=0; j<8; j++){
        if(a==2){
          cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 4), material1 );
          a=1;
        }else{
          cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 4), material2 );
          a=2;
        }
       cubo[k].position.x=j*10;
       cubo[k].position.y=i*10;
       this.add(cubo[k]);
       cubo[k].receiveShadow=true;
     }
     if(a==2){
          a=1;
        }else{
          a=2;
        }
    }
  }
}

Tablero.prototype = new THREE.Object3D();
Torrem.prototype = new THREE.Mesh();
Alfilm.prototype = new THREE.Mesh();
Peonm.prototype = new THREE.Mesh();
Seleccionadorm.prototype = new THREE.Mesh();

function Seleccionador(material, x, y){
  Agent.call(this,x,y);
  this.der=0;
  this.izq=0;
  this.aba=0;
  this.arr=0;
  this.sensor= new Sensor();
  this.actuator = new Seleccionadorm(material);
  this.add(this.actuator);
}
Seleccionador.prototype = new Agent();

function Torre(material1, x, y){
  Agent.call(this,x,y);
  this.der=0;
  this.izq=0;
  this.aba=0;
  this.arr=0;
  this.sensor= new Sensor();
  this.actuator = new Torrem(material1);
  this.add(this.actuator);
}

Torre.prototype = new Agent();

Torre.prototype.sense = function(enviroment){
  this.sensor.set( this.position, new THREE.Vector3(Math.cos(this.rotation.y),Math.sin(this.rotation.y),0));
  var obstaculo = this.sensor.intersectObjects(enviroment.children,true);
  this.selec=0;
  this.banderaX=0;
  this.banderaZ=0;
  if((obstaculo.length>0 && (obstaculo[0].distance <=60)))
  this.sensor.colision=true;
  else
  this.sensor.colision = false;
}

Torre.prototype.plan = function(enviroment){
}

Torre.prototype.act = function(enviroment){
}


function Alfil(material1,material2, x, y){
}

Alfil.prototype = new Agent();

Alfil.prototype.sense = function(enviroment){
}

Alfil.prototype.plan = function(enviroment){
}

Alfil.prototype.act = function(enviroment){
}


TEXTURA.retrollamada = function( textura ){
  TEXTURA.marnolblanco = new THREE.MeshBasicMaterial( {map: textura} );
}

TEXTURA.retrollamada1 = function( textura ){
 TEXTURA.marnolcafe = new THREE.MeshBasicMaterial( {map: textura} );
}

TEXTURA.retrollamada2 = function( textura ){
 TEXTURA.marnolnegro = new THREE.MeshBasicMaterial( {map: textura} );
}

TEXTURA.retrollamada3 = function( textura ){
 TEXTURA.ceramicablanca = new THREE.MeshBasicMaterial( {map: textura} );
}

TEXTURA.retrollamada4 = function( textura ){
 TEXTURA.ceramicanegra = new THREE.MeshBasicMaterial( {map: textura} );
}

var renderizador;

TEXTURA.setup = function() {
  TEXTURA.entorno = new Enviroment();
  TEXTURA.matrojo = new THREE.MeshBasicMaterial({color: 0xB40100});
  var cargador = new THREE.TextureLoader();
  cargador.load("marnol_blanco.jpg",TEXTURA.retrollamada);
  var cargador1 = new THREE.TextureLoader();
  cargador1.load("marnol_cafe.jpg",TEXTURA.retrollamada1);
  var cargador2 = new THREE.TextureLoader();
  cargador2.load("marnol_negro.jpg",TEXTURA.retrollamada2);
  var cargador3 = new THREE.TextureLoader();
  cargador3.load("ceramica_blanca.jpg",TEXTURA.retrollamada3);
  var cargador4 = new THREE.TextureLoader();
  cargador4.load("ceramica_negra.jpg",TEXTURA.retrollamada4);
}

TEXTURA.setup2 = function(){
	setupDone = true;
	
  TEXTURA.torreb1 = new Torre( TEXTURA.ceramicablanca);
  TEXTURA.torreb1.rotateX(Math.PI/2);
  TEXTURA.torreb1.translateY(3);	
  TEXTURA.entorno.add(TEXTURA.torreb1);

  TEXTURA.alfilb1 = new Alfil( TEXTURA.ceramicablanca);
  TEXTURA.alfilb1.rotateX(Math.PI/2);
  TEXTURA.alfilb1.translateY(3);
  TEXTURA.alfilb1.translateX(20);
  TEXTURA.entorno.add(TEXTURA.alfilb1);
	
  TEXTURA.seleccionador = new Seleccionador( TEXTURA.matrojo);
  TEXTURA.seleccionador.translateY(30);	
  TEXTURA.entorno.add(TEXTURA.seleccionador);
	
  TEXTURA.tablero= new Tablero(TEXTURA.marnolblanco, TEXTURA.marnolnegro);
  TEXTURA.entorno.add(TEXTURA.tablero);
	
  TEXTURA.camara = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  TEXTURA.camara.position.z=50;
  TEXTURA.camara.position.x=160;
  TEXTURA.camara.position.y=40;
  TEXTURA.camara.lookAt(new THREE.Vector3(40,40,0));
  TEXTURA.camara.rotateZ(Math.PI/2);
	
  TEXTURA.renderizador = new THREE.WebGLRenderer();
  TEXTURA.renderizador.setSize(window.innerWidth-100, window.innerHeight-100);
  document.body.appendChild(TEXTURA.renderizador.domElement);
}

var setupDone = false;

TEXTURA.loop = function(){
  requestAnimationFrame( TEXTURA.loop );
	if(TEXTURA.matrojo !== undefined && TEXTURA.marnolblanco !== undefined && TEXTURA.marnolnegro !== undefined && setupDone == false && TEXTURA.ceramicablanca !== undefined && TEXTURA.ceramicanegra !== undefined)
	{
		TEXTURA.setup2();
    		TEXTURA.renderizador.render( TEXTURA.escena, TEXTURA.camara );
	}
	
  TEXTURA.entorno.plan();
  TEXTURA.entorno.act();
  TEXTURA.renderizador.render( TEXTURA.entorno, TEXTURA.camara );
    
   
 }

 TEXTURA.setup();
 TEXTURA.loop();
