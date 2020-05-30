class Boss extends Opponent {

    constructor(game){
        super(game);

        this.speed = BOSS_SPEED;
        this.myImageDead = BOSS_PICTURE_DEAD;
        this.myImage.src = BOSS_PICTURE;

    }
}