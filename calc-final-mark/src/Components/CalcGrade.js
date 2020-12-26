import React from 'react';

const CalcGrade = ({ mark, weight }) => {
    
    const Total = (mark, weight) => {
        const grade = parseInt(mark) * parseFloat(weight / 100);
        return grade.toFixed(2);
    };

    return(
       <> 
        <h2>{Total(mark, weight)}</h2>
       </>
    )
}        
    
export default CalcGrade;