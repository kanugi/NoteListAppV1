import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import CustomButton from '../components/customButton'

const NoteCard = ({ item, setCurrentPage, deleteNote, setNoteEdit }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardDesc}>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          setNoteEdit(item)
          setCurrentPage('edit')
        }}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {
          deleteNote(item.id);
        }}
      />
    </View>
  </View>
)

const Home = ({ noteList, setCurrentPage, deleteNote, setNoteEdit }) => (
  <View style={styles.container}>
    <Text style={styles.pageTitle}>Note List</Text>
    <CustomButton
      backgroundColor="#DDD"
      color="#203239"
      text="Tambahkan Note"
      width="100%"
      fontSize={16}      
      onPress={() => {
        setCurrentPage('add')
      }}
    />
    <FlatList
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
        <NoteCard 
          item={item} 
          setCurrentPage={setCurrentPage} 
          deleteNote={deleteNote}
          setNoteEdit={setNoteEdit}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 60,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
    paddingBottom: 20,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: '#DDD',
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: '600',
    color: '#203239',
    fontSize: 16,
    marginBottom: 5,
  },
  cardDesc: {
    color: "#fff",
  },
  buttons: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

export default Home
