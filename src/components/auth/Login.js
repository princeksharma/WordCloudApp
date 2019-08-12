import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class Login extends Component {
  constructor(props){
    super(props);

    this.state={
        name:'',
        email:'',
        password:''
    }
}

onSubmit = (e) => {
  e.preventDefault();
  this.props.history.push('/search');
}


onChange = (e) => {
     this.setState({[e.target.name] : e.target.value });
}
  render() {
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form onSubmit={this.onSubmit} className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={this.state.email}
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={this.state.password}
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Login;