export const listChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      ChatRooms {
        items {
          chatRoom {
            id
            users {
              items {
                user {
                  id
                  image
                  firstName
                }
              }
            }
            LastMessage {
              id
              createdAt
              text
            }
          }
        }
      }
    }
  }
`;