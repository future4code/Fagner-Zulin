// Exercício 3
const fs = require("fs");
const tasks = JSON.parse(fs.readFileSync("tasks.json").toString("utf-8"));
const newTask = process.argv[2];
tasks.tasks.push(newTask);
fs.writeFileSync("tasks.json", JSON.stringify(tasks));
console.table(tasks.tasks);
