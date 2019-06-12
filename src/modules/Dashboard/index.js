import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/layout';
import Card from './components/Card';

const GridSystem = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 3;
grid-gap: 1.5rem;
grid-template-areas: 
    "graph-merge-time graph-merge-time"
    "merge-time issue-closed-time"
    "month-summary month-summary";
padding: 1.5rem;
`;

const GridItem = styled.div`
grid-area: ${props => props.area};
`;

const Dashboard = () => (
  <Layout>
    <GridSystem>
      <GridItem area="graph-merge-time">
        <Card title="Average Merge Time by Pull Request Size">
          Apenas um teste!
        </Card>
      </GridItem>
      <GridItem area="merge-time">
        <Card title="Average Pull Request Merge Time">
          Apenas um teste!
        </Card>
      </GridItem>
      <GridItem area="issue-closed-time">
        <Card title="Average Pull Request Merge Time">
          Average Issue Close Time
        </Card>
      </GridItem>
      <GridItem area="month-summary">
        <Card title="Month Summary">
          Average Issue Close Time
        </Card>
      </GridItem>
    </GridSystem>
  </Layout>
);

export default Dashboard;
