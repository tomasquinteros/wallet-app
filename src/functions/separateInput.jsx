// Campo numeros
// Poner cursor en el campo numeros
export default function SeparateNums(numeros) {
    numeros.onKeyUp = function (e) {
        // Permitir la tecla para borrar
        if (e.key == 'Backspace') return true;

        // Permitir flecha izquierda
        if (e.key == 'ArrowLeft') return true;

        // Permitir flecha derecha
        if (e.key == 'ArrowRight') return true;

        // Bloquear tecla de espacio
        if (e.key == ' ') return false;

        // Bloquear tecla si no es un numero
        if (isNaN(e.key)) return false;
    };

    numeros.onKeyUp = function () { numeros.value = numeros.value.replace(/([0-9]{4})/g, '$1 ') };
}