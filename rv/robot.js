function Agent(x=0,y=0){
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
}

Agent.prototype = new THREE.Object3D();

//Las tres primitivas esenciales de un agente:
Agent.prototype.sense = function(environment) {}; //Percibir
Agent.prototype.plan = function(environment) {}; //Planificar
Agent.prototype.act = function(environment) {}; //Actuar

//Un Agente opera sobre un entorno
function Environment(){
  THREE.Scene.call(this);
}

Environment.prototype = new THREE.Scene();

//Preguntar a todos los agentes si sienten
Environment.prototype.sense = function(){ 
  for(var i=0; i<this.children.length; i++){
    if(this.children[i].sense!==undefined)
      this.children[i].sense(this);
  }
}

//Preguntar a todos los agentes si planean
Environment.prototype.plan = function(){
  for(var i=0; i<this.children.length; i++){
    if(this.children[i].plan !== undefined)
      this.children[i].plan(this);
  }
}

//Preguntar a todos los agentes si actuan
Environment.prototype.act = function(){
  for(var i=0; i<this.children.length; i++){
    if(this.children[i].act !== undefined)
      this.children[i].act(this);
  }
}


//
function Wall(size,x,y){
  THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, size), new THREE.MeshNormalMaterial());
  this.size=size;
  this.position.x=x;
  this.position.y=y;
}

Wall.prototype=new THREE.Mesh();

Environment.prototype.setMap = function(map){
  var _offset = Math.floor(map.length/2)
  for (var i=0; i<map.length; i++)
  for (var j=0; j<map.length; j++){
    if (map[i][j] === "x")
    this.add( new Wall (1, j-offset, -(i-_offset)));
    else if (map[i][j] === "r")
    this.add(new Robot(0.5, j -_offset, -(i-offset)));
    }
}

function setup(){
  var mapa =new Array();
  mapa[0] =  "xxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[1] =  "x                r      x";
  mapa[2] =  "x                       x";
  mapa[3] =  "x                       x";
  mapa[4] =  "xxxxxx        xxxxxxxxxxx";
  mapa[5] =  "x                       x";
  mapa[6] =  "x      r                x";
  mapa[7] =  "x                       x";
  mapa[8] =  "x                       x";
  mapa[9] =  "x                       x";
  mapa[10] = "x                       x";
  mapa[11] = "x                  r    x";
  mapa[12] = "x                       x";
  mapa[13] = "x                       x";
  mapa[14] = "x   r                   x";
  mapa[15] = "x                       x";
  mapa[16] = "xxxxxx        xxxxxxxxxxx";
  mapa[17] = "x           r           x";
  mapa[18] = "x                       x";
  mapa[19] = "x                r      x";
  mapa[20] = "xxxxxx        xxxxxxxxxxx";
  mapa[21] = "x                       x";
  mapa[22] = "x                       x";
  mapa[23] = "x          r            x";
  mapa[24] = "xxxxxxxxxxxxxxxxxxxxxxxxx";v
  
  environment = new Environment();
  environment.setMap(mapa);
  
  camera = new THREE.PerspectiveCamera();
  camera.position.z=30;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  environment.add(camera);
}

function loop(){
  requestAnimationFrame(loop);
  
  environment.sense();
  environment.plan();
  environment.act();
  renderer.render(environment,camera);
}

var environment, camera, renderer;

setup();
loop();
