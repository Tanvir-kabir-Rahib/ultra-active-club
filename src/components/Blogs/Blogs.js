import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div className='border border-4 rounded-3 p-5 mb-4'>
                <h3>How Does React Work.</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='border border-4 rounded-3 p-5 mb-4'>
                <h3>Difference between props and state.</h3>
                <p>, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div className='border border-4 rounded-3 p-5 mb-4'>
                <h3>Uses of useEffect</h3>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects</p>
            </div>
        </div>
    );
};

export default Blogs;