import {gql} from 'apollo-boost'

export const CREATE_MESSAGE = gql`
mutation CREATE_MESSAGE(
    $chatId: String!
    $text: String!
){
    createMessage(
        chatId: $chatId
        text: $text
    ){
        id
    }
}
`

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
                    first_name
                    last_name
                }
            }
        
        }
    }
`


export const NEW_MESSAGE_SUBSCRIPTION = gql`
    subscription {
        newMessage {
            id
            text
        }
    }
`