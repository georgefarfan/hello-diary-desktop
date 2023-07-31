import { gql } from "@apollo/client";

export const GET_PHRASE = gql`
  query GetPhase($id: String!) {
    getPhase(getPhaseInput: { id: $id }) {
      id
      title
      description
    }
  }
`;

export const GET_PHRASES = gql`
  query {
    phases {
      id
      title
      description
    }
  }
`;
