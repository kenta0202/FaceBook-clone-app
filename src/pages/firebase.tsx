import React, { useEffect as UseEffect, useState as UseState } from "react";
import { db } from "../db/index";
import {
  collection,
  onSnapshot,
  addDoc,
  setDoc,
  doc,
} from "@firebase/firestore";

type User = {
  name: string;
  age?: number;
  id?: string;
};

const firebase = () => {
  // state
  const [users, setUsers] = UseState<User[]>([{ name: "Loading..." }]);

  UseEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as User[]
      );
    });
  }, []);

  const handleNew = async () => {
    // const docRef = doc(db, "users", "newUser");
    // const payload: User = { age: 11, name: "Keen" };

    // await setDoc(docRef, payload);
    const name = prompt("Enter name");
    const age = parseInt(prompt("Enter age"));
    const colectionRef = collection(db, "users");
    const payload: User = { name, age };
    await addDoc(colectionRef, payload);
  };
  return (
    <div>
      <div className="mt-6 ml-2">
        {console.log(users)}
        {users.map((user, index) => (
          <ul key={user.id} className=" flex flex-row gap-2">
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.id}</li>
          </ul>
        ))}
      </div>
      <br />
      <button onClick={handleNew} className="px-4 py-2  border-2 rounded-md ">
        New
      </button>
    </div>
  );
};

export default firebase;
