import React, { useState, useEffect } from 'react';

function Multiplication({ value }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [product, setProduct] = useState(0);
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    const newProduct = num1 * num2;
    setProduct(newProduct);
    setIsMatching(newProduct === value);
  }, [num1, num2, value]);

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(parseInt(e.target.value))}
      />
      {isMatching ? (
        <p>La multiplication des deux nombres fait bien {value}.</p>
      ) : (
        <p>Les deux nombres multipliés ne font pas {value}...</p>
      )}
    </div>
  );
}

export default Multiplication;
