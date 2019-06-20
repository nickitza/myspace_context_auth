import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Header, List, Segment, Button } from 'semantic-ui-react'
import PostForm from './PostForm'

const Posts = (props) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('/api/posts')
    .then( res => {
      setPosts(res.data)
    })
  }, [] )

  const addPost = (post) => {
    setPosts([...posts, post]) 
  }

  const deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
    .then(res => {
      setPosts([posts.filter(post => post.id !== id), ])
    })
  debugger
  }

  const renderPosts = () => {
    return posts.map( post => (
      <Segment key={post.id}>
      <List.Header as='h3'>{post.title}</List.Header>
      <List.Description>
        {post.body}
      </List.Description>
      <Button onClick={() => deletePost(post.id)} size="mini" color="red" inverted>
        Delete Post
      </Button>
      </Segment>
    ))
  }


    return(
      <div>
        <Header as='h2'>My Robo Blog</Header>
        <br />
        <List>
          {renderPosts()}
        </List>
        <hr/>
        <PostForm add={addPost} />
      </div>
    )
  }

export default Posts