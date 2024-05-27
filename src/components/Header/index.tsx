import { BackButton, BackIcon, Container, Logo } from "./styles";

import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean
}

export function Header({  showBackButton = false } : Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon color="#FFF" size={32} />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}