/**
 * Cada uno de los elementos del juego
 */
class Entity {
    /**
     * Inicializa un elemento del juego
     * @param game {Game} La instancia del juego al que pertenece el elemento
     * @param width {Number} Ancho del elemento
     * @param height {Number} Alto del elemento
     * @param x {Number} Posición horizontal del elemento
     * @param y {Number} Posición vertical del elemento
     * @param speed {Number} Velocidad del elemento
     * @param myImage {String} Ruta de la imagen del elemento
     */
    constructor (game, width, height, x, y, speed, myImage) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.myImage = new Image();
        this.myImage.src = myImage;
        this.myImage.className =  this.constructor.name;
        this.myImage.style.position = "absolute";
        this.myImage.style.height = this.height === "auto" ? "auto" : `${this.height}px`;
        this.myImage.style.width = this.width === "auto" ? "auto" : `${this.width}px`;
        this.myImage.style.top = `${this.y}px`;
        this.myImage.style.left = `${this.x}px`;
        document.body.appendChild(this.myImage);
    }

    /**
     * Actualiza la posición del elemento en la pantalla
     */
    render () {
        this.myImage.style.top = `${this.y}px`;
        this.myImage.style.left = `${this.x}px`;
    }
}