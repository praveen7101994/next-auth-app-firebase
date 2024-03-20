"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/navigation'

const index = () => {
  const router = useRouter()
const searchParams = useSearchParams()
const uid = searchParams.get('uid')
const level = searchParams.get('level')
console.log('uid', uid)

const [user, setUser] = useState(null)

const fetchUserData = async (id) => {
  if(id){
    const snap = await getDocs(collection(db, 'user'))
  const data = []
  snap.forEach(doc => {
    data.push({id: doc.id, ...doc.data()})
  });
  console.log('user data', data)
  if(data.length > 0){
    if(data[0].level < level){
      alert("You're not authorized to access this page.")
      router.back()
    }
    setUser(data[0])
  } else {
    alert('User data not found.')
  }
  }
}

useEffect(() => {
  fetchUserData(uid)
},[])



  return (
    <center>
      <h3>Profile Page</h3>
      {
        user && (<>
        <h3>Name: {user.displayName}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Level: {user.level}</h3></>)
      }
    </center>
  )
}

export default index