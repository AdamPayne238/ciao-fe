import React, { useState } from 'react'
import { AUTH_TOKEN } from '../../constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

//Style
import styled from 'styled-components'

const REGISTER_MUTATION = gql`
    mutation RegisterMutation($first_name: String!, $last_name: String!, $email: String!, $password: String!, $city: String!, $state: String!){
        register(first_name: $first_name, last_name: $last_name, email: $email, password: $password, city: $city, state: $state){
            token
        }
    }
`

const Register = (props) => {

    const [ register, setRegister ] = useState(true)
    const [ first_name, setFirstName ] = useState('')
    const [ last_name, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ city, setCity ] = useState('')
    const [ state, setState ] = useState('')

    const confirm = async data => {
        const {token} = data.register
        saveUserData(token)
        props.history.push(`/`)
    }

    const saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }

    return (
        <Form>
            <Input
                value={first_name}
                onChange={e => setFirstName( e.target.value )}
                type="text"
                placeholder="First Name"
            />
            <Input
                value={last_name}
                onChange={e => setLastName( e.target.value )}
                type="text"
                placeholder="Last Name"
            />
            <Input
                value={email}
                onChange={e => setEmail( e.target.value )}
                type="text"
                placeholder="Email"
            />
            <Input
                value={password}
                onChange={e => setPassword( e.target.value )}
                type="text"
                placeholder="Password"
            />
            <Input
                value={city}
                onChange={e => setCity( e.target.value )}
                type="text"
                placeholder="City"
            />
            <Input
                value={state}
                onChange={e => setState( e.target.value )}
                type="text"
                placeholder="State"
            />
            <div className="register-mutation">
                <Mutation
                    mutation={REGISTER_MUTATION}
                    variables={{ first_name, last_name, email, password, city, state}}
                    onCompleted={data => confirm(data)}
                >
                    {mutation => (
                        <Button onClick={mutation}>
                            {'register'}
                        </Button>
                    )}
                </Mutation>
            </div>
        </Form>
    )
}

export default Register

//Styles

const Form = styled.div`
  width: 600px;
  min-height: 88vh;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 25rem;
  height: 2.75rem;
  font-size: 1.2rem;
  margin: 15px 0;
  border-radius: 7px;
  border: 2px solid black;
  text-align: center;
  transition: 0.2s ease-in;
  &:hover {
    color: white;
    background: black;
  }
`

const Button = styled.button`
  width: 50%;
  height: 40px;
  border: 2px solid black;
  border-radius: 20px;
  font-size: 1.2rem;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  transition: 0.2 s ease-in;
  margin-top: 15px;
  background: white;

  &:hover {
    color: white;
    background: black;
  }
`