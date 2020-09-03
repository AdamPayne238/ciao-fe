import React, { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {AUTH_TOKEN} from '../../constants'

//style
import './Auth.scss'

// SVG
import Icon from '../../global/Icon'
import { ICONS } from '../../global/IconConstants'

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

    // TOGGLE VISIBILITY
    const [ hidePassword, setHidePassword ] = useState(false)

    const togglePasswordVisibility = () => {
        setHidePassword(hidePassword ? false : true)
    }

    const saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }

    const _confirm = async data => {
        const { token } = data.login
        saveUserData(token)
        props.history.push(`/ciao/home`)
    }

    return(
        <div className="auth-form-container">

            <div className="auth-header">
                <h1>Login</h1>
            </div>
           
            <div>
                <input
                    value={email}
                    onChange={e => setEmail( e.target.value )}
                    type="text"
                    placeholder="Email"
                />
            </div>

            <div className="password-auth-input">
                <input
                    value={password}
                    onChange={e => setPassword( e.target.value )}
                    // type="text"
                    type={hidePassword ? "text" : "password"}
                    placeholder="Password"
                />
                <i onClick={togglePasswordVisibility}>
                    <Icon
                        icon={ICONS.EYE}
                        width={32}
                        height={32}
                    />
                </i>
            </div>
          
            <div className="auth-mutation">
            <Mutation
                mutation={LOGIN_MUTATION}
                variables={{ email, password }}
                onCompleted={data => _confirm(data)}
            >
                    {mutation => (
                    <button onClick={mutation}>
                        {'login'}
                    </button>
                    )}
                </Mutation>
                
            </div>
          
            
            <div className="re-route-auth">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    )
}

export default Login
