import React from 'react';
import ReactDOM from 'react-dom/client';
/* 
An expression is any valid JavaScript code that resolves to a value
Expressions in JSX need to be wrapped inside curly braces: {expression}
<h1 className="title">You have {2 + 3} notifications</h1> is an example of JSX with an expression.
If the value of the attribute is a string, then wrap it with quotes
If the value of the attribute is an expression, then wrap it with curly braces {}
Number and boolean attribute values should be passed as an expression
Recap
When an attribute is partially dynamic, then treat it as being entirely dynamic
You can use either template strings (with interpolation) or string concatenation.
JSX supports children.
Always wrap your JSX elements with () when written after a return.
Use self-closing syntax for self-closing elements in JSX.
You can only return 1 element in JSX.
Wrap multiple elements with React.Fragment.
The short syntax is <> that can be closed with </>.
The original syntax is: <React.Fragment> and </React.Fragment>.git

*/
const list = <ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>;
function getList() {
  return (<ul>
    <li>First Item</li>
    <li>Second Item</li>
</ul>);
      
}