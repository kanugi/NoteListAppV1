import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import CustomButton from './src/components/customButton'
import CustomTextInput from './src/components/customTextInput'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  editNote,
  noteEdit,
  setNoteEdit,
}) => {
  switch (currentPage) {
    case 'home':
      return <Home 
        noteList={noteList} 
        setCurrentPage={setCurrentPage}
        setNoteEdit={setNoteEdit}
      />
    case 'add':
      return <AddNote 
        setCurrentPage={setCurrentPage} 
        addNote={addNote} 
      />
    case 'edit':
      return <EditNote 
        setCurrentPage={setCurrentPage}
        editNote={editNote}
        noteEdit={noteEdit}
      />
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ])

  const addNote = (title, desc) => {
    const id =
      noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1
  
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ])
  }

  const [noteEdit, setNoteEdit] = useState(null);

  const editNote = (id, title, desc) => {
    const changeNotes = noteList.map((note) =>
      note.id === id ? { ...note, title, desc } : note
    );
    setNoteList(changeNotes);
    setNoteEdit(null);
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      editNote={editNote}
      noteEdit={noteEdit}
      setNoteEdit={setNoteEdit}
    />
  );
}

export default App