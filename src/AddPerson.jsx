import { db } from './firebase.js';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';

export default function AddPerson(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  function updateName(input) {
    setName(input.target.value);
  }
  function updateAge(input) {
    setAge(input.target.value);
  }

  function addPerson() {
    addDoc(collection(db, 'People'), {
      name: name,
      age: age,
    });
  }

  return (
    <>
      <div>Add New Person</div>
      <input onChange={updateName} type="text" placeholder="Name"></input>
      <input onChange={updateAge} type="text" placeholder="Age"></input>
      <button onClick={addPerson}>Add Person</button>
    </>
  );
}
