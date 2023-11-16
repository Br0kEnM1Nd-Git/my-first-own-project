import styled from 'styled-components';

const AppWrapper = styled.div`
  height: '100vh';
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  font-size: 40px;
  color: '#010101';
`;

const Div = styled.div``;

const Ul = styled.ul``;

const ChangingDiv = styled.div(props => {
  const styles = {
    height: '50px',
    width: '50px',
  };
  styles['backgroundColor'] = props.backgroundcolor;
  return styles;
});

export { AppWrapper, Div, Ul, ChangingDiv };
