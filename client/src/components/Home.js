import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header, Card, Button, Image, Icon } from "semantic-ui-react";

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
  render() {
    const robot = this.sample();
    if (robot) {
      return (
        <div>
          <br />
          <Header as="h1">A Space For The Superior Machines</Header>
          <br />
          <Card key={robot.id}>
            <Image src={robot.avatar} />
            <Card.Content>
              <Card.Header>{robot.name}</Card.Header>
              <Card.Description>Serial #: {robot.serial}</Card.Description>
              <Card.Meta>Bio: {robot.bio}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic>
                <Icon name="thumbs down" />
              </Button>
              <Button color="green" icon basic>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          <Link to="/my_robots">
            <Button color="blue">Robots I Like</Button>
          </Link>
        </div>
      );
    }else {
      return <Header textAlign="center">Fresh Outta Bots</Header>
    }
  }
}

export default Home;
