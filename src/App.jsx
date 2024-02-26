import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UseCard from './components/UseCard'
import FormUser from './components/FormUser'

function App() {

  const [userUpdate,setUserUpdate] = useState()
  const[ isFormClose, setIsFormClose ] =useState(true)

  const baseUrl = 'https://crudbd.onrender.com'
  const [user, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl)
  
  useEffect(() => {
    getUsers()
  }, [])

  const handleOpenForm = () => {
    setIsFormClose(false)
  }

  return (
      <div className='container'>
        <div className="top-container">
        <h1>User CRUD</h1>
        <button className='button-form' onClick={handleOpenForm}>Open Form</button>  
        </div>
        <div className={`form_container ${isFormClose && 'form_close'}`}>
          <FormUser  
            createUser={createUser}
            userUpdate={userUpdate}
            updateUser={updateUser}
            setUserUpdate={setUserUpdate}
            setIsFormClose={setIsFormClose}
          />
        </div>
        <div className='cards-container'>
          {
            user?.map(user => (
              <UseCard
                key={user.id} 
                user={user}
                deleteUser={deleteUser}
                setUserUpdate={setUserUpdate}
                setIsFormClose={setIsFormClose}
              />
            ))
          }
        </div>
      </div>
  )
}

export default App
