import {createStore} from "redux";
const $ = s => document.querySelector(s)
const state = {
  value:0
}
function counterReduce(state=state,action){
  switch (action.type){
    case 'counter/incremented':
      return {value:state.value+1}
    case 'counter/decrement':
      return {value:state.value-1}
    default:
      return state
  }
}
let store = createStore(counterReduce)

store.subscribe(()=>console.log(store.getState()))

$('.dispatch-button').addEventListener('click',()=>{
  store.dispatch({type:'counter/incremented'})
})
