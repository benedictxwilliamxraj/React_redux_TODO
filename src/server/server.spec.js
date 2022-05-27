import { addNewTask, updateTask } from "./server";


(async function myFunc(){
    await  addNewTask({
        name:"Mytask",
        id:"123456"
    });

    await updateTask({
        id: "123456",
        name:"My Task updated"
    })
})();