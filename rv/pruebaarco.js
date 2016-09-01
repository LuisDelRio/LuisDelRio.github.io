var arco = new THREE.Shape();
arco.arc(3.75,1.36, 4, 20,-20);
arco.lineTo(3.75,-1.36);
var pico1 = new THREE.ExtrudeGeometry( arco, {amount: 5} );
pico1.rotateY( Math.PI/4 );
