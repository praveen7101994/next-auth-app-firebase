'use client';
import { useEffect, useRef, useState } from "react";
import { Auth, db } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {useAuthState} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function Home() {
  const [level, setLevel] = useState("1")
  const [user, setUser] = useAuthState(Auth)
  const googleAuth = new GoogleAuthProvider()
  const router = useRouter()

  const login = async () => {
    const result = await signInWithPopup(Auth, googleAuth)
  }

  const handleLevelChange = (e) => {
    console.log(e.target.value)
    setLevel(e.target.value)
  }

  const addDataToFireStore = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "user"), data)
      console.log('docRef', docRef)
      if(docRef){
        return true
      } else {
        return false
      }
    } catch (error) {
      return false
    }
  }

  const fetchUserData = async (id) => {
    const users = []
    if(id){
      const snap = await getDocs(collection(db, 'user'))
    snap.forEach(doc => {
      users.push({id: doc.id, ...doc.data()})
    });
  }
  return users
  }

  useEffect(() => {
    const execute = async () => {
      console.log('userxxx',user)
    if(user){
      const {uid, displayName, email} = user
      // insert data into database
      const data = {
        uid,
        displayName,
        email,
        level
      }
      console.log('data', data)
      // we can check if user is already registered in the db the dont call addDataToFireStore()
      const userData = await fetchUserData(uid)
      if(userData.length === 1){
        const insetResp = await addDataToFireStore(data)
      console.log('insetResp', insetResp)
      if(insetResp){
        router.push(`/profile?uid=${user.uid}&&level=${level}`)
      } else {
        alert('Something went wrong.')
      }
      }
    }
    }
    execute()
  },[user])
  return (
    <center>
      <h1>Registration Page</h1>
      <label htmlFor="level">Enter Level First: </label>
      <input id="level" max={12} placeholder="Enter level" onChange={handleLevelChange} type="number" value={level}/>
      <br />
      <br />
      {level && <button onClick={login}>SignUp With Google</button>}
    </center>
  );
}
