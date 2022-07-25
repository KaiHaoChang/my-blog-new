import React, {useEffect, useState} from 'react'
import {db, auth} from '../firebase-config'
import {getDocs, doc, deleteDoc, collection} from 'firebase/firestore'


const Home = ({isAuth}) => {

  const [posts, setPosts] = useState([])
  const [reload, setReload] = useState(false)
  const postCollectionRef = collection(db, 'posts')
  
  useEffect(()=>{
    const randerPosts = async () => {
      const data = await getDocs(postCollectionRef, 'title')
      setPosts( data.docs.map( doc => ({...doc.data(), id: doc.id}) ) )
    }

    randerPosts()
  },[reload])

  const handleDelete = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc)
    setReload(!reload)
  }

  console.log(posts)

  return (
    <div className='cards-container'>
      {posts.map( item => {
        return (
          <div className='card-container'  key={item.id}>
            <h1>Title：{item.title}</h1>
            <h2>Post：<span>{item.content}</span></h2>
            
            <p className='author'>post by @{item.author.name}</p>
            {isAuth && item.author.id === auth.currentUser.uid && <button onClick={()=>{handleDelete(item.id)}} ><i className="fa-solid fa-trash-can"></i></button>}
          </div>
        )
      } )}
    </div>
  )
}

export default Home