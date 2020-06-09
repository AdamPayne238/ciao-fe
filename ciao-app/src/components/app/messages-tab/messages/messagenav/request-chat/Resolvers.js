import gql from 'graphql-tag'

// WORKING
export const GET_USERS = gql`
    query {
        users {
            id
            first_name
            last_name
            email
        }
    }
`

// WORKING
export const CREATE_CHAT = gql`
    mutation CREATE_CHAT(
        $friend: String!
    ){
        createChat(
            friend: $friend
        ){
            id
        }
    }
`