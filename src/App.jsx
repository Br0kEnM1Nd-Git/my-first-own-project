import { useToggle } from 'hooks/useToggle';
import {
  AppWrapper,
  ChangingDiv,
} from './components/Helpers/Components.styled';
import { useState } from 'react';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('green');
  const { isOpen, toggle } = useToggle();

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target;
    setBackgroundColor(value);
  };

  const handleChange = e => {
    const { value } = e.target;
    setBackgroundColor(value);
  };

  return (
    <AppWrapper>
      <form onSubmit={handleSubmit}>
        <span>Change color</span>
        <input type="text" onChange={handleChange} />
      </form>
      {isOpen && <ChangingDiv backgroundcolor={backgroundColor} />}
      <button type="button" onClick={toggle}>
        Toggle
      </button>
    </AppWrapper>
  );
};

export default App;
