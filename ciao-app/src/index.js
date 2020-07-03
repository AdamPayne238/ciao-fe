import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'
import { setContext } from 'apollo-link-context'
import { AUTH_TOKEN } from './constants'
// import gql from 'graphql-tag'

// import Chat from './ChatList';

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

// NEW
// const resolvers = {
//   Chat: {
//     selected: (chat) => chat.selected || false,
//   },
//   Mutation: {
//     toggleChat: (_, args, { cache: getCacheKey }) => {
//       const id = getCacheKey({ id: args.id, __typename: 'Chat' })
//       const fragment = gql`
//         fragment chatToSelect on Chat {
//           selected
//         }
//       `;
//       const chat = cache.readFragment({ fragment, id })
//       const data = { ...chat, selected: !chat.selected }
//       cache.writeFragment({ fragment, id, data })
//       return null
//     },
//   },
// };

const client = new ApolloClient({
  // resolvers,
  link,
  cache,
  clientState: {
    defaults: {
      userId: false,
      chatId: false,
      // availabeChats: availabe_chats
      
    }
  }
})

console.log("INDEX CACHE", cache)

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister()
