Button = (function () {

  var scene,
    camera,
    renderer,
    button,
    theButtonThe;

  function makeAScene() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      transparent: true,
      alpha: true
    });

    renderer.setSize(window.innerWidth - 15, window.innerHeight - 15);

    var container = document.querySelector('.container');

    container.appendChild(renderer.domElement);

    var buttonOuterGeometry = new THREE.TorusGeometry(5, .5, 25, 50),
      buttonMaterial = new THREE.MeshPhongMaterial({
        color: 0xec6115,
        emissive: 0xbd411e,
        shininess: 60
      }),
      extrudeSettings = {
        amount: 0.485,
        bevelEnabled: false
      };

    button = new THREE.Mesh(buttonOuterGeometry, buttonMaterial);

    var buttonInnerShape = new THREE.Shape();
    buttonInnerShape.moveTo(5, 0);
    buttonInnerShape.absarc(0, 0, 5, 0, Math.PI * 2, false),
      holePath1 = new THREE.Path(),
      holePath2 = new THREE.Path(),
      holePath3 = new THREE.Path(),
      holePath4 = new THREE.Path();

    holePath1.moveTo(-1, 1.5);
    holePath1.absarc(-1.53, 1.5, .5, 0, Math.PI * 2, true);
    buttonInnerShape.holes.push(holePath1);

    holePath2.moveTo(-2, 1.5);
    holePath2.absarc(-1.5, -1.5, .5, 0, Math.PI * 2, true);
    buttonInnerShape.holes.push(holePath2);

    holePath3.moveTo(2, -1.5);
    holePath3.absarc(1.5, -1.5, .5, 0, Math.PI * 2, true);
    buttonInnerShape.holes.push(holePath3);

    holePath4.moveTo(2, 1.5);
    holePath4.absarc(1.5, 1.5, .5, 0, Math.PI * 2, true);
    buttonInnerShape.holes.push(holePath4);

    var buttonInnerGeometry = new THREE.ExtrudeGeometry(buttonInnerShape, extrudeSettings),
      buttonInner = new THREE.Mesh(buttonInnerGeometry, buttonMaterial);

    button.add(buttonInner);

    button.rotation.set(Math.PI / 2, 0, 0);

    scene.add(button);

    var light = new THREE.DirectionalLight(0xffffff, 1);

    light.position.set(0, 1, 0);
    scene.add(light);

    var cameraZPosition = window.innerHeight < 500 ? 10 : 17;

    camera.position.set(0, 0, cameraZPosition);

    render();
  }

  function update() {
    renderer.setSize(window.innerWidth - 15, window.innerHeight - 15);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    var cameraZPosition = window.innerHeight < 500 ? 10 : 17;

    camera.position.set(0, 0, cameraZPosition);
  }

  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  };

  function itsAButton() {

    this.className += ' click';
    theButtonThe.removeEventListener('mousedown', itsAButton);

    var click = new Audio('click.mp3');

    click.volume = .3;
    click.preload = true;
    click.play();

    var flip = new Audio('whoosh.mp3');

    flip.volume = .75;
    flip.preload = true;
    flip.play();



    var currentRotation = button.rotation.x;
    TweenMax.to(button.rotation, 8, {
      x: currentRotation + (Math.PI * 2), ease: Power2.easeInOut, onComplete: function () {
        theButtonThe.removeAttribute('class');
        theButtonThe.addEventListener('mousedown', itsAButton);
      }
    });
  }

  function init() {

    theButtonThe = document.getElementsByTagName('button')[0];

    theButtonThe.addEventListener('mousedown', itsAButton);

    window.addEventListener('resize', update);

    makeAScene();
  }

  document.addEventListener("DOMContentLoaded", init);

})();