const API_URL = 'https://api.github.com';

export const fetchIssuesClosed = data =>
  fetch(`${API_URL}/repos/${data.params.user}/${data.params.repository}/issues?state=closed`).then(data => data.json());

export const fetchPullRequestsMerge = data =>
  fetch(`${API_URL}/repos/${data.params.user}/${data.params.repository}/pulls?state=closed`).then(data => data.json());

export const fetchPullRequestsCommits = data =>
  fetch(`${API_URL}/repos/${data.params.user}/${data.params.repository}/pulls/${data.params.id}/commits`).then(data => data.json());

export const fetchInfoCommit = data =>
  fetch(`${API_URL}/repos/${data.params.user}/${data.params.repository}/commits/${data.params.sha}`).then(data => data.json());
