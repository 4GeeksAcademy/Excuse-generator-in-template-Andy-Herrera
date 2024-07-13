document.getElementById('generate').addEventListener('click', generateExcuse);

function generateExcuse() {
    const subjects = ["My dog", "My grandma", "The postman", "An alien"];
    const actions = ["ate", "lost", "destroyed", "hid"];
    const objects = ["my homework", "my keys", "the remote control", "my car"];

    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];

    const excuse = `${subject} ${action} ${object}.`;
    document.getElementById('excuse').innerText = excuse;
}
