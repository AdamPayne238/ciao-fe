import gql from 'graphql-tag'

export const ACTIVE_CHAT = gql`
    query chat($id: String!){
        chat(id: $id){
            id
            createdAt
            updatedAt
            active
            messages{
                id
                createdAt
                text
                user{
                    id
                    email
                }
            }
        
        }
    }
`

export const MY_ACTIVE_CHATS = gql`
    query {
        me {
            id 
            email 
            chats{
                id
                active
                messages{
                    id
                    text
                    user{
                        id
                        email
                    }
                }
            }
        }
    }

`

// export const ACTIVE_CHAT = gql`
//     query{
//         chat {
//             id
//             createdAt
//             updatedAt
//             participants{
//                 id
//                 first_name
//                 last_name
//                 email
//             }
//             messages{
//                 id
//                 createdAt
//                 text
//                 user{
//                     id
//                 }
//             }
//         }
//     }

// `