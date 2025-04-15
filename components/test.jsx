'use client';
import { useState } from 'react';

const Test = () => {
  const [state, setState] = useState('');
  return (
    <div>
      <h2>Ich bin eine Client Komponente</h2>
    </div>
  );
};

export default Test;
