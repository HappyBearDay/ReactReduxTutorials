const redux = require('redux')
const createStore = redux.createStore

// Action
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream(){
  return {
      type: BUY_ICECREAM 
  }
}

// State
//const initialState = {
//numOfCakes: 10,
//numOfIceCreams : 20
//}

const initialStateCakes = {
  numOfCakes: 10,
}

const initialStateIceCreams = {
  numOfIceCreams : 20
}

// Reducer
/* const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
        ...state,
      numOfCakes: state.numOfCakes - 1
    }
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
} */

const cakeReducer = (state = initialStateCakes , action) => {
  switch (action.type) {
    case BUY_CAKE: return {
        ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialStateIceCreams, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}



const store = createStore(reducer)
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
unsubscribe()