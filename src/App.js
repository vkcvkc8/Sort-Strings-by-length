import React from 'react';
import './style.css';

export default function App() {
  const sortStringsByLength = (strings) => {
    return strings.sort((a, b) => b.length - a.length);
  };

  const strings = ['Hello', 'Stack', 'Blitz', 'OpenAI', 'GPT-3.5'];
  const sortedStrings = sortStringsByLength(strings);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>Sorted Strings: {sortedStrings.join(', ')}</p>
    </div>
  );
}
