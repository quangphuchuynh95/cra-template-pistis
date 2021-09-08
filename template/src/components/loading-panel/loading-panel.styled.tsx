import styled from 'styled-components';

export const Wrapper = styled.div.attrs((props: { withBorder: boolean }) => props)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({ withBorder }) => withBorder && 'border: 1px solid lightgray;'}
  padding: ${({ theme }) => theme.spacing(2)}px;
`;
