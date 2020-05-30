const OPPONENT_HEIGHT = 5,
    OPPONENT_PICTURE = "ficheros/malo1.png",
    OPPONENT_PICTURE_DEAD = "ficheros/malo_muerto.png",
    OPPONENT_SPEED = 5,
    OPPONENT_WIDTH = 5,
    GAME_OVER_PICTURE = "assets/game_over.png",
    YOU_WIN_PICTURE = "assets/you_win.png",
    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 5,
    PLAYER_PICTURE = "ficheros/champi.png",
    PLAYER_PICTURE_DEAD = "ficheros/bueno_muerto.png",
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 5,
    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 20,
    SHOT_PICTURE_PLAYER = "ficheros/shot.png",
    SHOT_PICTURE_OPPONENT = "ficheros/bomba.png",
    SHOT_WIDTH = 1.5,
    PLAYER_LIVES = 3, //Número de vidas
    BOSS_PICTURE = "ficheros/jefe.png",
    BOSS_PICTURE_DEAD = "ficheros/jefe_muerto.png",
    BOSS_SPEED = 10;

function getRandomNumber (range) {
    return Math.floor(Math.random() * range);
}

function collision (div1, div2) {
    const a = div1.getBoundingClientRect(),
        b = div2.getBoundingClientRect();
    return !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);

}
var game;
document.addEventListener("DOMContentLoaded", () => {
        game = new Game();
        game.start();
        document.getElementById("pause").addEventListener("click", (e) => {
            game.pauseOrResume();
        });
    }
);