import React from "react"
import { useSelector } from "react-redux"


function HookCakeContainer(){
    const numberOfCakes = useSelector(state => state.numberOfCakes)
    return (
        <div>
            <h2>num of cakes - {numberOfCakes}</h2>
            <button>Buy cake</button>
        </div>
    )
}

export default  HookCakeContainer