import React from 'react';

const InputText = ({ value, placeholder, onChange }) => {
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputText;
