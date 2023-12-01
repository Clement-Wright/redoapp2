/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEquation = /* GraphQL */ `
  subscription OnCreateEquation($filter: ModelSubscriptionEquationFilterInput) {
    onCreateEquation(filter: $filter) {
      id
      equation
      intercepts
      domain
      range
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateEquation = /* GraphQL */ `
  subscription OnUpdateEquation($filter: ModelSubscriptionEquationFilterInput) {
    onUpdateEquation(filter: $filter) {
      id
      equation
      intercepts
      domain
      range
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteEquation = /* GraphQL */ `
  subscription OnDeleteEquation($filter: ModelSubscriptionEquationFilterInput) {
    onDeleteEquation(filter: $filter) {
      id
      equation
      intercepts
      domain
      range
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      image
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      image
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      image
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
