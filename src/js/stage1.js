var stage1State = {
    create: function () {
        game.add.sprite(0, 0, 'bg');
        //iniciar controles
        this.controls = controls.newControls();
        this.maze = maps.getMapStage1();

        this.blocks = game.add.group();
        this.blocks.enableBody = true;

        this.coinPositions = [];

        for (var row in this.maze) {
            for (var col in this.maze[row]) {
                var tile = this.maze[row][col];

                var x = col * 50;
                var y = row * 50;

                if (tile === 1) {
                    var block = this.blocks.create(x, y, 'block');
                    block.body.immovable = true;
                } else if (tile === 2) {
                    this.player = game.add.sprite(x + 25, y + 25, 'player');
                    this.player.anchor.set(.5);
                    game.physics.arcade.enable(this.player);
                    this.player.animations.add('goDown', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
                    this.player.animations.add('goUp', [8, 9, 10, 11, 12, 13, 14, 15], 12, true);
                    this.player.animations.add('goLeft', [16, 17, 18, 19, 20, 21, 22, 23], 12, true);
                    this.player.animations.add('goRight', [24, 25, 26, 27, 28, 29, 30, 31], 12, true);
                } else if (tile === 3) {
                    var position = {
                        x: x + 25,
                        y: y + 25
                    };
                    this.coinPositions.push(position);
                }
            }
        }

        //Criar a moeda
        this.coin = {};
        this.coin.position = this.newPosition();
        this.coin = game.add.sprite(this.coin.position.x, this.coin.position.y, 'coin');
        this.coin.anchor.set(.5);
        this.coin.animations.add('spin', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true).play();
        game.physics.arcade.enable(this.coin);

        //coletar moeda
        this.coins = 0;
        this.txtCoins = game.add.text(15, 15, 'COINS: ' + this.getText(this.coins), { font: '15px emulogic', fill: '#fff' });
    },

    update: function () {
        game.physics.arcade.collide(this.player, this.blocks);
        game.physics.arcade.overlap(this.player, this.coin, this.getCoin, null, this);

        this.movePlayer();
    },

    getCoin: function () {
        this.coins++;
        this.txtCoins.text = 'COINS: ' + this.getText(this.coins);

        this.coin.position = this.newPosition();
    },

    getText: function (value) {
        if (value < 10) {
            return '00' + value.toString();
        }
        if (value < 100) {
            return '0' + value.toString();
        }
        return value.toString();
    },

    movePlayer: function () {
        movimentation.stop(this.player);
        movimentation.move(this.player);
        movimentation.toAnimateToDirection(this.player);
        if (movimentation.isPlayerStoped(this.player)) {
            movimentation.stopAnimation(this.player);
        }
    },

    newPosition: function () {
        do {
            var pos = this.coinPositions[Math.floor(Math.random() * this.coinPositions.length)];
        } while (this.coin.position === pos);

        return pos;
    }
};
