import { Highlight } from '@components/Highlight';
import { Container, Title } from './style';
import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';

export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Amigos']);

  return (
    <Container>
      <Header />

      <Highlight title='Turmas' subtitle='Jogue com sua turma' />
      <GroupCard title='Galera do Ignite' />
      <FlatList 
        data={groups} 
        keyExtractor={item => item} 
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
      />
    </Container>
  );
}