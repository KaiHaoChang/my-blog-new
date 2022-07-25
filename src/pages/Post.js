import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { db, auth } from '../firebase-config'
import { addDoc, collection } from 'firebase/firestore'


const Post = ({isAuth}) => {

  const navigate = useNavigate()

  const [inputtitle, setInputTitle] = useState('')
  const [inputcontent, setInputContent] = useState('')

  const postCollection = collection(db, 'posts')

  useEffect(() => {
    !isAuth && navigate('/login')
  }, [])


  const handleSubmit = async () => {
    await addDoc(postCollection, {title: inputtitle, content: inputcontent, author : {name:auth.currentUser.displayName, id:auth.currentUser.uid}})
    navigate('/')
  }


  return (
    <div className="post-container">
      <div className='title'>WRITE YOUR POST</div>
      <div className='input-title'>
        <label className="input">Post Title</label>
        <input type="text" placeholder='title...' onChange={e => setInputTitle(e.target.value)} />
      </div>
      <div className="input-content">
        <label className='input'>Post Content</label>
        <textarea rows="20" cols="50" placeholder='content...' onChange={e => setInputContent(e.target.value)} ></textarea>
      </div>
      <button className='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Post