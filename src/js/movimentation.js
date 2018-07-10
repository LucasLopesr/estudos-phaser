movimentation = {
    move: function (player) {

        if (controls.isLeftPress()) {
            this.toLeft(player);
        }
        else if (controls.isRightPress()) {
            this.toRight(player);
        }
        else if (controls.isUpPress()) {
            this.toUp(player);
        }
        else if (controls.isDownPress()) {
            this.toDown(player);
        }
    },
    isPlayerStoped: function (player) {
        return player.body.velocity.x === 0
            && player.body.velocity.y === 0;
    },

    toAnimateToDirection: function (player) {
        switch (player.direction) {
            case "left":
                player.animations.play('goLeft'); break;
            case "right":
                player.animations.play('goRight'); break;
            case "up":
                player.animations.play('goUp'); break;
            case "down":
                player.animations.play('goDown'); break;
        }
    },

    stopAnimation: function (player) {
        player.animations.stop();
    },

    toLeft: function (player) {
        player.body.velocity.x = -100;
        player.direction = "left";
    },

    toRight: function (player) {
        player.body.velocity.x = 100;
        player.direction = "right";
    },

    toUp: function (player) {
        player.body.velocity.y = -100;
        player.direction = "up";
    },

    toDown: function (player) {
        player.body.velocity.y = 100;
        player.direction = "down";
    },
    stop: function (player) {
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
    }
}