import { Highlight } from '@components/Highlight';
import { Container, Title } from './style';
import { Header } from '@components/Header';

export default function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title='Turmas' subtitle='Jogue com sua turma' />
    </Container>
  );
}