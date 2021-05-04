/*

STRESS TEST

	Tests stop after 5 seconds

	Accurate FPS counter

My Specs:

	Ryzen 5 3600
	GTX 1660 ti

	144hz Monitor

	Chrome Version 90
		Vsync enabled
		FPS Capped at 144

Results:

	2000 Particles
		144 Max
		135 Min

	3000 Particles
		101 Max
		94 Min
	
	4000 Particles
		82 Max
		74 Min

	5000 Particles
		68 Max
		61 Min

	6000 Particles
		54 Max
		51 Min

	7000 Particles
		47 Max
		43 Min

	10000 Particles
		32 Max
		29 Min

	20000 Particles
		15 Max
		12 Min

*/

import * as Engine from '../../Reflex.js';

let World = new Engine.Reflex({ loop: loop, debug: true });

// create particles

let myParticles = new Engine.GFX.Particles(
	'circle',
	'#4f4f4f',
	{
		amount: 2000,
		minX: 0,
		maxX: 795,
		minY: 0,
		maxY: 495,
	},
	0,
	0,
	5
);

myParticles.emit();

function loop() {
	World.clear();
	let fps = World.fps.tick();
	document.querySelector('#fps').innerHTML = `FPS: ${fps}`;

	myParticles.animate('smoke', 0.1, 'left');
	myParticles.draw();

	requestAnimationFrame(loop);
}

World.start();
