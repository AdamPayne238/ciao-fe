import {gql} from 'apollo-boost'

export const ME = gql`
    query{
        me{
            first_name
            last_name
        }
    }
`