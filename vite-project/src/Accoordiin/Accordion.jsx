import { useState } from 'react';

function Accordion({ title, content }) {
  const [isOpen, setIsOn] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOn(!isOn)}>
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && { content }}
    </div>
  );
}
export default Accordion;
