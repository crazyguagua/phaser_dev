var GameState=function(){};
GameState.prototype={
    constructor:GameState,
    preload:function(){
        // this.game.load.spritesheet('player', 'assets/greenninja.png', 38, 48);
        this.game.load.tilemap('tilemap', 'assets/tile.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'assets/tmw_desert_spacing.png');
    },
    create:function(){
        //Start the Arcade Physics systems
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
        //Change the background colour
        this.game.stage.backgroundColor = "#a9f0ff";
    
        //Add the tilemap and tileset image. The first parameter in addTilesetImage
        //is the name you gave the tilesheet when importing it into Tiled, the second
        //is the key to the asset in Phaser
        this.map = this.game.add.tilemap('tilemap');
        this.map.addTilesetImage('tmw_desert_spacing', 'tiles');

        
    
        //Add both the background and ground layers. We won't be doing anything with the
        //GroundLayer though
        //this.backgroundlayer = this.map.createLayer('BackgroundLayer');
       this.groundLayer = this.map.createLayer('floor');
       this.wallLayer = this.map.createLayer('wall');
        //Before you can use the collide function you need to set what tiles can collide
        //this.map.setCollisionBetween(1, 100, true, 'GroundLayer');
    
        //Change the world size to match the size of this layer
        this.groundLayer.resizeWorld();

    },
    update:function(){
        this.game.camera.x+=1;
    }
}
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', GameState);