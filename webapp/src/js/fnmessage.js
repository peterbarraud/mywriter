import React from 'react';

import {AlloMessage} from './allmessage';
import { SeeYou } from './clsseeyou';
import { ClsForm } from './clsform';


// read this post for when (and why) to choose function vs class syntax:
// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
// The class syntax for JSX is more expansive and has better access to the this object
// and access to state

// The function syntax is more concise - must lighter and super easy to write
// You don't even need the return statement

// using the funciton syntax
// without the return bit - less is better :)
export const FnMessage = ({value, mins=100, color}) =>
    <div>
        {value.map(
            (greeting, i) => <AlloMessage key={i}
                                            value={greeting.message} />
        )}
        <SeeYou mins={mins} color={color} />
        <ClsForm />
    </div>

// with the return bit :(
// const FnMessage = ({value, mins, color}) => {
//     return (
//         <div>
//             {greetings.map(
//                 (greeting, i) => <AlloMessage key={i}
//                                                 value={greeting.message} />
//             )}
//             <AlloMessage messages={greetings} />
//             <h2 style={{color: color}}>See you in {mins} minutes. Or {timeinhours(mins)} hours</h2>
//         </div>
//     )
// } 
// using the funciton syntax
