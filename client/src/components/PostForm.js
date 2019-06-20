import React, {useState} from 'react'
import axios from 'axios'
import { Form, TextArea } from 'semantic-ui-react'

const PostForm = (props) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
   

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/posts', { title, body})
    .then(res => {
      props.add(res.data)
    })
    setTitle("")
    setBody("")
  }
  
  return (

    <Form onSubmit={handleSubmit}>
        <Form.Input
          name="title"
          placeholder="Title"
          label="Grab 'em by the nuts and bolts"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <br/>
        <Form.Input
          name="body"
          placeholder="Body"
          label="Whatcha wanna say, bot?"
          control={TextArea}
          rows='10'
          onChange={(e) => setBody(e.target.value)}
          value={body}
          required
        />
        <Form.Button>Post</Form.Button>
    </Form>
  )
}

export default PostForm
