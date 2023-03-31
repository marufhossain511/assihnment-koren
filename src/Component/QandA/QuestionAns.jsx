import React from 'react';

const QuestionAns = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center text-5xl font-bold'>Question and answer</h1>
            <div>
                 <h1 className='text-4xl p-5'>Q 1: Difference between props and state?</h1>
                 <p className='text-2xl p-5'>Ans: The difference comes in which component the data are owned. <br/> The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>
                 <h1 className='text-4xl p-5'>Q 2: How does useState works?</h1>
                 <p className='text-2xl p-5'>Ans: useState is React Hook that allows you to add state to a functional component.  It returns an array with two values: the current state and a function <br /> to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
                 <h1 className='text-4xl p-5'>Q 3: What does useState do other than loading data?</h1>
                 <p className='text-2xl p-5'>Ans: useState. useState lets you use local state within a function component. You pass the initial state to this function and it returns a variable with the current state value <br/> (not necessarily the initial state) and another function to update this value.</p>
                 <h1 className='text-4xl p-5'>Q 4: How does React work?</h1>
                 <p className='text-2xl p-5'>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called <br /> properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
        </div>
    );
};

export default QuestionAns;<h1></h1>