import { gql } from "@apollo/client";

export const CREATE_PHRASE = gql`
  mutation CreatePhase($title: String!, $description: String!) {
    createPhase(phaseInput: { title: $title, description: $description }) {
      id
      title
      description
    }
  }
`;

export const REMOVE_PHRASE = gql`
  mutation RemovePhase($id: String!) {
    removePhase(removePhaseInput: { id: $id }) {
      id
      title
      description
    }
  }
`;

export const UPDATE_PHRASE = gql`
  mutation UpdatePhraseInput(
    $id: String!
    $title: String!
    $description: String!
  ) {
    updatePhrase(
      updatePhraseInput: { id: $id, title: $title, description: $description }
    ) {
      id
      title
      description
    }
  }
`;
