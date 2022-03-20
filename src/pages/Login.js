import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {login} from '../actions/userActions'
import FormContainer from '../components/FormContainer'

const LoginPage = ({location, history}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userLogin = useSelector(state => state.userLogin) //userLogin is inside of store.js, userLogin is an object, once we get the value of this object we will destructure it.
  const {error,loading, userInfo} = userLogin //we got these information from userReducers

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  },[history, userInfo, redirect])

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Log In</h1>
      {error && <Message variant = 'danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit = {handleSubmit}>
        <Form.Group controlId = 'email'>
          <Form.Label>Email Address: </Form.Label>
          <Form.Control type = 'email' placeholder = 'Enter Email' value = {email} onChange = {(event) => setEmail(event.target.value)}>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId = 'password'>
          <Form.Label>Password: </Form.Label>
          <Form.Control type = 'password' placeholder = 'Enter Password' value = {password} onChange = {(event) => setPassword(event.target.value)}>
          </Form.Control>
        </Form.Group>

        <Button type = 'submit' variant = 'primary'>Log In</Button>
      </Form>

      <Row className ='py-3'>
        <Col>
          New Customer? <Link to={'/register'}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginPage
