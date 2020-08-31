import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// NEW IMPORTS ref: https://www.youtube.com/watch?v=iNStN6q_5As
import  { ApolloClient, InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import { createHttpLink } from 'apollo-link-http'
import { BrowserRouter } from 'react-router-dom'
import { setContext } from 'apollo-link-context'
import { AUTH_TOKEN } from './constants'

// Subscriptions
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'


const httpLink = createHttpLink({
  uri: 'https://ciao-be-2.herokuapp.com/'
})

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return{
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const wsLink = new WebSocketLink({
  uri: 'ws://ciao-be-2.herokuapp.com/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      token: localStorage.getItem(AUTH_TOKEN),
    }
  }
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  authLink.concat(httpLink)
)

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache,
  resolvers: {},
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
