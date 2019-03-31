const GITHUB_CLIENT_ID = '1f7585592db5e8736876';

function getLoginUrl(provider) {
  if (provider === 'GitHub') {
    return `https://github.com/login/oauth/authorize?scope=user:email&client_id=${GITHUB_CLIENT_ID}`;
  } else {
    return null;
  }
}

export { getLoginUrl };
