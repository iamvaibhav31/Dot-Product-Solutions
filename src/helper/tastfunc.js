const addonconditons = (state, newtask) => {
     const { status } = newtask
     if (status === 'to-do') {
          state.TodoTasks.push(newtask)
     }

     if (status === 'doing') {
          state.DoingTasks.push(newtask)
     }

     if (status === 'done') {
          state.DoneTasks.push(newtask)
     }
};


const deleteonconditons = (state, id, status) => {

     if (status === 'to-do') {
          state.TodoTasks = state.TodoTasks.filter((t) => t.id !== id);
     }

     if (status === 'doing') {
          state.DoingTasks = state.DoingTasks.filter((t) => t.id !== id);
     }

     if (status === 'done') {
          state.DoneTasks = state.DoneTasks.filter((t) => t.id !== id);
     }


}

export {
     addonconditons,
     deleteonconditons
}