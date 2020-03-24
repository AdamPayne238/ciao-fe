import React, { useState} from "react"
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {AUTH_TOKEN} from '../constants'

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
        const { token } = login ? data.login : data.signup
        saveUserData(token)
        props.history.push(`/`)
    }

    return(
        <div>
            <input
                value={email}
                onChange={e => setEmail( e.target.value )}
                type="text"
                placeholder="Email"
            />
            <input
                value={password}
                onChange={e => setPassword( e.target.value )}
                type="text"
                placeholder="Password"
            />
            <div className="login-mutation">
            <Mutation
                    mutation={LOGIN_MUTATION}
                    variables={{ email, password }}
                    onCompleted={data => confirm(data)}
                    >
                    {mutation => (
                    <div className="pointer mr2 button" onClick={mutation}>
                        {login ? 'login' : 'create account'}
                    </div>
                    )}
                </Mutation>
            </div>
            <button
              className="pointer button"
              onClick={() => setLogin( !login )}
            >
              {login
                ? 'need to create an account?'
                : 'already have an account?'}
            </button>
        </div>
    )
}

export default Login