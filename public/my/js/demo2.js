var gameState = {
    sprite:null,
    preload: function () {
        game.load.spritesheet('mario', 'res/images/marioall.jpg', 32, 48);
        game.load.image('pikaqiu', 'res/images/soul.png');
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.backgroundColor = '#0072bc';

        this.sprite = game.add.sprite(10, 10, 'pikaqiu');
        this.sprite.anchor.setTo(0.5, 0.5);

        //  Enable Arcade Physics for the sprite
        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

        //  Tell it we don't want physics to manage the rotation
       this.sprite.body.allowRotation = false;
        
    },
    update:function(){

         this.sprite.rotation = game.physics.arcade.moveToPointer(this.sprite, 60, game.input.activePointer, 500);
    },
    render:function(){
        game.debug.spriteInfo(this.sprite, 32, 32);
    }
};
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', gameState);

