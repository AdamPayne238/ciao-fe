import {gql} from 'apollo-boost'

export const ME = gql`
    query{
        me{
            id
            first_name
            last_name
            email
            chats{
                id
            }
        }
    }
`