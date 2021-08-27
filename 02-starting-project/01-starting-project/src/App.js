import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const USERS =[
  {name:'AAAA',age:123,id: Math.random().toString()}
];
function App() {
  const [users, setUsers]=useState(USERS);
  const addUserHandler=(uName,uAge) =>{
    setUsers(prevUserList =>{
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString()}];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
