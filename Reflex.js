// dependiences 
/*

    


*/


//#region Global Utils

// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

// https://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes/24390910

function nameTohex(colour) {
    var colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
    "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
    "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
    "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
    "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
    "honeydew":"#f0fff0","hotpink":"#ff69b4",
    "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
    "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32"};

    if (typeof colours[colour.toLowerCase()] != 'undefined')
        return colours[colour.toLowerCase()];

    return false;
};


//#endregion

// global ReflexConfig

let ReflexConfig = {}


/**
 * Reflex
 *
 * @description A simple Javascript game engine.
 * @author Bleart Emini
 * @license MIT
 * @since 1.0.0-beta
 * @version 1.0.0
 */


/**
 * @description Main Reflex Class
 * @class Reflex
 */

class Reflex {

    /**
     * 
     * @param {Object} config Config Object.
     * @param {Function} config.loop Main loop. Must be a animationFrame loop.
     * @param {Boolean} [config.debug=false] If enabled, Reflex will console log anything it needs to. Errors will be thrown regardless. Optional, off by default.
     * @param {Boolean} config.depInstall If enabled, Reflex will install all dependencies as a script tag in the head of your page automaticlly.
     * @description Creates a new instance of Relfex.
     * @memberof Reflex
     */

    constructor(config) {

        this.config = config;
        ReflexConfig = this.config;

        this.stack = {
            started: false
        };


        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.loop = this.config.loop;
        this.depInstall = this.config.depInstall;

        config.debug = config.debug || false;
        this.debug = this.config.debug;

        if(typeof this.loop != "function") throw "Loop is not a function";
    };

    start() {
        // download dep

        if(this.depInstall == true) {
            
        };

        this.loop();
        this.stack.started = true;
        this.startMsg = `
        
        
             ____    _____   _____   _       _____  ___  _
            /  __\\  /  __/  /    /  / \\     /  __/  \\  \\//
            |  \\/|  |  \\    |  __\\  | |     |  \\     \\  / 
            |    /  |  /_   | |     | |_/\\  |  /_    /  \\ 
            \\_/\\_\\  \\____\\  \\_/     \\____/  \\____\\  /__/\\
                                      
                                      
                                 By

                              ksplatdev

                             Twt: @ksplat_
                           Disc: ksplat#9147
                           
                             MIT License
                     Copyright (c) 2021 Bleart Emini


            Github: https://github.com/ksplatdev/Reflex

            Docs: https://ksplatdev.github.io/Reflex/

            Download: https://github.com/ksplatdev/Reflex/releases/latest

        
        `;

        console.log(this.startMsg);
        if(this.depInstall) {
            console.log(`
Using HowlerJS for sound 
https://github.com/goldfire/howler.js 
Copyright (c) 2013-2020 James Simpson and GoldFire Studios, Inc.
More license info at https://github.com/goldfire/howler.js/blob/master/LICENSE.md
            `)
        };
    };

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };


    //#region Class Utils

    /**
     * 
     * @param {String} colour Color name
     * @returns Hex Color
     * @description Converts HTML color names to hex
     */

    nameTohex(colour) {
        var colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
        "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
        "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
        "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
        "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
        "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
        "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
        "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
        "honeydew":"#f0fff0","hotpink":"#ff69b4",
        "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
        "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
        "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
        "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
        "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
        "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
        "navajowhite":"#ffdead","navy":"#000080",
        "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
        "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
        "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
        "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
        "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
        "violet":"#ee82ee",
        "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
        "yellow":"#ffff00","yellowgreen":"#9acd32"};

        if (typeof colours[colour.toLowerCase()] != 'undefined')
            return colours[colour.toLowerCase()];

        return false;
    };

    //#endregion

    
};

//#region All Objects





/**
 *
 *
 * @class RigidBody
 * @description Creates a Rigid Body
 */

class RigidBody extends Reflex {
    
    /**
     * @description Creates an instance of Rigid Body.
     * @param {Number} x X pos
     * @param {Number} y Y pos
     * @param {Number} w Width
     * @param {Number} h Height
     * @param {Number} [r] Radius, required for roundrect, circle
     * @param {String} shape Shape of object, rect, circle, roundrect, or sprite
     * @param {String} [color] Color for rect, circle, or roundrect
     * @param {String} [imgPath] Img path for sprite, optional
     *
     * @param {Object} [options={}] Option object, holds many different options, optional
     * @param {Object} [options.movement={}] Movement object, holds movements options
     * @param {String} [options.movement.type="TopDown"] W A S D UP DOWN LEFT RIGHT
     * @param {String} [options.movement.type="Jump"] W SPACE UP
     * @param {String} [options.movement.type="LeftRight"] A D LEFT RIGHT
     * @param {String} [options.movement.type="UpDown"] W D
     * @param {Number} [options.movement.speed=2.5] Speed of Rigid Body, only used if acceleration is not present
     * @param {Number} [options.movement.acceleration=0.02] Acceleration of Rigid Body
     * @param {Number} [options.movement.friction=0.007] Friction of Rigid Body
     * @param {Number} [options.movement.maxSpeed=4] Max speed of Rigid Body, Only needed if acceleration is present
     *
     * @memberof RigidBody
     */
    
    constructor(x, y, w, h, r, shape, color, imgPath, options) {
        super(ReflexConfig);

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.shape = shape;
        this.type = "RigidBody";


        this.selfAttached = false;
        this.othersAttached = [];
        this.hasShadow = false;
        this.selfShadow = undefined;


        this.r = r || undefined;

        this.color = color || undefined;

        this.imgPath = imgPath || undefined;

        this.options = options || undefined;

        // set for now
        this.centerX  = this.x;
        this.centerY = this.y;

        // fix centerX and centerY
        if(this.shape == "rect" || this.shape == "roundrect" || this.shape == "sprite") {
            this.centerX = this.x + this.w / 2;
            this.centerY = this.y + this.h / 2;
        };
        if(this.shape == "circle") {
            this.centerX = this.x + this.r / 2;
            this.centerY = this.y + this.r / 2;
        };


        this.controller = {
            up: false,
            down: false,
            left: false,
            right: false
        };

        if(this.options != undefined) {
            this.vel = 0 || this.options.movement.speed;
            this.friction = 0 || this.options.movement.friction;
            this.acceleration = this.options.movement.acceleration;
            this.maxSpeed = this.options.movement.maxSpeed;
            if(this.acceleration != undefined && this.maxSpeed == undefined) throw "acceleration is defined while maxSpeed is undefined";

            window.addEventListener("keydown", (e) => {this.keyListener(e)});
            window.addEventListener("keyup", (e) => {this.keyListener(e)});
        };


        
    };

    /**
     * @description Draws sprite to canvas
     */

    draw() {

        // fix centerX and centerY
        if(this.shape == "rect" || this.shape == "roundrect" || this.shape == "sprite") {
            this.centerX = this.x + this.w / 2;
            this.centerY = this.y + this.h / 2;
        };
        if(this.shape == "circle") {
            this.centerX = this.x + this.r / 2;
            this.centerY = this.y + this.r / 2;
        };

        switch(this.shape) {
            case "rect":
                this.ctx.fillStyle = this.color;
                this.ctx.fillRect(this.x, this.y, this.w, this.h);
            break;
        
            case "roundrect":
                if (this.w < 2 * this.r) this.r = this.w / 2;
                if (this.h < 2 * this.r) this.r = this.h / 2;
                this.ctx.beginPath();
                this.ctx.moveTo(this.x+this.r, this.y);
                this.ctx.arcTo(this.x+this.w, this.y,   this.x+this.w, this.y+this.h, this.r);
                this.ctx.arcTo(this.x+this.w, this.y+this.h, this.x,   this.y+this.h, this.r);
                this.ctx.arcTo(this.x,   this.y+this.h, this.x,   this.y,   this.r);
                this.ctx.arcTo(this.x,   this.y,   this.x+this.w, this.y,   this.r);
                this.ctx.closePath();
                this.ctx.fillStyle = this.color;
                this.ctx.fill();
            break;
        
            case "circle":
                this.ctx.beginPath();
                this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
                this.ctx.fillStyle = this.color;
                this.ctx.fill();
            break;
        
            case "sprite":
                let imgObj = new Image();
                imgObj.src = this.imgPath;
                this.ctx.drawImage(imgObj, this.x, this.y, this.w, this.h);
            break;
        
            default:
                throw `${this.shape} is not a rect, roundrect, circle, or sprite.`
            break;
        };

        // attached objects



        this.othersAttached.forEach(obj => {
            obj.x = this.x + obj.diffX;
            obj.y = this.y + obj.diffY;
        });

        // acceleration

        if(this.acceleration != undefined && this.maxSpeed != undefined) {
            if(this.controller.up || this.controller.down || this.controller.left || this.controller.right) {
                // accelerate
                if(this.vel < this.maxSpeed) {
                    this.vel += this.acceleration;
                };
            }else{
                this.vel = 0;
            };
        };
        


        // movement

        //#region movement

        if(this.controller.up && (this.options.movement.type == "TopDown" || this.options.movement.type == "Jump" || this.options.movement.type == "UpDown")) {
            this.y -= this.vel;
        };

        if(this.controller.down && (this.options.movement.type == "TopDown" || this.options.movement.type == "UpDown")) {
            this.y += this.vel;
        };

        if(this.controller.left && (this.options.movement.type == "TopDown" || this.options.movement.type == "LeftRight")) {
            this.x -= this.vel;
        };

        if(this.controller.right && (this.options.movement.type == "TopDown" || this.options.movement.type == "LeftRight")) {
            this.x += this.vel;
        };

        //#endregion
    };

    /**
     * @description Listens for key presses
     */

    keyListener(event) {
        let key_state = (event.type == "keydown") ? true : false;

        switch(event.keyCode) {
            case 37: // left arrow
                this.controller.left = key_state;
            break;

            case 38: // up arrow
                this.controller.up = key_state;
            break;

            case 39: // right arrow
                this.controller.right = key_state;
            break;

            case 40: // down arrow
                this.controller.down = key_state;
            break;
        
            
            case 65: // a
                this.controller.left = key_state;
            break;

            case 87: // w
                this.controller.up = key_state;
            break;

            case 68: // d
                this.controller.right = key_state;
            break;

            case 83: // s
                this.controller.down = key_state;
            break;
        
            case 32: // space
                if(this.options.movement.type == "Jump") {
                    this.controller.up = key_state;
                };
            break;
            
        };
    };

    /**
     * 
     * @param {String} axis The axis of the force being applied. "x" or "y".
     * @param {Number} force The force being applied. Negative number is left for axis = x, up for axis = y. Positive number is right for axis = x, down for axis = y.
     * @description Adds a force to an axis.
     */

    addForce(axis, force) {
        if(typeof force != "number") {
            throw `Force if not typeof number. Force is typeof ${typeof force}`
        };
        if(typeof axis == "string") {
            
            if(axis == "x") {
                if(Math.sign(force) == 1) {
                    this.x += force;
                }else if(Math.sign(force) == -1) {
                    this.x -= force;
                }else{
                    throw `Force cannot be 0`;
                };
            }else if(axis == "y") {
                if(Math.sign(force) == 1) {
                    this.y += force;
                }else if(Math.sign(force) == -1) {
                    this.y -= force;
                }else{
                    throw `Force cannot be 0`;
                };
            }else{
                throw `Cannot add force to axis of ${axis}`;
            };
        }else{
            throw `Axis is not type of string. Axis is typeof ${typeof axis}`;
        };
    };

    /**
     * 
     * @param {RigidBody} rigidbody A RigidBody to be attached
     * @description Attaches a rigidbody to another rigid body
     */

    attach(rigidbody) {
        let obj = rigidbody;
        if(!obj.selfAttached) {
            obj.selfAttached = true;
            
            // set difference x and y

            if(this.x > obj.x) {
                obj.diffX = this.x - obj.x;
            };

            if(this.x < obj.x) {
                obj.diffX = obj.x - this.x;
            };

            if(this.y > obj.y) {
                obj.diffY = this.y - obj.y;
            };

            if(this.y < obj.y) {
                obj.diffY = obj.y - this.y;
            };


            this.othersAttached.push(obj);
        }else{
            throw `Rigid Body is already attached to another ${rigidbody.type}`;
        };
    };

    /**
     * 
     * @param {RigidBody} rigidbody A RigidBody
     * @description Detaches a RigidBody
     */

    detach(rigidbody) {
        if(rigidbody.selfAttached) {
            rigidbody.selfAttached = false;
            let index = this.othersAttached.indexOf(rigidbody);
            this.othersAttached.splice(index);
        };
    };




    get getCenterX() {
        if(this.shape == "rect" || this.shape == "roundrect" || this.shape == "sprite") {
            return this.x + this.w / 2;
        };
        if(this.shape == "circle") {
            return this.x + this.r / 2;
        };
    };

    get getCenterY() {
        if(this.shape == "rect" || this.shape == "roundrect" || this.shape == "sprite") {
            return this.y + this.h / 2;
        };
        if(this.shape == "circle") {
            return this.y + this.h / 2;
        };
    };

};


//#region Presets

//#region Airplane

/**
 * @class Airplane
 * @description Creates a preset airplane
 */
 
class Airplane extends Reflex {

    /**
     * @description Creates an Airplane preset with built in physics
     * @param {Number} x X pos
     * @param {Number} y Y pos
     * @param {String} imgPath Img file path or link
     * @param {Object} options Option object, holds many options within
     * @param {Number} [w] Width of img, optional
     * @param {Number} [h] Height of img, optional
     *
     * @param {Object} options.movement Movement option object
     * @param {Boolean} options.movement.enabled Boolean to enable Airplane movement
     * @param {Object} options.physics Physics option object 
     * @param {Boolean} options.physics.enabled Boolean to enable Airplane physics
     * @param {Object} options.ai AI option object 
     * @param {Boolean} options.ai.enabled Boolean to enable Airplane ai
     *
     * @memberof Airplane
     */

    constructor(x, y, imgPath, options, w, h) {
        super(ReflexConfig);
        this.x = x;
        this.y = y;
        this.imgPath = imgPath;
        this.options = options;
        
        w = w || undefined;
        this.w = w;
        
        h = h || undefined;
        this.h = h;
        
        options = options || undefined;
        this.options = options;

        this.vx = 0;
        this.vy = 0;
        this.accX = 0.007;
        this.accY = 0.01;
        this.minSpeed = this.options

        this.isFlying = false;

        this.doPhysics = this.options.physics.enabled;
        this.doMovement = this.options.movement.enabled;
        this.doAi = this.options.ai.enabled;

        this.airplaneAI = undefined;

        if(this.doAi) {
            this.airplaneAI = new AirplaneAi()
            this.airplaneAI.startAI();
        };



    };

    draw() {

    };

    gravity() {

    };

    drag() {

    };

    throttleIncrease() {

    };

    throttleDecrease() {

    };
    
};

/**
 * @class AirplaneAi
 * @description Creates an instance of an Airplane AI
 */

class AirplaneAi extends Airplane {
    constructor() {
        if(this.doAi) {

        };
    };

    startAI() {

    };
};


// end airplane
//#endregion

// end presets
//#endregion

// end object classes
//#endregion

//#region Misc


/**
 * @class Background
 * @description Creates a background
 */

class Background extends Reflex {

    /**
     * @description Creates a background
     * @param {Number} x X pos
     * @param {Number} y Y pos
     * @param {Number} w Width
     * @param {Number} h Height
     * @param {String} imgPath imgPath, file or link
     *
     * @memberof Background
     */

    constructor(x, y, w, h, imgPath) {
        super(ReflexConfig);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imgPath = imgPath;


    };

    /**
     * @description Draws Background
     */

    draw() {
        var imgObj = new Image();
        imgObj.src = this.imgPath;
        this.ctx.drawImage(imgObj, this.x, this.y, this.w, this.h);
    };

};

/**
 * @class SpriteSheet
 * @description Creates a SpriteSheet
 */


class SpriteSheet extends Reflex {
    constructor(rows, column, imgW, imgH, singleW, singleH) {
        super(ReflexConfig);
        this.rows = rows;
        this.column = column;

        this.singleW = singleW;
        this.singleH = singleH;

        this.w = imgW;
        this.h = imgH;

        this.sX = 0;
        this.sY = 0;

        this.type = "SpriteSheet"; // instead of contructor.name as minified files can cause problems

    };

    /**
     * @description Draws frame
     * @param {Object} frame Frame object
     * @param {Number} frame.column What column to select the image from, starts at 0
     * @param {Number} frame.row What row to select the image from, starts at 0
     */

    draw(frame) { 
        var imgObj = new Image();
        imgObj.src = this.imgPath;
        this.ctx.drawImage(imgObj, this.x, this.y, this.w, this.h, );
    };
};

/**
 * @class Sound
 * @description Creates a sound with HowlerJS
 * @requires Howl Class from HowlerJS
 * @license MIT Copyright (c) 2013-2020 James Simpson and GoldFire Studios, Inc. More info at: https://github.com/goldfire/howler.js/blob/master/LICENSE.md
 * 
 * Uses HowlerJS
 * https://github.com/goldfire/howler.js/
 */

class Sound extends Reflex {

    /**
     * @description Creates a sound 
     * @param {Object} options Option object
     * @param {String} options.src A file path or link to the audio src
     * @param {Boolean} [options.autoplay=false] Autoplay sound, off by default
     * @param {Boolean} [options.destroyAfter=false] Remove audio element after playing
     * @param {Boolean} [options.loop=false] Loop sound, off by default
     * @param {Function} [options.onPlay] An on play event, optional
     * @param {Function} [options.onPause] An on pause event, optional
     * @param {Function} [options.onVolumeChange] An on volume change event, optional
     * @param {Function} [options.onEnd] An on end event, optional
     * @param {Function} [options.onAppend] A custom event, fires once audio is appened
     * @param {Function} [options.onDestroy] A custom event, fires if destoryAfter is true and once it ended and removed
     * 
     * @memberof Sound
     */

    constructor(options) {
        super(ReflexConfig);

        this.options = options;
        this.src = this.options.src;

        // optional params
        this.autoplay = this.options.autoplay || false;
        this.destroyAfter = this.options.destroyAfter || false;
        this.loop = this.options.loop || false;
        this.volume = this.options.volume || 1;

        this.onPlay = this.options.onPlay || function () {};
        this.onPause = this.options.onPause || function () {};
        this.onVolumeChange = this.options.onVolumeChange || function () {};
        this.onEnd = this.options.onEnd || function () {};
        
        this.onAppend = this.options.onAppend || function () {};
        this.onDestroy = this.options.onDestroy || function () {};

        // throw typeof errors
        if(typeof this.options != "object") throw `options must be a typeof object`;
        if(typeof this.src != "string") throw `src must be a string`;
        if(typeof this.autoplay != "boolean") throw `autoplay must be typeof boolean`;
        if(typeof this.onPlay != "function") throw `onPlay must be typeof function`;
        if(typeof this.onPause != "function") throw `onPause must be typeof function`;
        if(typeof this.onVolumeChange != "function") throw `onVolumeChange must be typeof function`;
        if(typeof this.onEnd != "function") throw `onEnd must be typeof function`;
        if(typeof this.onDestroy != "function") throw `onDestroy must be typeof function`;
        if(typeof this.volume != "number") throw `volume must be typeof number`;

        
        // Main Sound Functionality
        
        this.element = document.createElement("audio");

        // main attr
        this.element.volume = this.volume;
        this.element.autoplay = this.autoplay;
        this.element.loop = this.loop;
        this.element.src = this.src;

        // events
        this.element.onerror = (err) => {throw err};
        this.element.onwaiting = () => {if(this.debug) console.warn(`Audio waiting/buffering`)};

        this.element.onplay = this.onPlay;
        this.element.onpause = this.onPause;
        this.element.onvolumechange = this.onVolumeChange;
        this.element.onended = this.onEnd;

        // destroyAfter

        if(this.destroyAfter) {
            this.element.addEventListener("ended", () => {this.element.onDestroy(); this.element.remove()})
        };
        
        // custom events

        this.element.onAppend = this.onAppend;
        this.element.onDestroy = this.onDestroy;

        document.body.appendChild(this.element);

    };

    play() {

    };

    pause() {

    };

    changeVolume(volume) {

    };

    end() {

    };

    remove() {
        this.element.remove();
    };
};

//#endregion


//#region GFX

/**
 * @class Shadow
 * @description Creates a basic circle shadow
 */

class Shadow extends Reflex {

    /**
     * @description Creates a shadow that can appendTo a RigidBody
     * @param {Number} alpha Alpha value between 0-1
     * @param {Number} radius Radius of shadow
     * @param {Number} [offsetX=0] offset x pos, optional
     * @param {Number} [offsetY=0] offset y pos, optional
     */

    constructor(alpha, radius, offsetX, offsetY) {
        super(ReflexConfig);
        this.alpha = alpha;
        this.r = radius;
        this.color = `rgba(0, 0, 0, ${alpha})`
        this.type = "Shadow";

        this.offsetX = offsetX || 0;
        this.offsetY = offsetY || 0;

        this.isAppened = false;
        this.appenedTo = undefined;

    };

    draw() {
        if(this.isAppened) {
            this.ctx.beginPath();
            this.ctx.arc(this.appenedTo.centerX + this.offsetX, this.appenedTo.centerY + this.offsetY, this.r, 0, 2 * Math.PI, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
    };

    /**
     * @description Appends shadow to a RigidBody
     * @param {RigidBody} rigidbody A RigidBody
     */

    appendTo(rigidbody) {
        if(rigidbody.type != "RigidBody") throw `Cannot append shadow to ${rigidbody.type}`;
        rigidbody.hasShadow = true;
        rigidbody.selfShadow = this;
        this.isAppened = true;
        this.appenedTo = rigidbody;
    };

    /**
     * @description Removes shadow from a RigidBody
     * @param {RigidBody} rigidbody A RigidBody
     */

    removeFrom(rigidbody) {
        if(rigidbody.type != "RigidBody") throw `Cannot remove shadow from ${rigidbody.type}`;
        if(!rigidbody.hasShadow) throw `Cannot remove shadow, ${rigidbody} does not have a shadow to remove`;
        rigidbody.selfShadow = undefined;
        rigidbody.hasShadow = false;
        this.isAppened = false;
        this.appenedTo = undefined;
        this.color = `rgba(0, 0, 0, 0)`;
    };
};

//#endregion