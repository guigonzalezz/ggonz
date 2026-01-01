const GITHUB_USERNAME = 'guigonzalezz';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_START_YEAR = 2018; // Year you started on GitHub

export interface GitHubStats {
  totalContributions: number;
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
}

export async function getGitHubStats(): Promise<GitHubStats | null> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
    };

    // Add authorization header if token is available
    if (GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
    }

    // Fetch user data and repos in parallel
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userResponse.ok) {
      console.error('Failed to fetch GitHub stats:', userResponse.statusText);
      return null;
    }

    const userData = await userResponse.json();
    let totalStars = 0;

    if (reposResponse.ok) {
      const repos = await reposResponse.json();
      totalStars = repos.reduce((acc: number, repo: { stargazers_count: number }) => 
        acc + repo.stargazers_count, 0);
    }

    return {
      totalContributions: userData.public_repos * 50,
      publicRepos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      totalStars,
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return null;
  }
}

export async function getGitHubContributions(): Promise<number | null> {
  // If we have a GitHub token, use the GraphQL API for all-time contributions
  if (GITHUB_TOKEN) {
    try {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let year = GITHUB_START_YEAR; year <= currentYear; year++) {
        years.push(year);
      }

      // Fetch contributions for all years
      const contributionPromises = years.map(async (year) => {
        const from = `${year}-01-01T00:00:00Z`;
        const to = `${year}-12-31T23:59:59Z`;
        
        const query = `
          query($username: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $username) {
              contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }
        `;

        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
          body: JSON.stringify({
            query,
            variables: { username: GITHUB_USERNAME, from, to },
          }),
        });

        if (!response.ok) return 0;

        const data = await response.json();
        return data.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;
      });

      const contributionsPerYear = await Promise.all(contributionPromises);
      return contributionsPerYear.reduce((acc, val) => acc + val, 0);
    } catch (error) {
      console.error('Error fetching GitHub contributions via GraphQL:', error);
      return null;
    }
  }

  // Fallback to public API if no token - fetch all years
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    // Sum all years
    if (data.total && typeof data.total === 'object') {
      return Object.values(data.total).reduce((acc: number, val) => acc + (val as number), 0);
    }
    return null;
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return null;
  }
}
