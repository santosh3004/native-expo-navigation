import {ADD_TASK,DELETE_TASK,DID_TASK} from './taskType'

const initialState={tasks:[
  { "task": "HTML I", "done": true, "id": "1" },
    { "task": "CSS", "done": true, "id": "2" },
    { "task": "Responsive design", "done": true, "id": "3" },
    { "task": "Git", "done": true, "id": "4" },
    { "task": "JavaScript I", "done": true, "id": "5" },
    { "task": "JavaScript II", "done": false, "id": "6" }
  ]}

  const taskReducer=(state=initialState,action)=>{
    switch(action.type){
      case ADD_TASK:
        return{
          ...state,
          tasks:[...state.tasks,{
            task:action.payload,
            done:false,
            id:Math.random().toString()
          }]
        }
        case DELETE_TASK:
          return{
            ...state,
            tasks:state.tasks.filter(item=>item.id!=action.payload)
          }
        case DID_TASK:
          return{
            ...state,
            tasks:state.tasks.map((item) => {
              if (item.id !== action.payload) {
                // This isn't the item we care about - keep it as-is
                return item
              }
          
              // Otherwise, this is the one we want - return an updated value
              return {
                ...item,
                done:!item.done
              }
            })
          }
          
        default:
          return state
    }
  }

  export default taskReducer;
