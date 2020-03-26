import React, { useState } from 'react'
import { AUTH_TOKEN } from '../constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

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
        <div>
            <input
                value={first_name}
                onChange={e => setFirstName( e.target.value )}
                type="text"
                placeholder="First Name"
            />
            <input
                value={last_name}
                onChange={e => setLastName( e.target.value )}
                type="text"
                placeholder="Last Name"
            />
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
            <input
                value={city}
                onChange={e => setCity( e.target.value )}
                type="text"
                placeholder="City"
            />
            <input
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
                        <button onClick={mutation}>
                            {'register'}
                        </button>
                    )}
                </Mutation>
            </div>
        </div>
    )
}

export default Register