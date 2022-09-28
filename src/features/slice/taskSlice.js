import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from "@reduxjs/toolkit";
import { addonconditons, deleteonconditons } from '../../helper/tastfunc'
const initialState = {
     Tasks: [{
          id: 'Pex82r1TNHIiZJ2PxjTJF',
          tasktitle: 'Watch Movies',
          taskcontext: 'everything everyone at once',
          status: 'to-do'
     }, {
          id: 'Px8rT231NHIiZJ2PxjTJF',
          tasktitle: 'Playing Game',
          taskcontext: 'everything everyone at once',
          status: 'to-do'
     }, {
          id: 'Pex8rT23NHIiZJ2PxjTJF',
          tasktitle: 'Edit Vidio',
          taskcontext: 'everything everyone at once',
          status: 'doing'
     }, {
          id: 'P_ex8rT_NHIiZJ2PxfmdsF',
          tasktitle: 'Create Music',
          taskcontext: 'everything everyone at once',
          status: 'done'
     }],

     TodoTasks: [{
          id: 'Pex82r1TNHIiZJ2PxjTJF',
          tasktitle: 'Watch Movies',
          taskcontext: 'everything everyone at once',
          status: 'to-do'
     }, {
          id: 'Px8rT231NHIiZJ2PxjTJF',
          tasktitle: 'Playing Game',
          taskcontext: 'everything everyone at once',
          status: 'to-do'
     }],

     DoingTasks: [{
          id: 'Pex8rT23NHIiZJ2PxjTJF',
          tasktitle: 'Edit Vidio',
          taskcontext: 'everything everyone at once',
          status: 'doing'
     },],

     DoneTasks: [{
          id: 'P_ex8rT_NHIiZJ2PxfmdsF',
          tasktitle: 'Create Music',
          taskcontext: 'everything everyone at once',
          status: 'done'
     }]
}


export const counterSlice = createSlice({
     name: 'counter',
     initialState,
     reducers: {
          addtasks: {
               reducer(state, action) {
                    state.Tasks.push(action.payload)
                    addonconditons(state, action.payload)
               },
               prepare(title, content, status) {
                    return {
                         payload: {
                              id: nanoid(),
                              tasktitle: title,
                              taskcontext: content,
                              status: status,
                         }
                    }
               }
          },
          changetaskstatus: {
               reducer(state, action) {
                    const { taskid, status, prestatus } = action.payload
                    const existingtask = state.Tasks.find(t => t.id === taskid)
                    if (existingtask) {

                         existingtask.status = status

                         addonconditons(state, existingtask)
                         deleteonconditons(state, taskid, prestatus)
                         state.Tasks = state.Tasks.filter(t => (t.id === taskid) ? { ...t, status: status } : t)
                    }
               }, prepare(taskid, status, prestatus) {
                    return {
                         payload: {
                              taskid: taskid,
                              status: status,
                              prestatus: prestatus,
                         }
                    }
               }
          },


          deletetask: {
               reducer(state, action) {
                    const { taskid, status } = action.payload
                    state.Tasks = state.Tasks.filter((t) => t.id !== taskid);
                    deleteonconditons(state, taskid, status)
               }, prepare(taskid, status) {
                    return {
                         payload: {
                              taskid: taskid,
                              status: status,
                         }
                    }
               }
          },

     },
})

// Action creators are generated for each case reducer function
export const { deletetask, addtasks, changetaskstatus } = counterSlice.actions
export const selectAlltasks = state => state.Tasks.Tasks
export const todotasks = state => state.Tasks.TodoTasks
export const doingtasks = state => state.Tasks.DoingTasks
export const donetasks = state => state.Tasks.DoneTasks
export default counterSlice.reducer