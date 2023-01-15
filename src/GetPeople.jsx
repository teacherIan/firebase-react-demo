import { db } from './firebase.js';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import People from './People';

export default function GetPeople(props) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    queryData();
  }, []);

  async function queryData() {
    await getDocs(collection(db, 'People')).then((snapshot) => {
      setPeople(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }

  return <People props={people} key={people.id} />;
}
