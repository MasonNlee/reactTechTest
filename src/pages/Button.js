import React from 'react';

export const Button = (props) => {
  return (
    <button onClick={() =>
      props.updateCount(1)}>
      +
    </button>
  );
}
