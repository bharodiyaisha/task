import React, { useState, useMemo } from 'react';

const MemoExample = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(3);

  const E = useMemo(() => a + b, [a, b]);
  console.log(E);

  return (
    <div>
      <button onClick={() => setA(a + 1)}>a</button>
      {/* tftguy */}
      <button onClick={() => setB(b + 5)}>b</button>
    </div>
  );
}

export default MemoExample;
