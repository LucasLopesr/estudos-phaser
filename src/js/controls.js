controls = {
    newControls: function () {
        this.controls = game.input.keyboard.createCursorKeys();

        return this.controls;
    },

    isLeftPress: function () {
        return this.controls.left.isDown && !this.controls.right.isDown;
    },

    isRightPress: function () {
        return this.controls.right.isDown && !this.controls.left.isDown;
    },

    isUpPress: function () {
        return this.controls.up.isDown && !this.controls.down.isDown;
    },
    isDownPress: function () {
        return this.controls.down.isDown && !this.controls.up.isDown;
    }

}