import React from 'react'
import axios from 'axios'
import { Card, Divider, Image, Button, } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class LikedRobots extends React.Component {
  state = { robots: [] }

  componentDidMount(){
    axios.get('/api/my_robots')
    .then (res => this.setState({ robots: res.data }))
  }

  render(){
    const { robots } = this.state
    return(
      <>
        <Card.Group itemsPerRow={3}>
          { robots.map( robot =>
            <Card key={robot.id}>
              <Image src = {robot.avatar} />
              <Card.Content>
                <Card.Header>
                  { robot.name }
                </Card.Header>
                <Divider />
                <Card.Meta>
                  Serial: { robot.serial }
                </Card.Meta>
                <Card.Description>
                  Fav Quote: { robot.bio }
                </Card.Description>
              </Card.Content>
            </Card>
            ) }
        </Card.Group>
        <Divider />
        <Link to="/posts">
            <Button color="pink">View Your Posts</Button>
          </Link>

        <Link to="/">
          <Button color="grey">Back To All Bots</Button>
        </Link>
      </>
    )
  }
}

export default LikedRobots