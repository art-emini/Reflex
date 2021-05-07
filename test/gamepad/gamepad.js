// import

import * as Engine from '../../Reflex.js';

// Init Reflex

var World = new Engine.Reflex({ loop: loop, debug: true });

var myGamepad = new Engine.Movement.Gamepad();

var myRoundRect = new Engine.Objects.RigidBody(
	50,
	50,
	50,
	50,
	15,
	'roundrect',
	'#0000FF',
	undefined,
	{
		movement: {
			type: 'TopDown',
			maxSpeed: 4,
			acceleration: 0.02,
			friction: 0.9,
			canvasBounds: true,
		},
	}
);

function loop() {
	World.clear(); // clears canvas
	let fps = World.fps.tick();
	document.querySelector('#fps').innerHTML = `FPS: ${fps}`;

	myGamepad.update();

	myRoundRect.draw();

	requestAnimationFrame(loop);
}

World.start();
