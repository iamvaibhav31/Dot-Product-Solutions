const Validate = ({ tasktitle, taskcontext }) => {
     const error = {}
     const titleregex = new RegExp(" /^[a-zA-Z]+$/g")
     const contextregex = new RegExp("/^(?=.*\d).{25,}$/")

     if (tasktitle === "") {
          error.tasktitle = "Task Title is required"
     } else if (!titleregex.test(tasktitle)) {
          error.tasktitle = "Given Title is not valid"
     }


     if (taskcontext === "") {
          error.taskcontext = "Pleace the Enter the Context"
     } else if (!contextregex.test(taskcontext)) {
          error.taskcontext = "Minimum 25 characters"
     }


     console.log(error)
     return error
}

export default Validate
