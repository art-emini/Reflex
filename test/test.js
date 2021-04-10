// Init Reflex

var Engine = new Reflex({loop: loop, debug: false});

// create a rect

//var myRect = new Rect(Engine.canvas.width/2-25, Engine.canvas.width/2-25, 50, 50, "blue", {movement: {type: "TopDown", speed: 0.5, maxSpeed: 4, acceleration: 0.15}});

// create a circle

//var myCircle = new Circle(50, 50, 15, "blue", {movement: {type: "TopDown", speed: 0.5, maxSpeed: 4, acceleration: 0.15}});

// create a round rect

var myRoundRect = new RoundRect(50, 50, 50, 50, 15, "red", {movement: {type: "TopDown", maxSpeed: 4, acceleration: 0.05}})

// create a background

var background = new Background(0, 0, Engine.canvas.width, Engine.canvas.width, "https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png");


function loop() {
    Engine.ctx.clearRect(0, 0, Engine.canvas.width, Engine.canvas.height);

    background.draw();
    myRoundRect.draw();
    
    requestAnimationFrame(loop);
};

Engine.start();