var bootState = {
    preload: () => {
        game.load.image('progressBar','src/img/progressBar.png');
    },

    create: () => {
        game.state.start('load');
    }
};