// Init Reflex

var Engine = new Reflex({loop: loop, debug: false});

// create a rect

//var myRect = new Rect(Engine.canvas.width/2-25, Engine.canvas.width/2-25, 50, 50, "blue", {movement: {type: "TopDown", speed: 0.5, maxSpeed: 4, acceleration: 0.15}});

// create a circle

//var myCircle = new Circle(50, 50, 15, "blue", {movement: {type: "TopDown", speed: 0.5, maxSpeed: 4, acceleration: 0.15}});

// create a round rect

var myRoundRect = new RoundRect(50, 50, 50, 50, 15, "blue", {movement: {type: "TopDown", speed: 0.5, maxSpeed: 4, acceleration: 0.15}})


function loop() {
    Engine.ctx.clearRect(0, 0, Engine.canvas.width, Engine.canvas.height);

    myRoundRect.draw();
    
    requestAnimationFrame(loop);
};

Engine.start();