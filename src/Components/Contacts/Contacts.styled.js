import styled from '@emotion/styled';

export const ContactsContainer = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin-bottom: 10px;
  padding-left: 10px;
  border: 1px solid darksalmon;
  border-radius: 4px;
  box-shadow: 0px 5px 8px 2px rgba(34, 60, 80, 0.2) inset;
`;
export const Container = styled.ul`
  width: 350px;
  list-style: none;
  padding: 0;
`;
export const Button = styled.button`
  height: 30px;
  width: 50px;
  padding: 0;
  align-content: center;
  &:hover {
    cursor: pointer;
    background-color: darksalmon;
  }
`;
