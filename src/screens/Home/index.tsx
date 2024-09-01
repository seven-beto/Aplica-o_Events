import { styles } from './styles';
import { Text, View, TextInput,TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Iza', 'Jack', 'Joao',' Julia']

  function handleParticipantAdd(){
    if (participants.includes("Rodrigo")) {
     return Alert.alert("Participanete existe", "Participante ja esta na lista")
    }
    console.log("Voce clicou no botao de adicionar!");
  }

  function handleParticipantRemove(name : string){
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },

      {
        text: 'Nao',
        style: 'cancel'
      }
    ])

    console.log(`Voce clicou em remover um participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento !
      </Text>
      
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2024</Text>

    <View style={styles.form}>
      <TextInput 
          style={styles.input}
          placeholder='Nome do Participante'
          placeholderTextColor='#6B6B6B'
          />

        <TouchableOpacity style={styles.button} onPress = {handleParticipantAdd}>
          <Text style={styles.buttonText}>
          +
          </Text>
        </TouchableOpacity>
      </View>

    <FlatList
        data={[]}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
            key={item}
            name= {item} 
            onRemove ={() => handleParticipantRemove (item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ningue chegou no Evento ainda, por favor adicione participantes
          </Text>
        )}
      />  
    </View>
  )
}