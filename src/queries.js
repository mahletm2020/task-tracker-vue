import { gql } from 'graphql-tag';

export const GET_TASKS = gql`
query {
  tasks {
    id
    text
    day
    reminder
  }
}
`