import React, { Component } from 'react';
import { Divider,
         Grid,
         Card,
         Header,
         Segment,
         Button,
         Menu,
         Container,
         Image,
         Icon,
         Form,
         TextArea,
       } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import meeting from './photos/standing-meeting.jpg';
import computer from './photos/computer.jpg';
import computer2 from './photos/computer2.jpeg';
import computer3 from './photos/computer3.jpg';
import './App.css'

class App extends Component {

  state = { firstName: '', lastName :  '', email: '', assistance: '' }

  handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({ [id]: value });
  }

  render() {

    const { firstName, lastName, email, assistance } = this.state;

    const learn = <Header as='h4' color='red' textAlign='right'>Learn More!</Header>

    return(

      <div>
        <Segment>
          <div className='top'>
            <Container>
              <Menu pointing secondary>
                <Menu.Menu position='right'>
                  <Icon name='mail outline' size='large' />
                  <p>Email Us</p>
                  <Icon name='call' size='large' />
                  <p>Call Us 479.725.1000</p>
                </Menu.Menu>
              </Menu>
            </Container>
          </div>
          <Container>
          <div>
            <Menu pointing secondary>
            <Header as='h2'>MerchantProcessing.com</Header>
              <Menu.Menu position='right'>
                <Menu.Item name='Merchant Accounts' />
                <Menu.Item name='Banks' />
                <Menu.Item name='Compliance' />
                <Menu.Item name='People' />
                <Menu.Item name='About' />
                <Menu.Item name='Contact' />
              </Menu.Menu>
            </Menu>
          </div>
          </Container>
        </Segment>
        <div className='photo'>
        <Header as='h4' className='photoText'> I am on the image!</Header>
        </div>
        <Container>
          <Segment basic>
            <Header as='h2' textAlign='center'>INDUSTRY LEADING GUARANTEE</Header>
            <hr className='hr1'/>
            <Header as='h5' textAlign='center'>CBMS Guarantees if you follow our plan, we will double your existing merchant processing DDA portfolio in <br /> 18 months or less OR we will pay to move you to another processor of your choice.</Header>
          </Segment>

          <div className='cards'>
            <Card>
              <Image src={computer} className='cardPhoto' />
              <Card.Content>
                <Card.Header>
                  Payment Processing
                </Card.Header>
                <Card.Description>
                  Descriptive text will go here. This can be one line or two. You guys will provide this content, we can put this content in later.
                </Card.Description>
                <Divider />
                <Card.Meta className='learnMore'>
                  {learn}
                </Card.Meta>
              </Card.Content>
            </Card>

            <Card>
              <Image src={computer2} className='cardPhoto' />
              <Card.Content>
                <Card.Header>
                  Merchant Accounts
                </Card.Header>
                <Card.Description>
                  Descriptive text will go here. This can be one line or two. You guys will provide this content, we can put this content in later.
                </Card.Description>
                <Divider />
                <Card.Meta className='learnMore'>
                {learn}
                </Card.Meta>
              </Card.Content>
            </Card>

            <Card>
              <Image src={computer3} className='cardPhoto' />
              <Card.Content>
                <Card.Header>
                  Compliance
                </Card.Header>
                <Card.Description>
                  Descriptive text will go here. This can be one line or two. You guys will provide this content, we can put this content in later.
                </Card.Description>
                <Divider />
                <Card.Meta className='learnMore'>
                {learn}
                </Card.Meta>
              </Card.Content>
            </Card>
          </div>

          <Segment.Group horizontal>
            <Segment basic>
              <Header as='h3'>Get Free Advice From Our Experts</Header>
              <p>Our helpful and always ready experts are a click or call away. Anytime. Anywhere.</p>
              <Header as='h6' className='advice'>
                <Icon name='call' size='mini' />
                Call Us 479.725.1000
              </Header>
              <Header as='h6' className='advice'>
                <Icon name='mail outline' size='mini' />
                  Email Us
              </Header>
              <Header as='h3'>Already A CBMS Customer?</Header>
              <p>We will help you connect with your <a>support team.</a></p>
            </Segment>

            <Segment>
              <Header as='h3'>Contact Us</Header>
              <Form>
              <Form.Field required>
                <label>First Name</label>
                <input
                  id='firstName'
                  placeholder='First Name'
                  required
                  value={firstName}
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Field required>
                <label>Last Name</label>
                <input
                  id='lastName'
                  placeholder='Last Name'
                  required
                  value={lastName}
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Field required>
                <label>Email</label>
                <input
                  id='email'
                  placeholder='Email'
                  required
                  value={email}
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Field required>
                <label>How can we we assist you?</label>
                <input
                  id='assistance'
                  placeholder='How can we we assist you?'
                  required
                  value={assistance}
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Segment basic textAlign='center'>
                <Button
                  color='red'
                  size='huge'
                  type='submit'
                >Submit
                </Button>
              </Segment>
              </Form>
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    )
  }
}

export default App;
