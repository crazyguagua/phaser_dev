window.onload = function () {

    var game = new Phaser.Game(800, 400, Phaser.AUTO, '', { preload: preload ,create:create,update:update});
    var guy = null ,dnf=null;
    function preload() {
        game.load.atlasJSONHash('cityscene', 'res/cityscene.png', 'res/cityscene.json');
        game.load.atlasJSONHash('dnf','res/dnf/dnf.png','res/dnf/dnf.json')
    }

    function create(){
        var background = game.add.sprite(0,0,'cityscene','background');

        guy = game.add.sprite(0, 180, 'cityscene', 'capguy/walk/0001');
        dnf = game.add.sprite(100,200,'dnf','1')
        guy.scale.setTo(.5,.5);
        // animation
        guy.animations.add('walk', Phaser.Animation.generateFrameNames('capguy/walk/', 1, 8, '', 4), 10, true, false);
        guy.animations.play('walk');

        dnf.animations.add('dnf', Phaser.Animation.generateFrameNames('', 1, 6, '', 'dnf'), 10, true, false);
        dnf.animations.play('dnf');
    }

    function update(){

        guy.x+=1;
        if(guy.x>800){
            guy.x=0;
        }
    }

};