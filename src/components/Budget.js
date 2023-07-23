import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    
    const { dispatch,budget,remaining } = useContext(AppContext);
    const submitEvent = (something) => {
        dispatch(
            {
                type: 'SET_BUDGET',
                payload: something,
            }
        )
        if(budget > 20000) {
            alert("The value cannot exceed £20000");
            return;
        }
        if (remaining < 0){
            alert("You cannot reduce the budget lower than the spending.");
            return;
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input type="number" onChange={(event) => submitEvent(event.target.value)}/></span>
        </div>
    );
};
export default Budget;
