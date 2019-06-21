import React from 'react'
import axios from 'axios'
import { Card, Divider, Image, Button, Header} from 'semantic-ui-react'
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
      <Header as='h2'>Bot Friends </Header>
      <Header as='h3'>with whom you can take over the world...</Header>
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
            <Button className='ui color3 button'>View Your Wall</Button>
          </Link>

        <Link to="/">
          <Button color="grey">Back To Explore</Button>
        </Link>
      </>
    )
  }
}

export default LikedRobots