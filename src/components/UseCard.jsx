import './styles/UseCard.css'

const UseCard = ({ user, deleteUser, setUserUpdate, setIsFormClose}) => {

  const handleDelete = () => {
    deleteUser(user.id)
  }

  const handleEdit = () => {
    setUserUpdate(user)
    setIsFormClose(false)
  }

  return (
    <article className='card-main'>
         <h2>{user.first_name} {user.last_name}</h2>
         <hr/>
         <ul>
            <li className='li-item'><span className='text-span'>Email</span><span>{user.email}</span></li>
            <li className='li-item'><span className='text-span'>Birthday</span><span>{user.birthday}</span></li>
         </ul>
        <hr />
        <footer className='card-buttons'>
            <button className='btn button-trash' onClick={handleDelete}><i className=' bx bx-trash bx-sm' ></i></button>
            <button className='btn button-edit'  onClick={handleEdit}><i className=' bx bx-edit-alt bx-sm' ></i></button>
        </footer>
    </article>
  )
}

export default UseCard 