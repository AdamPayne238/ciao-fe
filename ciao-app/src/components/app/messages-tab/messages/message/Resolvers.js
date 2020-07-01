import gql from 'graphql-tag'

export const GET_CHATS = gql`
    query {
        chats {
            id
            createdAt
            updatedAt
            participants {
                id
                first_name
                last_name
                email
            }
            messages{
                id
                createdAt
                text
                user{
                    id
                }
            }
        }
    }
`

export const ME = gql`
    query{
        me{
            id
            first_name
            last_name
            email
            chats{
                id
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

export const MY_ID = gql`
    query{
        me{
            id
        }
    }
`

export const TOGGLE_CHAT = gql`
    mutation TOGGLE_CHAT(
        $id: String
        $active: Boolean
    ){
        updateChat(
            id: $id
            active: $active
        ){
            id
            createdAt
            updatedAt
            active
        }
    }
`