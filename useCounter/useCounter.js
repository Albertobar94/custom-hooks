import { useState } from 'react'

export const useCounter = ( initialState = 10 ) => {

    const [counter, setstate] = useState(initialState)

    const increment = (  ) => {
        setstate( counter + 1 );
    }
    const decrement = (  ) => {
        setstate( counter - 1 );
    }
    const reset = () => {
        setstate( initialState );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
