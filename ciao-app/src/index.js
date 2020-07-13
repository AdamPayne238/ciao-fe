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

const link = authLink.concat(httpLink)

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache,
  resolvers: {},
})

// This Block:
// - Writes data directly to inMemoryCache 
// - Sets up placeholders to be manipulated
// cache.writeData({
//   data: {
//     clientState: {
//       defaults: {
//         user: {
//           userId: "Not Set",
//         },
//         chat: {
//           chatId: 'Not Set',
//         }
//       }
//     }
//   }
// })
// console.log("INDEX CACHE", cache)

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
