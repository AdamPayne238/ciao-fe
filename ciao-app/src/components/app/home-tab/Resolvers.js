import {gql} from 'apollo-boost'

export const ME = gql`
    query{
        me{
            id
            first_name
            last_name
            email
            bio
            status
            github
            linkedin
            twitter
            createdAt
            chats{
                id
            }
        }
    }
`

export const UPDATE_USER = gql`
    mutation UPDATE_USER(
        $id: String!
        $bio: String
        $status: String
        $github: String
        $linkedin: String
        $twitter: String
    ){
        updateUser(
            id: $id
            bio: $bio
            status: $status
            github: $github
            linkedin: $linkedin
            twitter: $twitter
        ){
            id
            bio
            status
            github
            linkedin
            twitter
        }
    }
`