
export default class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene: Phaser.Scene) {
        super(scene, 600, 100, null);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);

        this.scene = scene;
    }

    update(cursorKeys: any) {

        // controls left & rights
        if (cursorKeys.left.isDown) {
            this.setVelocityX(-200);
        } else if (cursorKeys.right.isDown) {
            this.setVelocityX(200);
        } else {
            this.setVelocityX(0);
        }

        // controls up
        if (cursorKeys.up.isDown && this.body.blocked.down) {
            this.setVelocityY(-400);
        } 
    }
} 