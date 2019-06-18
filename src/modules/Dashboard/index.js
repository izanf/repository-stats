import React, { Component } from 'react';
import styled from 'styled-components';

import { fetchIssuesClosed, fetchPullRequestsMerge, fetchPullRequestsCommits, fetchInfoCommit } from './../../services/github'

import Layout from '../../components/layout';
import DateFormated from '../../components/DateFormated';
import Card from './components/Card';
import BarChart from './components/Charts/BarChart';
import LineChart from './components/Charts/LineChart';

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

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'frontendbr',
      repository: 'eventos-api',
      issuesAverage: null,
      prsAverage: null,
    }
  }

  componentDidMount() {
    this.fetchIssues();
    this.fetchPrs();
  }

  fetchCommits = async prs => {
    const { user, repository } = this.state;
    const data = { params: { user, repository } };

    const result = []

    const response = await Promise.all(prs.map(async ({ number }) => {
      data.params.id = number;

      const response = await fetchPullRequestsCommits(data);

      return response.map(async ({ sha }) => {
        data.params.sha = sha;

        const response = await fetchInfoCommit(data);

        if (response) result.push(response)
      });
    }));

    console.log('result', result)
  }

  fetchPrs = async () => {
    const { user, repository } = this.state;
    const data = { params: { user, repository } };
    
    try {
      const response = await fetchPullRequestsMerge(data);
      const prsAverage = this.averagePrsMerged(response);

      // this.fetchCommits(response);

      this.setState({ prsAverage },);
    } catch (err) {
      console.log(err)
    }
  }

  fetchIssues = async () => {
    const { user, repository } = this.state;
    const data = { params: { user, repository } };
    
    try {
      const response = await fetchIssuesClosed(data);
      const issuesAverage = this.averageIssuesClosed(response);
      
      this.setState({ issuesAverage });
    } catch (err) {
      console.log(err)
    }
  }

  averageIssuesClosed = issues =>
    this.convertTsToTime(issues.map(issue =>
      issue.closed_at && issue.created_at
        ? this.convertDateToTS(issue.closed_at) - this.convertDateToTS(issue.created_at)
        : 0
    ).reduce((acc, issue) => acc + issue) / issues.length);

  averagePrsMerged = issues => {
    return this.convertTsToTime(issues.map(issue =>
      issue.merged_at && issue.created_at
        ? this.convertDateToTS(issue.merged_at) - this.convertDateToTS(issue.created_at)
        : 0     
    ).reduce((acc, issue) => acc + issue) / issues.length);
  }

  // averagePullRequestsMerge = prs =>

  convertDateToTS = time => new Date(time).getTime()

  convertTsToTime = time => {
    let currentTime = time / 1000;
    const days = Math.trunc(currentTime / 24 / 60 / 60);
    currentTime = currentTime % (24*60*60);
    const hours = Math.trunc(currentTime / 60 / 60);
    currentTime = currentTime % (60*60);
    const minutes = Math.trunc(currentTime / 60);

    return { days, hours, minutes };
  }

  render() {
    const { issuesAverage, prsAverage } = this.state;

    return (
      <Layout>
        <GridSystem>
          {/* <GridItem area="graph-merge-time">
            <Card title="Average Issues Close Time">
              <BarChart />
            </Card>
          </GridItem> */}
          <GridItem area="merge-time">
            <Card title="Average Issues Close Time">
              <DateFormated data={issuesAverage} />
            </Card>
          </GridItem>
          <GridItem area="issue-closed-time">
            <Card title="Average Pull Request Merge Time">
              <DateFormated data={prsAverage} />
            </Card>
          </GridItem>
          {/* <GridItem area="month-summary">
            <Card title="Month Summary">
              <LineChart />
            </Card>
          </GridItem> */}
        </GridSystem>
      </Layout>
    );
  }
}

export default Dashboard;
