# Reflex

A Javascript game engine.


[MIT LICENSE](./LICENSE)

## To-do

- [x] Create Sprite basic class
- [x] Create Rect basic class
- [x] Create Particle basic class
- [x] Create ParticleEmitter basic class

- [ ] Add movement to Sprite class
- [ ] Add movement to Rect class
- [ ] Add Circle class
- [ ] Add RoundRect class

More soon..

## Download

***Do Not Clone To Download***

***Not complete***

1. [Download the latest release.](https://github.com/ksplatdev/Reflex/releases/latest)
2. Unzip and copy to your project.
3. Link Reflex.js to the bottom of your html body.
4. Done.

[Read The Docs](#Docs)

<br>

<b id="docs">Docs</b>

## Classes

<dl>
<dt><a href="#Reflex">Reflex</a></dt>
<dd></dd>
<dt><a href="#Sprite">Sprite</a></dt>
<dd></dd>
<dt><a href="#Rect">Rect</a></dt>
<dd></dd>
<dt><a href="#Particle">Particle</a></dt>
<dd></dd>
<dt><a href="#ParticleEmitter">ParticleEmitter</a></dt>
<dd></dd>
</dl>

<a name="Reflex"></a>

## Reflex
**Kind**: global class  

* [Reflex](#Reflex)
    * [new Reflex()](#new_Reflex_new)
    * [.start(config)](#Reflex+start)
    * [.nameTohex(colour)](#Reflex+nameTohex) ⇒

<a name="new_Reflex_new"></a>

### new Reflex()
Main Reflex Class

<a name="Reflex+start"></a>

### reflex.start(config)
Starts Reflex by a passed config object.

**Kind**: instance method of [<code>Reflex</code>](#Reflex)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | <code>Object</code> |  | Config Object. |
| config.loop | <code>function</code> |  | Main loop |
| [config.debug] | <code>Boolean</code> | <code>false</code> | If enabled, Reflex will console log anything it needs to. Errors will be thrown regardless. Optional, off by default. |

<a name="Reflex+nameTohex"></a>

### reflex.nameTohex(colour) ⇒
Converts HTML color names to hex

**Kind**: instance method of [<code>Reflex</code>](#Reflex)  
**Returns**: Hex Color  

| Param | Type | Description |
| --- | --- | --- |
| colour | <code>String</code> | Color name |

<a name="Sprite"></a>

## Sprite
**Kind**: global class  

* [Sprite](#Sprite)
    * [new Sprite()](#new_Sprite_new)
    * _instance_
        * [.draw()](#Sprite+draw)
        * [.keyListener()](#Sprite+keyListener)
        * [.addForce(axis, force)](#Sprite+addForce)
    * _static_
        * [.Sprite](#Sprite.Sprite)
            * [new Sprite(x, y, w, h, imgPath, [options])](#new_Sprite.Sprite_new)

<a name="new_Sprite_new"></a>

### new Sprite()
Creates a sprite

<a name="Sprite+draw"></a>

### sprite.draw()
Draws sprite to canvas

**Kind**: instance method of [<code>Sprite</code>](#Sprite)  
<a name="Sprite+keyListener"></a>

### sprite.keyListener()
Listens for key presses

**Kind**: instance method of [<code>Sprite</code>](#Sprite)  
<a name="Sprite+addForce"></a>

### sprite.addForce(axis, force)
Adds a force to an axis.

**Kind**: instance method of [<code>Sprite</code>](#Sprite)  

| Param | Type | Description |
| --- | --- | --- |
| axis | <code>String</code> | The axis of the force being applied. "x" or "y". |
| force | <code>Number</code> | The force being applied. Negative number is left for axis = x, up for axis = y. Positive number is right for axis = x, down for axis = y. |

<a name="Sprite.Sprite"></a>

### Sprite.Sprite
**Kind**: static class of [<code>Sprite</code>](#Sprite)  
<a name="new_Sprite.Sprite_new"></a>

#### new Sprite(x, y, w, h, imgPath, [options])
Creates an instance of Sprite.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>Number</code> |  | X pos |
| y | <code>Number</code> |  | Y pos |
| w | <code>Number</code> |  | Width |
| h | <code>Number</code> |  | Height |
| imgPath | <code>String</code> |  | Img path |
| [options] | <code>Object</code> | <code>{}</code> | Option object, holds many different options |
| [options.movement] | <code>Object</code> | <code>{}</code> | Movement object, holds movements options |
| [options.movement.type] | <code>String</code> | <code>&quot;TopDown&quot;</code> | W A S D UP DOWN LEFT RIGHT |
| [options.movement.type] | <code>String</code> | <code>&quot;Jump&quot;</code> | W SPACE UP |
| [options.movement.type] | <code>String</code> | <code>&quot;LeftRight&quot;</code> | A D LEFT RIGHT |
| [options.movement.type] | <code>String</code> | <code>&quot;UpDown&quot;</code> | W D |
| [options.movement.speed] | <code>Number</code> | <code>2.5</code> | Speed of Sprite |

<a name="Rect"></a>

## Rect
**Kind**: global class  

* [Rect](#Rect)
    * [new Rect()](#new_Rect_new)
    * [.addForce(axis, force)](#Rect+addForce)

<a name="new_Rect_new"></a>

### new Rect()
Creates a Rectangle

<a name="Rect+addForce"></a>

### rect.addForce(axis, force)
Adds a force to an axis.

**Kind**: instance method of [<code>Rect</code>](#Rect)  

| Param | Type | Description |
| --- | --- | --- |
| axis | <code>String</code> | The axis of the force being applied. "x" or "y". |
| force | <code>Number</code> | The force being applied. Negative number is left for axis = x, up for axis = y. Positive number is right for axis = x, down for axis = y. |

<a name="Particle"></a>

## Particle
**Kind**: global class  

* [Particle](#Particle)
    * [new Particle()](#new_Particle_new)
    * [.Particle](#Particle.Particle)
        * [new Particle(graphic, [shape], [w], [h], [r])](#new_Particle.Particle_new)

<a name="new_Particle_new"></a>

### new Particle()
Creates a Particle

<a name="Particle.Particle"></a>

### Particle.Particle
**Kind**: static class of [<code>Particle</code>](#Particle)  
<a name="new_Particle.Particle_new"></a>

#### new Particle(graphic, [shape], [w], [h], [r])
Creates an instance of a Particle


| Param | Type | Description |
| --- | --- | --- |
| graphic | <code>String</code> | Hex color without "#", link, or file path. |
| [shape] | <code>String</code> | Shape of particle. Circle, Rect, or RoundRect. If graphic is a link/file shape is ignored. Optional. |
| [w] | <code>String</code> | Width of rect or round rect. Required for rect and round rect. Ignored if graphic is link/file. |
| [h] | <code>String</code> | Height of rect or round rect. Required for rect and round rect. Ignored if graphic is link/file. |
| [r] | <code>String</code> | Radius of round rect or circle. Required for circle and round rect. Ignored if graphic is link/file. |

<a name="ParticleEmitter"></a>

## ParticleEmitter
**Kind**: global class  

* [ParticleEmitter](#ParticleEmitter)
    * [new ParticleEmitter()](#new_ParticleEmitter_new)
    * _instance_
        * [.emit()](#ParticleEmitter+emit)
        * [.stop()](#ParticleEmitter+stop)
        * [.addForce(axis, force)](#ParticleEmitter+addForce)
    * _static_
        * [.ParticleEmitter](#ParticleEmitter.ParticleEmitter)
            * [new ParticleEmitter(particle, x, y, options)](#new_ParticleEmitter.ParticleEmitter_new)

<a name="new_ParticleEmitter_new"></a>

### new ParticleEmitter()
Emits particles

<a name="ParticleEmitter+emit"></a>

### particleEmitter.emit()
Makes ParticleEmitter start emitting

**Kind**: instance method of [<code>ParticleEmitter</code>](#ParticleEmitter)  
<a name="ParticleEmitter+stop"></a>

### particleEmitter.stop()
Makes ParticleEmitter stop emitting

**Kind**: instance method of [<code>ParticleEmitter</code>](#ParticleEmitter)  
<a name="ParticleEmitter+addForce"></a>

### particleEmitter.addForce(axis, force)
Adds a force to an axis.

**Kind**: instance method of [<code>ParticleEmitter</code>](#ParticleEmitter)  

| Param | Type | Description |
| --- | --- | --- |
| axis | <code>String</code> | The axis of the force being applied. "x" or "y". |
| force | <code>Number</code> | The force being applied. Negative number is left for axis = x, up for axis = y. Positive number is right for axis = x, down for axis = y. |

<a name="ParticleEmitter.ParticleEmitter"></a>

### ParticleEmitter.ParticleEmitter
**Kind**: static class of [<code>ParticleEmitter</code>](#ParticleEmitter)  
<a name="new_ParticleEmitter.ParticleEmitter_new"></a>

#### new ParticleEmitter(particle, x, y, options)
Emits particles from a particle


| Param | Type | Description |
| --- | --- | --- |
| particle | [<code>Particle</code>](#Particle) | An instance of the Particle Class |
| x | <code>Number</code> | X pos |
| y | <code>Number</code> | Y pos |
| options | <code>Object</code> | Option object, holds many different options |
| [options.axis] | <code>String</code> | "x" or "y". Direction of particle emitter force |
| [options.force] | <code>Number</code> | The force being applied. Negative number is left for axis = x, up for axis = y. Positive number is right for axis = x, down for axis = y.                                  Does not work if options.attached is present |
| [options.attached] | [<code>Sprite</code>](#Sprite) | If you want to attach the particle emitter to a sprite. |
| options.amount | [<code>Number</code>] | Amount of particles |

