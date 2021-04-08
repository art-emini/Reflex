//#region Global Utils


//#endregion

// global ReflexConfig

let ReflexConfig = {}


/**
 * Reflex
 *
 * @description A Javascript game engine.
 * @author Bleart Emini
 * @license MIT
 * @since 1.0.0-beta
 * @version 1.0.0-beta
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
     * @description Creates a new instance of Relfex.
     * @memberof Reflex
     */

    constructor(config) {
        this.config = config;
        ReflexConfig = this.config;

        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.loop = this.config.loop;
        this.debug = this.config.debug || false;
        if(typeof this.loop != "function") throw "Loop is not a function";
    };

    start() {
        this.loop();
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
 * @class Sprite
 * @description Creates a sprite
 */
class Sprite extends Reflex {
    
    /**
     * @description Creates an instance of Sprite.
     * @param {Number} x X pos
     * @param {Number} y Y pos
     * @param {Number} w Width
     * @param {Number} h Height
     * @param {String} imgPath Img path
     *
     * @param {Object} [options={}] Option object, holds many different options
     * @param {Object} [options.movement={}] Movement object, holds movements options
     * @param {String} [options.movement.type="TopDown"] W A S D UP DOWN LEFT RIGHT
     * @param {String} [options.movement.type="Jump"] W SPACE UP
     * @param {String} [options.movement.type="LeftRight"] A D LEFT RIGHT
     * @param {String} [options.movement.type="UpDown"] W D
     * @param {Number} [options.movement.speed=2.5] Speed of Sprite
     * @param {Number} [options.movement.acceleration=0.15] Acceleration of Sprite
     * @param {Number} [options.movement.maxSpeed=4] Max speed of Sprite, Only needed if acceleration is present
     *
     * @memberof Sprite
     */
    
    constructor(x, y, w, h, imgPath, options) {
        super(ReflexConfig);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imgPath = imgPath;

        options = options || undefined;

        this.options = options;

        this.controller = {
            up: false,
            down: false,
            left: false,
            right: false
        };

        this.speed = this.options.movement.speed;
        this.vel = this.options.movement.speed;
        this.acceleration = this.options.movement.acceleration;
        this.maxSpeed = this.options.movement.maxSpeed;

        if(this.acceleration != undefined && this.maxSpeed == undefined) throw "acceleration is defined while maxSpeed is undefined";

        window.addEventListener("keydown", (e) => {this.keyListener(e)});
        window.addEventListener("keyup", (e) => {this.keyListener(e)});
    };

    /**
     * @description Draws sprite to canvas
     */

    draw() {
        var imgObj = new Image();
        imgObj.src = this.imgPath;
        this.ctx.drawImage(imgObj, this.x, this.y, this.w, this.h);

        // acceleration

        if(this.acceleration != undefined && this.maxSpeed != undefined) {
            if(this.controller.up || this.controller.down || this.controller.left || this.controller.right) {
                if(this.vel < this.maxSpeed) {
                    this.vel += this.acceleration;
                };
            }else{
                this.vel = this.speed;
            };
        };


        // movement

        //#region movement

        if(this.controller.up && (this.options.movement.type == "TopDown" || this.options.movement.type == "Jump" || this.options.movement.type == "UpDown")) {
            this.y -= this.options.movement.speed;
        };

        if(this.controller.down && (this.options.movement.type == "TopDown" || this.options.movement.type == "UpDown")) {
            this.y += this.options.movement.speed;
        };

        if(this.controller.left && (this.options.movement.type == "TopDown" || this.options.movement.type == "LeftRight")) {
            this.x -= this.options.movement.speed;
        };

        if(this.controller.right && (this.options.movement.type == "TopDown" || this.options.movement.type == "LeftRight")) {
            this.x += this.options.movement.speed;
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

    get centerX() {
        return this.x + this.w / 2;
    };

    get centerY() {
        return this.y + this.h / 2;
    };

};


/**
 *
 * @class Rect
 * @description Creates a Rectangle
 */

class Rect extends Reflex {
    /**
     * 
     * @param {Number} x X pos
     * @param {Number} y Y pos
     * @param {Number} w Width
     * @param {Number} h Height
     * @param {String} color A hex color without the #
     *
     * @param {Object} [options={}] Option object, holds many different options
     * @param {Object} [options.movement={}] Movement object, holds movements options
     * @param {String} [options.movement.type="TopDown"] W A S D UP DOWN LEFT RIGHT
     * @param {String} [options.movement.type="Jump"] W SPACE UP
     * @param {String} [options.movement.type="LeftRight"] A D LEFT RIGHT
     * @param {String} [options.movement.type="UpDown"] W D
     * @param {Number} [options.movement.speed=2.5] Speed of Rect
     * @param {Number} [options.movement.acceleration=0.15] Acceleration of Rect
     * @param {Number} [options.movement.maxSpeed=0.4] Max speed of Rect, Only needed if acceleration is present
     */
    constructor(x, y, w, h, color, options) {
        super(ReflexConfig);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;

        options = options || undefined;

        this.options = options;

        this.controller = {
            up: false,
            down: false,
            left: false,
            right: false
        };

        this.speed = this.options.movement.speed;
        this.vel = this.options.movement.speed;
        this.acceleration = this.options.movement.acceleration;
        this.maxSpeed = this.options.movement.maxSpeed;

        if(this.acceleration != undefined && this.maxSpeed == undefined) throw "acceleration is defined while maxSpeed is undefined";

        window.addEventListener("keydown", (e) => {this.keyListener(e)});
        window.addEventListener("keyup", (e) => {this.keyListener(e)});
    };

    /**
     * @description Draws rect to canvas
     */

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

        // acceleration

        if(this.acceleration != undefined && this.maxSpeed != undefined) {
            if(this.controller.up || this.controller.down || this.controller.left || this.controller.right) {
                if(this.vel < this.maxSpeed) {
                    this.vel += this.acceleration;
                };
            }else{
                this.vel = this.speed;
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

    get centerX() {
        return this.x + this.w / 2;
    };

    get centerY() {
        return this.y + this.h / 2;
    };
};


/**
 *
 * @class Circle
 * @description Creates a Circle
 */

class Circle extends Reflex {
    /**
     * 
     * @param {Number} x X pos
     * @param {Number} y Y pos
     * @param {Number} r Radius
     * @param {String} color A hex color without the #
     *
     * @param {Object} [options={}] Option object, holds many different options
     * @param {Object} [options.movement={}] Movement object, holds movements options
     * @param {String} [options.movement.type="TopDown"] W A S D UP DOWN LEFT RIGHT
     * @param {String} [options.movement.type="Jump"] W SPACE UP
     * @param {String} [options.movement.type="LeftRight"] A D LEFT RIGHT
     * @param {String} [options.movement.type="UpDown"] W D
     * @param {Number} [options.movement.speed=2.5] Speed of Circle
     * @param {Number} [options.movement.acceleration=0.15] Acceleration of Circle
     * @param {Number} [options.movement.maxSpeed=0.4] Max speed of Circle, Only needed if acceleration is present
     */
    constructor(x, y, r, color, options) {
        super(ReflexConfig);
        this.x = x;
        this.y = y;
        this.r = r;

        this.color = color;

        options = options || undefined;

        this.options = options;

        this.controller = {
            up: false,
            down: false,
            left: false,
            right: false
        };

        this.speed = this.options.movement.speed;
        this.vel = this.options.movement.speed;
        this.acceleration = this.options.movement.acceleration;
        this.maxSpeed = this.options.movement.maxSpeed;

        if(this.acceleration != undefined && this.maxSpeed == undefined) throw "acceleration is defined while maxSpeed is undefined";

        window.addEventListener("keydown", (e) => {this.keyListener(e)});
        window.addEventListener("keyup", (e) => {this.keyListener(e)});
    };

    /**
     * @description Draws circle to canvas
     */

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();

        // acceleration

        if(this.acceleration != undefined && this.maxSpeed != undefined) {
            if(this.controller.up || this.controller.down || this.controller.left || this.controller.right) {
                if(this.vel < this.maxSpeed) {
                    this.vel += this.acceleration;
                };
            }else{
                this.vel = this.speed;
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

    get centerX() {
        return this.x + this.r / 2;
    };

    get centerY() {
        return this.y + this.r / 2;
    };


};

/**
 *
 * @class RoundRect
 * @description Creates a Round Rectangle
 */

class RoundRect extends Reflex {
    /**
     * 
     * @param {Number} x X pos
     * @param {Number} y Y pos
     * @param {Number} w Width
     * @param {Number} h Height
     * @param {Number} r Radius
     * @param {String} color A hex color without the #
     *
     * @param {Object} [options={}] Option object, holds many different options
     * @param {Object} [options.movement={}] Movement object, holds movements options
     * @param {String} [options.movement.type="TopDown"] W A S D UP DOWN LEFT RIGHT
     * @param {String} [options.movement.type="Jump"] W SPACE UP
     * @param {String} [options.movement.type="LeftRight"] A D LEFT RIGHT
     * @param {String} [options.movement.type="UpDown"] W D
     * @param {Number} [options.movement.speed=2.5] Speed of RoundRect
     * @param {Number} [options.movement.acceleration=0.15] Acceleration of RoundRect
     * @param {Number} [options.movement.maxSpeed=0.4] Max speed of RoundRect, Only needed if acceleration is present
     */
    constructor(x, y, w, h, r, color, options) {
        super(ReflexConfig);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.color = color;

        options = options || undefined;

        this.options = options;

        this.controller = {
            up: false,
            down: false,
            left: false,
            right: false
        };

        this.speed = this.options.movement.speed;
        this.vel = this.options.movement.speed;
        this.acceleration = this.options.movement.acceleration;
        this.maxSpeed = this.options.movement.maxSpeed;

        if(this.acceleration != undefined && this.maxSpeed == undefined) throw "acceleration is defined while maxSpeed is undefined";

        window.addEventListener("keydown", (e) => {this.keyListener(e)});
        window.addEventListener("keyup", (e) => {this.keyListener(e)});
    };

    /**
     * @description Draws roundRect to canvas
     */

    draw() {
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

        // acceleration

        if(this.acceleration != undefined && this.maxSpeed != undefined) {
            if(this.controller.up || this.controller.down || this.controller.left || this.controller.right) {
                if(this.vel < this.maxSpeed) {
                    this.vel += this.acceleration;
                };
            }else{
                this.vel = this.speed;
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


};




//#endregion

//#region Particles

/**
 *
 *
 * @class Particle
 * @description Creates a Particle
 */

class Particle extends Reflex {

    /**
     * 
     * @description Creates an instance of a Particle
     * @param {String} graphic Hex color without "#", link, or file path.
     * @param {String} [shape] Shape of particle. Circle, Rect, or RoundRect. If graphic is a link/file shape is ignored. Optional.
     * @param {String} [w] Width of rect or round rect. Required for rect and round rect. Ignored if graphic is link/file.
     * @param {String} [h] Height of rect or round rect. Required for rect and round rect. Ignored if graphic is link/file.
     * @param {String} [r] Radius of round rect or circle. Required for circle and round rect. Ignored if graphic is link/file.
     * @memberof Particle
     */

    constructor(graphic, shape, w, h, r) {
        super(ReflexConfig);
        this.graphic = graphic;
        this.graphicType;


        shape = shape || undefined;
        this.shape = shape;
        this.shape = String.toLowerCase(this.shape);

        w = w || undefined;
        h = h || undefined;
        h = h || undefined;

        this.w = w;
        this.h = h;
        this.r = r;

        // check if all required params are there for a shape

        if(this.shape == "rect" && this.w == undefined || this.h == undefined) throw `Particle shape is rect while w or h is undefined`;
        if(this.shape == "roundrect" && this.w == undefined || this.h == undefined || this.r == undefined) throw `Particle shape is roundrect while w or h or r is undefined`;
        if(this.shape == "circle" && this.r == undefined) throw `Particle shape is circle while r is undefined`;

        // convert HTML to Hex if possible

        if(this.nameTohex(this.graphic)) {
            this.graphic = this.nameTohex(this.graphic); 
            this.graphicType = "hex";
        };

        // detect if it is rgb and if it throw

        if(this.graphic.includes("rgb")) throw `Particle graphic includes rgb. Use hex colors without "#" instead.`;

        // detect if it is a file/link

        if(this.graphic.includes("/")) {
            this.graphicType = "file"
            this.shape = undefined;
        };

        // replace # if found
        // only if it is a hex

        if(this.graphicType == "hex") {
            this.graphic.replace("#", "");
        };

    };
    
    /**
     * @description Draws particle
     */

    draw() {
        switch(this.shape) {
                case "circle":
                    this.ctx.beginPath();
                    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
                    this.ctx.fillStyle = this.graphic;
                    this.ctx.fill();
                break;

                case "rect":
                    this.ctx.fillStyle = this.graphic;
                    this.ctx.fillRect(this.x, this.y, this.w, this.h);
                break;

                case "roundrect":
                    this.ctx.fillStyle = this.graphic;
                    this.ctx.roundRect(-100, -100, this.w, this.h, this.r).fill();
                break;

                case undefined:
                    var imgObj = new Image();
                    imgObj.src = this.imgPath;
                    this.ctx.drawImage(imgObj, this.x, this.y, this.w, this.h);
                break;
                
                default:
                   throw `Particle shape is not a circle, roundrect, rect, or link/file. Particle shape is ${this.shape}`;
                break;
            };
    };


};

/**
 * @class ParticleEmitter
 * @description Emits particles
 */

class ParticleEmitter extends Reflex {

    /**
     * @description Emits particles from a particle
     * @param {Particle} particle An instance of the Particle Class
     * @param {Number} x X pos
     * @param {Number} y Y pos
     * @param {Object} options Option object, holds many different options
     * @param {String} [options.axis] "x" or "y". Direction of particle emitter force
     * @param {Number} [options.force] The force being applied. Negative number is left for axis = x, up for axis = y. Positive number is right for axis = x, down for axis = y.
     *                                  Does not work if options.attached is present
     * @param {Sprite} [options.attached] If you want to attach the particle emitter to a sprite.
     * @param {Number} options.amount Amount of particles
     * 
     * @memberof ParticleEmitter
     */

    constructor(particle, x, y, options) {
        super(ReflexConfig);
        this.particle = particle;
        this.x = x;
        this.y = y;
        this.options = options;
        this.emmiting = false;

        this.axis = undefined;
        this.force = undefined;
        this.attached = undefined;
        this.amount = options.amount;

        options.axis = options.axis || undefined;
        options.force = options.force || undefined;
        options.attached = options.attached || undefined;

        if(options.axis != undefined) this.axis = options.axis;
        if(options.force != undefined) this.force = options.force;
        if(options.attached != undefined) this.attached = options.attached;

        if(this.amount == undefined) throw `ParticleEmitter amount is undefined`;
        if(typeof this.amount != "number") throw `ParticleEmitter amount is not typeof number and is typeof ${typeof this.amount}`;

        this.list = [];

    };

    /**
     * @description Makes ParticleEmitter start emitting
     */

    emit() {
        for (let i = 0; i < this.amount; i++) {
            this.list.push(this.particle);
        };
        this.emmiting = true;
        if(this.emmiting == true) {
            if(this.attached != undefined) {
                this.x = this.attached.x;
                this.y = this.attached.y;
            };
            if(this.attached == undefined && this.force != undefined) {
                this.addForce(this.axis, this.force);
            };

            for (let i = 0; i < this.list.length; i++) {
                this.list[i].draw();
            };
            
        };
        
    };

    /**
     * @description Makes ParticleEmitter stop emitting
     */

    stop() {
        this.emmiting = false;
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
};

//#endregion


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