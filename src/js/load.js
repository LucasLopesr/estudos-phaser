var loadState = {
    preload: () => {
        console.log("preload load");
        var textoLoading = game.add.text(
            game.world.centerX,
            170,
            'CARREGANDO...', {
                font: '15px emulogic',
                fill: '#fff'
        });
        textoLoading.anchor.set(0.5);

        var progressBar = game.add.sprite(
            game.world.centerX, 
            200, 
            'progressBar'
        );
        progressBar.anchor.set(0.5);
        game.load.setPreloadSprite(progressBar);
        // carregando imagens
        game.load.image('bg','src/img/bg.png');
        game.load.image('block','src/img/block.png');
        game.load.image('end','src/img/end.png');
        game.load.image('part','src/img/part.png');
        // carregando sprites
        game.load.spritesheet('coin','src/img/coin.png',32,32);
        game.load.spritesheet('enemy','src/img/enemy.png',24,40);
        game.load.spritesheet('player','src/img/player.png',24,32);

        // carregando audios
        game.load.audio('getitem','src/sfx/getitem.ogg');
        game.load.audio('loseitem','src/sfx/loseitem.ogg');
    
        // physics
        game.physics.startSystem(Phaser.Physics.ARCADE);
    
    },

    create: () => {
        console.log("preload create");
        game.state.start('menu');
    }
};