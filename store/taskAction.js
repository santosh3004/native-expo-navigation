import {ADD_TASK,DELETE_TASK,DID_TASK} from './taskType'
export const addTask=task=>({
  type:ADD_TASK,
  payload:task
})

export const deleteTask=id=>({
  type:DELETE_TASK,
  payload:id
})

export const didTask=id=>({
  type:DID_TASK,
  payload:id
})