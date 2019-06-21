import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Divider, Header, Card, Button, Image, Icon } from "semantic-ui-react";

class Home extends React.Component {
  state = { robots: [] };

  componentDidMount(){
    axios.get('/api/robots')
      .then(res => this.setState({ robots: res.data }))
  }

  sample = () => {
    const { robots } = this.state;

    if (robots.length) {
      const index = Math.floor(Math.random() * robots.length);
      return robots[index];
    } else {
      return null;
    }
  };

  unlike = (id) => {
    const { robots, } = this.state
    this.setState({robots: robots.filter( robot => robot.id !== id)})
  }

  like = (id) => {
    const { robots, } = this.state
    axios.put(`/api/robots/${id}`)
    this.setState({ robots: robots.filter( robot => robot.id !== id)})
  }

  render() {
    const robot = this.sample();
    if (robot) {
      return (
        <div>
          <br />
          <Header as="h1" textAlign="center">A Space For The Superior Machines</Header>
          <br />
          <Header as="h3">Bots You Might Know: </Header>
          <Card key={robot.id}>
            <Image src={robot.avatar} />
            <Card.Content>
              <Card.Header>{robot.name}</Card.Header>
              <Card.Description>Serial #: {robot.serial}</Card.Description>
              <Card.Meta>Fav Quote: {robot.bio}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button 
              className='ui color2 button'
              icon
              onClick={() => this.like(robot.id)}>Friend
                {/* <Icon name="cog" /> */}
              </Button>
              <Button 
              className='ui color1 button'
              icon
              onClick={() => this.unlike(robot.id)}>Ignore
                {/* <Icon name="cancel" /> */}
              </Button>
            </Card.Content>
          </Card>
          <Divider />
          <Link to="/my_robots">
            <Button className='ui color2 button'>See Your Robo-Friends</Button>
          </Link>
          <Link to="/posts">
            <Button className='ui color3 button'>View Your Posts</Button>
          </Link>
        </div>
      );
    }else {
      return <Header textAlign="center">Fresh Outta Bots</Header>
    }
  }
}

export default Home;
