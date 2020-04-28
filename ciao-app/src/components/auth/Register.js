import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { AUTH_TOKEN } from '../../constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

//Style
import './Auth.scss'

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
        props.history.push(`/ciao`)
    }

    const saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }

    return (
        <div className="auth-form-container">
            <div className="auth-header">
                <h1>Register</h1>
            </div>
            <div>
            <input
                value={first_name}
                onChange={e => setFirstName( e.target.value )}
                type="text"
                placeholder="First Name"
            />
            </div>
            <div>
            <input
                value={last_name}
                onChange={e => setLastName( e.target.value )}
                type="text"
                placeholder="Last Name"
            />
            </div>
            <div>
            <input
                value={email}
                onChange={e => setEmail( e.target.value )}
                type="text"
                placeholder="Email"
            />
            </div>
            <div>
            <input
                value={password}
                onChange={e => setPassword( e.target.value )}
                type="text"
                placeholder="Password"
            />
            </div>
            <div>
            <input
                value={city}
                onChange={e => setCity( e.target.value )}
                type="text"
                placeholder="City"
            />
            </div>
            <div>
            <input
                value={state}
                onChange={e => setState( e.target.value )}
                type="text"
                placeholder="State"
            />
            </div>
            <div className="auth-mutation">
                <Mutation
                    mutation={REGISTER_MUTATION}
                    variables={{ first_name, last_name, email, password, city, state}}
                    onCompleted={data => confirm(data)}
                >
                    {mutation => (
                        <button onClick={mutation}>
                            {'register'}
                        </button>
                    )}
                </Mutation>
            </div>
            <div className="re-route-auth">
            <p>Already have an account? <Link to="/home/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register
