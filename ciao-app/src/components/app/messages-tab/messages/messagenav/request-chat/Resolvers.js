import {gql} from 'apollo-boost'

// WORKING
export const GET_USERS = gql`
    query {
        users {
            id
            first_name
            last_name
            email
            chats{
                id
                createdAt
                updatedAt
                participants{
                    id
                    first_name
                    last_name
                    email
                }
            }
        }
    }
`

// WORKING
export const CREATE_CHAT = gql`
    mutation CREATE_CHAT(
        $participants: String!
    ){
        createChat(
            participants: $participants
        ){
            id
        }
    }
`

export const MY_ID = gql`
    query{
        me{
            id
        }
    }
`