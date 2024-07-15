// Añade un event listener al botón con el id 'generate' para que ejecute la función 'generateExcuse' cuando se haga clic en él.
document.getElementById('generate').addEventListener('click', generateExcuse);

// Función para generar una excusa aleatoria
function generateExcuse() {
    // Definición de arrays con posibles partes de la excusa
    const subjects = ["My dog", "My grandma", "The postman", "An alien"];
    const actions = ["ate", "lost", "destroyed", "hid"];
    const objects = ["my homework", "my keys", "the remote control", "my car"];

    // Selección aleatoria de cada parte de la excusa
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];

    // Creación de la excusa concatenando las partes seleccionadas
    const excuse = `${subject} ${action} ${object}.`;

    // Muestra la excusa generada en el elemento con el id 'excuse'
    document.getElementById('excuse').innerText = excuse;
}
