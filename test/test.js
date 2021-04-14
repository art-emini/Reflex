// Init Reflex

var Engine = new Reflex({loop: loop, debug: true, depInstall: true});

// create a rigid body rect

var myRoundRect = new RigidBody(50, 50, 50, 50, 15, "roundrect", "#0000FF", undefined, {movement: {type: "TopDown", maxSpeed: 4, acceleration: 0.02, friction: 0.9}});

// create a rigid body rect

var myRect = new RigidBody(250, 250, 40, 40, 0, "rect", "#FF0000");

// create a rigid body circle

var myCircle = new RigidBody(400, 200, 0, 0, 15, "circle", "#006400");

// create sprite

var mySprite = new RigidBody(450, 50, 50, 50, 0, "sprite", undefined, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpefIg1QQCIDB3U-9Hkft05D9l9jKCZoBwg&usqp=CAU", undefined);

// create a sprite with SpriteSheet
// https://www.pinclipart.com/picdir/middle/542-5425619_coin-sprite-sheet-png-clipart.png

// create a shadow and append it to myRoundRect

var myShadow = new Shadow(0.3, 40);
myShadow.appendTo(myRoundRect);

// play sound on load
// sound from https://freesound.org/people/InspectorJ/sounds/431117/

// let mySound = new Sound({src: "./test-sound.wav", autoplay: true, destroyAfter: true, onPlay: () => console.log("playing"), onEnd: () => console.log("ended"), onDestroy: () => console.log("removed")});
// mySound.playAfter(new Sound({src: "./bg-music.mp3", destroyAfter: true}));

// ProximitySound
let mySound1 = new Sound({src: "./bg-music.mp3", autoplay: true, loop: true})
let myProxSound = new ProximitySound(450, 50, mySound1, {volume: 1, radius: 250, debugCirlce: true}, [myRoundRect]);

// create a background

var background = new Background(0, 0, Engine.canvas.width, Engine.canvas.width, "https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png");


function loop() {
    Engine.clear(); // clears canvas

    // draw background and shadows first
    background.draw();
    myShadow.draw();


    myCircle.draw();
    myRect.draw();
    myRoundRect.draw();
    mySprite.draw();

    // draw proxsound
    myProxSound.draw();

    requestAnimationFrame(loop);
};

Engine.start(); // starts loop and adds dependencies if config depInstall is true