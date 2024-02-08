const maxShapes = 39; // Maximum number of shapes
const shapes = [];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[getRandomInt(0, 15)];
    }
    return color;
}
function createRandomShape() {
    if (shapes.length >= maxShapes) {
        const removedShape = shapes.shift();
        removedShape.remove();
    }
    const shape = document.createElement('div');
    shape.className = 'shape';
    shape.style.borderColor = getRandomColor();
    shape.style.top = getRandomInt(0, window.innerHeight) + 'px';
    shape.style.left = getRandomInt(0, window.innerWidth) + 'px';
    shape.style.borderRadius = getRandomInt(0, 50) + '%';
    document.body.appendChild(shape);
    shapes.push(shape);
}
setInterval(createRandomShape, 500);
