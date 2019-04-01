import styled from '@emotion/styled';

export default styled('div')`
  flex: 0 0 80%;
  max-width: 1400px;
  width: 80%;
  margin: 10% auto;
  padding: 40px;
  ${props => props.border && `border: 1px solid rgba(255, 255, 255, 0.1);`}
`;
