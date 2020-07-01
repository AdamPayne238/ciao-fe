import gql from 'graphql-tag'

export const ACTIVE_CHAT = gql`
    query{
        chat {
            id
            createdAt
            updatedAt
            participants{
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