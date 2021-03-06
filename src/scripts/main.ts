import * as Phaser from 'phaser';
import { MainScene } from './scenes/mainScene';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export class GameScene extends Phaser.Scene {
    private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };

    constructor() {
        super(sceneConfig);
    }

    public create() {
        this.square = this.add.rectangle(200, 200, 50, 50, 0xFFFFFF) as any;
        this.physics.add.existing(this.square);
    }

    public update() {
        const cursorKeys = this.input.keyboard.createCursorKeys();

        if (cursorKeys.up.isDown) {
            this.square.body.setVelocityY(-100);
        } else if (cursorKeys.down.isDown) {
            this.square.body.setVelocityY(100);
        } else {
            this.square.body.setVelocityY(0);
        }

        if (cursorKeys.right.isDown) {
            this.square.body.setVelocityX(100);
        } else if (cursorKeys.left.isDown) {
            this.square.body.setVelocityX(-100);
        } else {
            this.square.body.setVelocityX(0);
        }
    }
}

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Sample',

    type: Phaser.AUTO,

    scale: {
        width: window.innerWidth - 10,
        height: window.innerHeight - 15,
    },

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: true,
        },
    },

    parent: 'game',
    backgroundColor: '#000000',

    scene: MainScene,
};

export const game = new Phaser.Game(gameConfig);