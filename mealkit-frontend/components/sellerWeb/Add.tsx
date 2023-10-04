import React from 'react';

interface AddProps {
  onAddClick: () => void;
}

const Add: React.FC<AddProps> = ({ onAddClick }) => {
  return (
    <button className="add-button" onClick={onAddClick}>
      Add
    </button>
  );
}

export default Add;
