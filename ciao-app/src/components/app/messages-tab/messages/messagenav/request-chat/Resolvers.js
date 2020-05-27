
import gql from 'graphql-tag'

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

export const CREATE_CHAT = gql`
    mutation CREATE_CHAT(
        $friend: String!
    ){
        createChat(
            friend: $friend
        ){
            id
            friend{
                id
                first_name
                last_name
                email
            }
            user{
                id
                first_name
                last_name
                email
            }
        }
    }
`