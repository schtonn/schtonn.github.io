'use strict';
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div'), game_state = {
        main: function () {
        }
    };
game_state.main.prototype = {
    preload: function () {
        this.game.stage.backgroundColor = '#71c5cf', this.game.load.image('bird', '/../images/bird.png'), this.game.load.image('pipe', '/../images/pipe.png');
    },
    create: function () {
        this.bird = this.game.add.sprite(100, 245, 'bird'), this.bird.body.gravity.y = 1000, this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.jump, this), this.pipes = game.add.group(), this.pipes.createMultiple(20, 'pipe'), this.timer = this.game.time.events.loop(1500, this.add_row_of_pipes, this), this.score = 0;
        this.label_score = this.game.add.text(20, 20, '0', {
            font: '30px Arial',
            fill: '#ffffff'
        });
    },
    update: function () {
        0 == this.bird.inWorld && this.restart_game(), this.game.physics.overlap(this.bird, this.pipes, this.restart_game, null, this);
    },
    jump: function () {
        this.bird.body.velocity.y = -350;
    },
    restart_game: function () {
        this.game.time.events.remove(this.timer), this.game.state.start('main');
    },
    add_one_pipe: function (t, e) {
        var i = this.pipes.getFirstDead();
        i.reset(t, e), i.body.velocity.x = -200, i.outOfBoundsKill = !0;
    },
    add_row_of_pipes: function () {
        for (var t = Math.floor(5 * Math.random()) + 1, e = 0; e < 8; e++)
            e != t && e != t + 1 && this.add_one_pipe(400, 60 * e + 10);
        this.score += 1, this.label_score.content = this.score;
    }
}, game.state.add('main', game_state.main), game.state.start('main');