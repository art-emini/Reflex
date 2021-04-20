

# 1.0.0


- [x] Merge object classes into RigidBody Class
- [x] Add Sound class
- [x] Add ProximitySound class
- [x] Add Reflex Stack for different props
- [x] Add RigidBody.hasShadow and RigidBody.selfShadow
- [x] Add Shadow Class and Shadow.appendTo(RigidBody), check if rigidbody with .type
- [x] Add Particles class which creates, emits, and draws particles in one class
- [x] Add Particles.wobble(speed) which wobbles the particles at a certain speed
- [x] Add Particle presets for Particles.wobble
- [x] Add Particles.animate(preset, speed) which animates the particales at a preset like explosion and smoke
- [x] Add Particles.destroy(amount?) which destroys all particles or a certain amount of particles
- [x] Add Background.stopWobble() which stops the current wobble
- [x] Add RigidBody.on(event, callback) which is a listener that listens for events like move, colorChange, and imageChange
- [x] Add Background.wobble(intenstiy) to wobble/move over time slightly
- [x] Add Background.addForce(axis, force) to move the background
- [x] Add Reflex.started to check if loop has started or not
- [x] Add start msg
- [x] Add othersAttached array
- [x] Add attach() to attach an object to another
- [x] Add detach() to detach an object from another
- [x] Add this.type to say rigid body or anything else (for future plans)
- [x] Fix sprite & background performance impact as draw creates new / DOM Nodes all the time
- - [x] Fixes flashing effect for sprites and background


# In between 1.0.0 -> 2.0.0

- [ ] Add rect, round rect, and sprite collision detection and response
- [ ] Add circle collision detection and response
- [ ] Add global entity management 
- - [ ] Add support for all object classes, particles, and backgrounds
- [ ] Add better ProximitySound 
- [ ] Add SpriteSheet support
- - [ ] Add SpriteSheet class to load and return a spritesheet object
- - [ ] Add RigidBody imgPath could be a SpriteSheet class by using an object
- - [ ] Add RigidBody imgPath spritesheet detection with imgPath.type to specify how many images per row, how big in width and height one item is, etc..
- [ ] Add ProximitySound.attachTo(RigidBody)
- [ ] Add ProximitySound.detach(RigidBody)
- [ ] Add Text class which creates text on the canvas
- [ ] Add ButtonUI class which creates a button on the canvas
- [x] Update docs
- [x] Add import/export


# 2.0.0

__Future__ _Plans_

__Many__ _updates in between 1.0.0 -> 2.0.0_

- [ ] Add Camera Class
- [ ] Add Camera Support for Rigid Bodies, Background, Particles, presets, and more
- [ ] Add dynamic lighting with rays
- [ ] Add Sound Sprites into Sound Class
- [ ] Add tilemap support
- - [ ] Add Tilemap class
- - [ ] Add Tilemap RigidBody
- - [ ] Add Tilemap collisions and physics
- [ ] Add more Particle Animations
- [ ] Add Particles.addForce
