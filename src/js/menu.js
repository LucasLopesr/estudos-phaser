var menuState = {
    create: () => {
        console.log("menu");
        var textoLabirinto = game.add.text(
            game.world.centerX,
            170,
            '...LABIRINTO...', {
                font: '30px emulogic',
                fill: '#fff'
            });
        textoLabirinto.anchor.set(0.5);

        var textoPressStart = game.add.text(
            game.world.centerX,
            550,
            '...PRESS START...', {
                font: '20px emulogic',
                fill: '#fff'
            });
        textoPressStart.anchor.set(0.5);
        game.add.tween(
            textoPressStart
        ).to({
            y: 250
        }, 1000).start();

        game.time.events.add(1000, () => {
            let enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            enterKey.onDown.addOnce(() => {
                game.state.start('stage1');
                console.log("startGame");
            });
        }, this);
    },
};