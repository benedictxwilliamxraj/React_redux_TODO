import { addNewTask, updateTask } from "./server";


(async function myFunc(){
    await  addNewTask({
        name:"Mytask",
        id:"12345"
    });

    await updateTask({
        id: "12345",
        name:"My ben updated"
    })
})();