import React, { useState} from "react"
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {AUTH_TOKEN} from '../../constants'

//style
import styled from 'styled-components'
import './Auth.scss'

const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
        }
    }
`

const Login = (props) => {

    const [ login, setLogin ] = useState(true)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }

    const confirm = async data => {
        const { token } = data.login
        saveUserData(token)
        props.history.push(`/ciao`)
    }

    return(
        <div className="login-container">
            <div>
                <Input
                    value={email}
                    onChange={e => setEmail( e.target.value )}
                    type="text"
                    placeholder="Email"
                />
            </div>
            <div>
                <Input
                    value={password}
                    onChange={e => setPassword( e.target.value )}
                    type="text"
                    placeholder="Password"
                />
            </div>
            <div className="login-mutation">
            <Mutation
                mutation={LOGIN_MUTATION}
                variables={{ email, password }}
                onCompleted={data => confirm(data)}
            >
                    {mutation => (
                    <Button onClick={mutation}>
                        {'login'}
                    </Button>
                    )}
                </Mutation>
            </div>
        </div>
    )
}

export default Login

//Styles
const LoginContainer = styled.div`
// width: 1rem;
min-height: 88vh;
margin: 30px auto;
display: flex;
flex-direction: column;
align-items: center;
`

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