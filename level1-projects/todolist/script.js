const tasks = [] // where tasks will go

while(true) {
    // asking for user input
    let task = prompt("Enter a task (or type 'done' to finish)")
    
    // checking if user input is done or Done or DONE
    if (task.toLowerCase() === 'done'){
        break // if user inputs done, breaks out of the while loop
    }

    tasks.push(task) // adding user input to tasks
}

console.log("Your ToDo List")
// tasks.forEach((task, index) => {
//     console.log(`${index + 1}, ${task}`);
// })

for (let i = 0; i < tasks.length; i++){
    console.log(`${i + 1}. ${tasks[i]}`);
}
