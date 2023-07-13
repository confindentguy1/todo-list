import React from 'react'
import Modal from './components/Modal'

interface DeleteProps {
  setIsDeleting: Function;
  deleteTodo: Function
}
const DeleteTask = ({setIsDeleting, deleteTodo} : DeleteProps) => {
  const closeDeletion = () => {
    setIsDeleting(false)
  }
  return (
    <Modal onClose={closeDeletion}>
      <button onClick={() => deleteTodo(setIsDeleting)}>Delete this item</button>
    </Modal>
  )
}

export default DeleteTask