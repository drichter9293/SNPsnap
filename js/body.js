var WIDTH = bodyCanvas.clientWidth - 20, 
	HEIGHT = bodyCanvas.clientHeight - 20; 

// Scene
var scene = new THREE.Scene();

// Camera
var VIEW_ANGLE = 45,
	ASPECT = WIDTH / HEIGHT,
	NEAR = 1, 
	FAR = 1000;
var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
camera.position.z = 500;
// Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
bodyCanvas.appendChild(renderer.domElement);

var group = new THREE.Group();
group.scale.x = 0.8;
group.scale.y = 0.8;
group.scale.z = 0.8;
scene.add(group);

/*============================== LIGHTING =========================*/

var ambient = new THREE.AmbientLight( 0x111111 );
scene.add(ambient);

var light = new THREE.DirectionalLight('white', 1, -1000);
light.position.z = 260;
scene.add(light);			

/*============================== BODY =============================*/
var organMeshMap = new Map();	
var organMaterialMap = new Map();

var highlightMaterial = new THREE.MeshLambertMaterial( {color: 'yellow'} );
var skinMaterial = new THREE.MeshLambertMaterial({color: 0xFFC3AA, 
	transparent: true, opacity: 0.5});

/*===== TORSO =====*/
var torsoRadiusTop = 50,
	torsoRadiusBottom = 40,
	torsoHeight = 100;
var torsoGeometry = new THREE.CylinderGeometry(torsoRadiusTop, torsoRadiusBottom, torsoHeight);
var torsoMesh = new THREE.Mesh(torsoGeometry, skinMaterial);

torsoMesh.position.y = 50;
torsoMesh.scale.z = 0.7;
group.add(torsoMesh);

/*===== UPPER TORSO =====*/
var upperTorsoRadiusTop = 65,
	upperTorsoRadiusBottom = 75,
	upperTorsoHeight = 10;
var upperTorsoGeometry = new THREE.CylinderGeometry(upperTorsoRadiusTop, upperTorsoRadiusBottom, upperTorsoHeight);
var upperTorsoMesh = new THREE.Mesh(upperTorsoGeometry, skinMaterial);
upperTorsoMesh.position.y = 105;
upperTorsoMesh.scale.z = 0.5;
group.add(upperTorsoMesh);			

/*===== NECK =====*/
var neckRadiusTop = 20,
	neckRadiusBottom = 25,
	neckHeight = 10;
var neckGeometry = new THREE.CylinderGeometry(neckRadiusTop, neckRadiusBottom, neckHeight);
var neckMesh = new THREE.Mesh(neckGeometry, skinMaterial);
neckMesh.position.y = 120;
group.add(neckMesh);

/*===== HEAD =====*/
var headRadius = 30;
var headGeometry = new THREE.SphereGeometry(headRadius);
var headMesh = new THREE.Mesh(headGeometry, skinMaterial);
headMesh.position.y = 160;
group.add(headMesh);

/*===== BRAIN =====*/
var brainRadius = 25;
var brainGeometry = new THREE.SphereGeometry(brainRadius);
var brainMaterial = new THREE.MeshLambertMaterial( {color: 'pink'} );
var brainMesh = new THREE.Mesh(brainGeometry, brainMaterial);

brainMesh.scale.y = 0.5;			
brainMesh.position.y = 170;

group.add(brainMesh);
organMaterialMap.set(brainMesh, brainMaterial);
organMeshMap.set("Brain", brainMesh);

/*===== EYES =====*/
var eyeRadius = 5;
var eyeGeometry = new THREE.SphereGeometry(eyeRadius);
var eyeMaterial = new THREE.MeshLambertMaterial( {color: 'white'} );
var leftEyeMesh = new THREE.Mesh(eyeGeometry, eyeMaterial);
var rightEyeMesh = new THREE.Mesh(eyeGeometry, eyeMaterial);

leftEyeMesh.position.x = -10;
leftEyeMesh.position.y = 160;
leftEyeMesh.position.z = 21;
rightEyeMesh.position.x = 10;
rightEyeMesh.position.y = 160;
rightEyeMesh.position.z = 21;

group.add(leftEyeMesh);
group.add(rightEyeMesh);
organMaterialMap.set(leftEyeMesh, eyeMaterial);
organMaterialMap.set(rightEyeMesh, eyeMaterial);
organMeshMap.set("Left Eye", leftEyeMesh);
organMeshMap.set("Right Eye", rightEyeMesh);

/*===== PUPILS =====*/
var pupilRadius = 2;
var pupilGeometry = new THREE.SphereGeometry(pupilRadius);
var pupilMaterial = new THREE.MeshLambertMaterial( {color: 'black'} );
var leftpupilMesh = new THREE.Mesh(pupilGeometry, pupilMaterial);
var rightpupilMesh = new THREE.Mesh(pupilGeometry, pupilMaterial);

leftpupilMesh.position.x = -10;
leftpupilMesh.position.y = 160;
leftpupilMesh.position.z = 25;
rightpupilMesh.position.x = 10;
rightpupilMesh.position.y = 160;
rightpupilMesh.position.z = 25;

group.add(leftpupilMesh);
group.add(rightpupilMesh);

/*===== UPPER ARMS =====*/
var upperArmRadiusTop = 12,
	upperArmRadiusBottom = 10,
	upperArmHeight = 60;
var upperArmGeometry = new THREE.CylinderGeometry(upperArmRadiusTop, upperArmRadiusBottom, upperArmHeight);
var rightUpperArmMesh = new THREE.Mesh(upperArmGeometry, skinMaterial);
rightUpperArmMesh.position.x = 60;
rightUpperArmMesh.position.y = 70;

var leftUpperArmMesh = new THREE.Mesh(upperArmGeometry, skinMaterial);
leftUpperArmMesh.position.x = -60;
leftUpperArmMesh.position.y = 70;

group.add(rightUpperArmMesh); 
group.add(leftUpperArmMesh);

/*===== FOREARMS =====*/
var forearmRadiusTop = 10,
	forearmRadiusBottom = 8,
	forearmHeight = 50;
var forearmGeometry = new THREE.CylinderGeometry(forearmRadiusTop, forearmRadiusBottom, forearmHeight);
var rightForearmMesh = new THREE.Mesh(forearmGeometry, skinMaterial);
rightForearmMesh.position.x = 60;
rightForearmMesh.position.y = 10;

var leftForearmMesh = new THREE.Mesh(forearmGeometry, skinMaterial);
leftForearmMesh.position.x = -60;
leftForearmMesh.position.y = 10;

group.add(rightForearmMesh); 
group.add(leftForearmMesh);

/*===== HANDS =====*/
var handRadius = 10;
var handGeometry = new THREE.SphereGeometry(handRadius);
var leftHandMesh = new THREE.Mesh(handGeometry, skinMaterial);
var rightHandMesh = new THREE.Mesh(handGeometry, skinMaterial);
leftHandMesh.position.x = -60;
leftHandMesh.position.y = -30;
rightHandMesh.position.x = 60;
rightHandMesh.position.y = -30;

group.add(leftHandMesh);
group.add(rightHandMesh);

/*===== FINGERS =====*/
var fingerRadiusTop = 2,
	fingerRadiusBottom = 2,
	fingerHeight = 8;
var fingerGeometry = new THREE.CylinderGeometry(fingerRadiusTop, fingerRadiusBottom, fingerHeight);
var leftThumbMesh = new THREE.Mesh(fingerGeometry, skinMaterial);
var leftIndexFingerMesh = new THREE.Mesh(fingerGeometry, skinMaterial);
var leftMiddleFingerMesh = new THREE.Mesh(fingerGeometry, skinMaterial);
var leftRingFingerMesh = new THREE.Mesh(fingerGeometry, skinMaterial);
var leftPinkyMesh = new THREE.Mesh(fingerGeometry, skinMaterial);

leftThumbMesh.position.x = -70;
leftThumbMesh.position.y = -35;
leftIndexFingerMesh.position.x = -65;
leftIndexFingerMesh.position.y = -44;
leftMiddleFingerMesh.position.x = -61;	
leftMiddleFingerMesh.position.y = -45;
leftRingFingerMesh.position.x = -57;
leftRingFingerMesh.position.y = -44;
leftPinkyMesh.position.x = -53;
leftPinkyMesh.position.y = -42;

group.add(leftThumbMesh);
group.add(leftIndexFingerMesh);
group.add(leftMiddleFingerMesh);
group.add(leftRingFingerMesh);
group.add(leftPinkyMesh);

var rightThumbMesh = new THREE.Mesh(fingerGeometry, skinMaterial);
var rightIndexFingerMesh = new THREE.Mesh(fingerGeometry, skinMaterial);
var rightMiddleFingerMesh = new THREE.Mesh(fingerGeometry, skinMaterial);
var rightRingFingerMesh = new THREE.Mesh(fingerGeometry, skinMaterial);
var rightPinkyMesh = new THREE.Mesh(fingerGeometry, skinMaterial);

rightThumbMesh.position.x = 70;
rightThumbMesh.position.y = -35;
rightIndexFingerMesh.position.x = 65;
rightIndexFingerMesh.position.y = -44;
rightMiddleFingerMesh.position.x = 61;	
rightMiddleFingerMesh.position.y = -45;
rightRingFingerMesh.position.x = 57;
rightRingFingerMesh.position.y = -44;
rightPinkyMesh.position.x = 53;
rightPinkyMesh.position.y = -42;

group.add(rightThumbMesh);
group.add(rightIndexFingerMesh);
group.add(rightMiddleFingerMesh);
group.add(rightRingFingerMesh);
group.add(rightPinkyMesh);			

/*===== WAIST =====*/
var waistRadiusTop = 40,
	waistRadiusBottom = 40,
	waistHeight = 30;
var waistGeometry = new THREE.CylinderGeometry(waistRadiusTop, waistRadiusBottom, waistHeight);
var waistMesh = new THREE.Mesh(waistGeometry, skinMaterial);
waistMesh.position.y = -20;
waistMesh.scale.z = 0.7;
group.add(waistMesh);	

/*===== THIGHS =====*/
var thighRadiusTop = 20,
	thighRadiusBottom = 15,
	thighHeight = 70;
var thighGeometry = new THREE.CylinderGeometry(thighRadiusTop, thighRadiusBottom, thighHeight);
var rightThighMesh = new THREE.Mesh(thighGeometry, skinMaterial);
rightThighMesh.position.x = 20;
rightThighMesh.position.y = -75;

var leftThighMesh = new THREE.Mesh(thighGeometry, skinMaterial);
leftThighMesh.position.x = -20;
leftThighMesh.position.y = -75;

group.add(rightThighMesh); 
group.add(leftThighMesh);

/*===== LEGS =====*/
var legRadiusTop = 15,
	legRadiusBottom = 10,
	legHeight = 50;
var legGeometry = new THREE.CylinderGeometry(legRadiusTop, legRadiusBottom, legHeight);
var rightLegMesh = new THREE.Mesh(legGeometry, skinMaterial);
rightLegMesh.position.x = 20;
rightLegMesh.position.y = -140;

var leftLegMesh = new THREE.Mesh(legGeometry, skinMaterial);
leftLegMesh.position.x = -20;
leftLegMesh.position.y = -140;

group.add(rightLegMesh); 
group.add(leftLegMesh);			

/*===== HEART =====*/
var heartShape = new THREE.Shape(); 

heartShape.moveTo( 0, 0 );
heartShape.bezierCurveTo( 0, 0, 5, 25, 25, 25 );
heartShape.bezierCurveTo( 55, 25, 55, -10, 55, -10 );
heartShape.bezierCurveTo( 55, -30, 35, -52, 0, -70 );
heartShape.bezierCurveTo( -35, -52, -55, -30, -55, -10 );
heartShape.bezierCurveTo( -55, -10, -55, 25, -25, 25 );
heartShape.bezierCurveTo( -10, 25, 0, 0, 0, 0 );

var extrudeSettings = { amount: 10 };
var heartMaterial = new THREE.MeshLambertMaterial( {color: 0xFB9898} );
var heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
var heartMesh = new THREE.Mesh(heartGeometry, heartMaterial);

heartMesh.position.x = 5;
heartMesh.position.y = 90;
heartMesh.position.z = -5;
heartMesh.scale.x = 0.2;
heartMesh.scale.y = 0.2;

group.add(heartMesh);
organMaterialMap.set(heartMesh, heartMaterial);
organMeshMap.set("Heart", heartMesh);

/*===== LUNGS =====*/
var lungRadius = 15;
var lungGeometry = new THREE.SphereGeometry(lungRadius);

var lungMaterial = new THREE.MeshLambertMaterial( {color: 0xADD8E6} );
var leftLungMesh = new THREE.Mesh(lungGeometry, lungMaterial);
var rightLungMesh = new THREE.Mesh(lungGeometry, lungMaterial);
rightLungMesh.emissive = 'white';
leftLungMesh.scale.y = 2.0;
rightLungMesh.scale.y = 2.0;

leftLungMesh.position.x = -20;
leftLungMesh.position.y = 70;

rightLungMesh.position.x = 20;
rightLungMesh.position.y = 70;

group.add(leftLungMesh);
group.add(rightLungMesh);
organMaterialMap.set(leftLungMesh, lungMaterial);
organMaterialMap.set(rightLungMesh, lungMaterial);
organMeshMap.set("Left Lung", leftLungMesh);
organMeshMap.set("Right Lung", rightLungMesh);

/*===== LIVER =====*/
var liverShape = new THREE.Shape();

liverShape.moveTo( 0, 0 );
liverShape.quadraticCurveTo( -5, 25, 20, 20 );
liverShape.quadraticCurveTo( 40, 20, 30, 10 );
liverShape.quadraticCurveTo( 20, 8, 10, 0 );
liverShape.quadraticCurveTo( 5, -5, 0, 0 );

var extrudeSettings = { amount: 10 };
var liverMaterial = new THREE.MeshLambertMaterial( {color: 0x98FB98} );
var liverGeometry = new THREE.ExtrudeGeometry(liverShape, extrudeSettings);
var liverMesh = new THREE.Mesh(liverGeometry, liverMaterial);

liverMesh.position.x = -30;
liverMesh.position.y = 15;
liverMesh.position.z = -5;

group.add(liverMesh);
organMaterialMap.set(liverMesh, liverMaterial);
organMeshMap.set("Liver", liverMesh);

/*===== STOMACH =====*/
var stomachShape = new THREE.Shape();

stomachShape.moveTo( -6, 5 );
stomachShape.quadraticCurveTo( 0, 0, 6, 5 );
stomachShape.quadraticCurveTo( 8, 8, 10, 5 );
stomachShape.bezierCurveTo( 9, -5, -8, -5, -10, 5 );
stomachShape.quadraticCurveTo( -8, 8, -6, 5 );

var extrudeSettings = { amount: 10 };
var stomachMaterial = new THREE.MeshLambertMaterial( {color: 'pink'} );
var stomachGeometry = new THREE.ExtrudeGeometry(stomachShape, extrudeSettings);
var stomachMesh = new THREE.Mesh(stomachGeometry, stomachMaterial);

stomachMesh.position.x = 20;
stomachMesh.position.y = 20;
stomachMesh.position.z = -5;
stomachMesh.rotation.z = Math.PI/4;

group.add(stomachMesh);
organMaterialMap.set(stomachMesh, stomachMaterial);
organMeshMap.set("Stomach", stomachMesh);

/*===== KIDNEYS =====*/
var kidneyShape = new THREE.Shape();

kidneyShape.moveTo( -6, 5 );
kidneyShape.quadraticCurveTo( 0, 0, 6, 5 );
kidneyShape.quadraticCurveTo( 8, 8, 10, 5 );
kidneyShape.bezierCurveTo( 9, -5, -8, -5, -10, 5 );
kidneyShape.quadraticCurveTo( -8, 8, -6, 5 );

var extrudeSettings = { amount: 10 };
var kidneyMaterial = new THREE.MeshLambertMaterial( {color: 0xB19CD9} );
var kidneyGeometry = new THREE.ExtrudeGeometry(kidneyShape, extrudeSettings);
var leftKidneyMesh = new THREE.Mesh(kidneyGeometry, kidneyMaterial);
var rightKidneyMesh = new THREE.Mesh(kidneyGeometry, kidneyMaterial);

leftKidneyMesh.position.x = 20;
leftKidneyMesh.position.y = -5;
leftKidneyMesh.position.z = -5;
leftKidneyMesh.rotation.z = Math.PI/2;

rightKidneyMesh.position.x = -20;
rightKidneyMesh.position.y = -5;
rightKidneyMesh.position.z = -5;
rightKidneyMesh.rotation.z = -Math.PI/2;

group.add(leftKidneyMesh);
group.add(rightKidneyMesh);
organMaterialMap.set(leftKidneyMesh, kidneyMaterial);
organMeshMap.set("Left Kidney", leftKidneyMesh);
organMaterialMap.set(rightKidneyMesh, kidneyMaterial);
organMeshMap.set("Right Kidney", rightKidneyMesh);

/*===== Intestine =====*/
var intestineGeometry = new THREE.TorusKnotGeometry( 15, 3, 100, 16, 3, 7);
var intestineMaterial = new THREE.MeshLambertMaterial( {color: 'pink'} );
var intestineMesh = new THREE.Mesh(intestineGeometry, intestineMaterial);

intestineMesh.position.x = 0;
intestineMesh.position.y = -20;
intestineMesh.scale.y = 0.7;

group.add(intestineMesh);
organMaterialMap.set(intestineMesh, intestineMaterial);
organMeshMap.set("Intestine", intestineMesh);

/*===== HIGHLIGHT =====*/

function highlightBodyParts( bodyPartsString ) {
	clearHighlights();
	
	var organs = bodyPartsString.split(',');
	for (var i=0; i<organs.length; i++) {
		organ = organs[i];
		var meshNames = [];
		if (organ == "Eyes") {
			meshNames.push("Left Eye");
			meshNames.push("Right Eye");
		} else if (organ == "Lungs") {
			meshNames.push("Left Lung");
			meshNames.push("Right Lung");
		} else if (organ == "Kidneys") {
			meshNames.push("Left Kidney");
			meshNames.push("Right Kidney");
		} else {
			meshNames.push(organ);
		}
		for (var j=0; j<meshNames.length; j++) {
			organMeshMap.get(meshNames[j]).material = highlightMaterial;
		}				
	}
}

function clearHighlights() {
	for (var mesh of organMaterialMap.keys()) {
		mesh.material = organMaterialMap.get(mesh);
	}
}

/*====================== ROTATION ===========================*/

var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

document.addEventListener('mousedown', onDocumentMouseDown, false);
document.addEventListener('touchstart', onDocumentTouchStart, false);
document.addEventListener('touchmove', onDocumentTouchMove, false);

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
	WIDTH = bodyCanvas.clientWidth - 20;
	HEIGHT = bodyCanvas.clientHeight - 20;

	camera.aspect = WIDTH / HEIGHT;
	camera.updateProjectionMatrix();

	renderer.setSize( WIDTH, HEIGHT );	
}

function onDocumentMouseDown( event ) {

	//event.preventDefault();

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
	document.addEventListener( 'mouseout', onDocumentMouseOut, false );

	mouseXOnMouseDown = event.clientX - WIDTH/2;
	targetRotationOnMouseDown = targetRotation;	
}

function onDocumentMouseMove( event ) {

	mouseX = event.clientX - WIDTH/2;

	targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

}

function onDocumentMouseUp( event ) {

	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentMouseOut( event ) {

	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentTouchStart( event ) {

	if ( event.touches.length == 1 ) {

		event.preventDefault();

		mouseXOnMouseDown = event.touches[ 0 ].pageX - WIDTH/2;
		targetRotationOnMouseDown = targetRotation;

	}

}

function onDocumentTouchMove( event ) {

	if ( event.touches.length == 1 ) {

		event.preventDefault();

		mouseX = event.touches[ 0 ].pageX - WIDTH/2;
		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

	}

}

/*========================= RENDER ============================*/

var render = function () {
	requestAnimationFrame( render );
	
	group.rotation.y += (targetRotation - group.rotation.y) * 0.05;
	renderer.render(scene, camera);
};
render();