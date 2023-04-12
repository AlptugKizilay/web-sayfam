import styled from 'styled-components';


export const Rectangle = styled.div`
  width: 200px;
  height: 100px;
  background-color: #a1a1a1;
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: -1;
`;

export const Ellipse = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 50%;
  background-color: #333333;
  position: absolute;
  top: 150px;
  left: 150px;
  z-index: -1;
`;
