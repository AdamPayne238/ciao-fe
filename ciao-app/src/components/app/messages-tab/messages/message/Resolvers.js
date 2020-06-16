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