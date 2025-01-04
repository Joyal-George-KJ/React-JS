

// Module Pattern Assignment

const taskManager = (tasks = ["logrithm", 'Algibra', 'Arithmetics']) => {
    const managers = {
        addTask: (newTask) => {
            tasks.push(newTask);
        },
        removeTask: (task) => {
            tasks.splice(tasks.indexOf(task), 1);
        },
        displayTasks: () => {
            console.log(tasks);
        }
    }
    return managers;
}

const managers = taskManager([1, 2, 2, 5]);

managers.displayTasks();
managers.addTask("base");
managers.addTask('logic');
managers.displayTasks();
managers.removeTask("Algibra");
managers.displayTasks();