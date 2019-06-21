import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Header, List, Segment, Button } from 'semantic-ui-react'
import PostForm from './PostForm'
import {Link} from 'react-router-dom'

const Posts = (props) => {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState("")

  useEffect(() => {
    axios.get('/api/posts')
    .then( res => {
      setPosts(res.data)
    })
  }, [] )

  // const addPost = (post) => {
  //   setPosts([...posts, post]) 
  // }

  const deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
    .then(res => {
      setPosts(posts.filter(post => post.id !== id))
    })
  }

  const editPost = (id, post) => {
    axios.put(`/api/posts/${id}`, post )
      .then(res => {
      setPosts(posts.map(post =>{
          if (post.id === id)
          return res.data
        return post}))
        })
        setPost("")
  }

  const openForm = (post) => {
    setPost(post)
  }

  const renderPosts = () => {
    return posts.map( post => (
      <Segment key={post.id}>
      <List.Header as='h3'>{post.title}</List.Header>
      <List.Description>
        {post.body}
      </List.Description>
      <Button onClick={() => openForm(post)} size="mini" >
        Edit Post
      </Button>
      <Button className='ui color3 button' onClick={() => deletePost(post.id)} size="mini">
        Delete Post
      </Button>
      
      </Segment>
    ))
  }


    return(
      <div>
        <Header as='h2'>My Robo Wall </Header>
        <br />
        <Link to={{
          pathname: '/new-post'
        }}>
        <Button className='ui color2 button'>New Post</Button>
        </Link>
        <Link to={{
          pathname: '/'
        }}>
        <Button className='ui color1 button'>Back To Explore</Button>
        </Link>
        <br/>
        <List>
          {renderPosts()}
        </List>
        <hr/>
        {post ? <PostForm editPost={editPost} post={post}/> : null}
       {/* {post ? <PostForm editPost={editPost} post={post}/> : <PostForm add={addPost} />} */}
      </div>
    )
  }

export default Posts