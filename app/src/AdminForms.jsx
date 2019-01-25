import React from 'react';
import { ContractForm } from 'drizzle-react-components';

export default class AdminForms extends React.Component {
  render() {
    return (
      <div>
        <h3>Registe a voter:</h3>
        <ContractForm
          contract="SimpleDemocracy"
          method="registerVoter"
          labels={['Address', 'isAdmin']}
        />
        <h3>Create an election:</h3>
        <ContractForm contract="SimpleDemocracy" method="createElection" />
        TODO: label for isAdmin boolean
        <h3>Add a candidate to an election:</h3>
        <ContractForm
          contract="SimpleDemocracy"
          method="addElectionCandidate"
        />
        <h3>Open an election for voting:</h3>
        <ContractForm contract="SimpleDemocracy" method="openElection" />
        <h3>Close an election:</h3>
        <ContractForm contract="SimpleDemocracy" method="closeElection" />
      </div>
    );
  }
}
