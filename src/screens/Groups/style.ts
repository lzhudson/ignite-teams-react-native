import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
`

export const Title = styled.Text`
  color: #FFF;
  font-size: 32px;
`