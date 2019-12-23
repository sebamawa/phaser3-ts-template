import FpsText from '../components/fpsText/fpsText';
import Player from '../components/player/player';

export class MainScene extends Phaser.Scene {
    fpsText: Phaser.GameObjects.Text;
    player: Player;
    cursors: any; //Phaser.Input.Keyboard.CursorKeys;

    constructor() {
        super({key: 'MainScene'});
    }

    create() {

        // display FPS
        this.fpsText = new FpsText(this);

        // cursors
        this.cursors = this.input.keyboard.createCursorKeys();

        // player
        this.player = new Player(this);
        
        // // display the Phaser.VERSION
        // this.add
        // .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        // color: '#FFFFFF',
        // fontSize: 24
        // })
        // .setOrigin(1, 0)
    }

    update() {
        this.fpsText.update();
        this.player.update(this.cursors);
    }
}