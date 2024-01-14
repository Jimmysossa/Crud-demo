import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UseCard from './components/UseCard'
import FormUser from './components/FormUser'

function App() {

  const [userUpdate,setUserUpdate] = useState()
  const[ isFormClose, setIsFormClose ] =useState(true)

  const baseUrl = 'https://users-crud.academlo.tech'
  const [users,getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl)
  
  useEffect(() => {
    getUsers()
  }, [])

  const handleOpenForm = () => {
    setIsFormClose(false)
  }

  return (
      <div>
        <h1>User CRUD</h1>
        <button onClick={handleOpenForm}>Open Form</button>
        <div className={`form_container ${isFormClose && 'form_close'}`}>
          <FormUser  
            createUser={createUser}
            userUpdate={userUpdate}
            updateUser={updateUser}
            setUserUpdate={setUserUpdate}
            setIsFormClose={setIsFormClose}
          />
        </div>
        <div>
          {
            users?.map(user => (
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
