import gql from 'graphql-tag'

export const REQUESTED_CHAT_FRIEND = gql `
    query {
        requestedChatFriend{
        id
        user{
            id
        }
        friend{
            id
        }
        isPending
        isAccepted
        isDenied
        createdAt
        updatedAt
        }
    }
`

export const USER = gql `
    query {
        user{
            id
            first_name
            last_name
            email
        }
    }
`