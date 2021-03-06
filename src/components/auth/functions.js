export const logOut = () => {
  localStorage.removeItem(process.env.REACT_APP_AUTH_TOKEN);
  window.location.href = '/';
};

export const checkAuth = () => {
  const token = localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN);
  if (!token) {
    return false;
  }
  return true;
};

// const GET_USER = gql`
//   {
//     me {
//       id
//       name
//       email
//     }
//   }
// `;

// export const getUser = () => (
//   <Query query={GET_USER}>
//     {({ loading, error, data }) => {
//       const isAuthenticated = !loading && !error && data.me !== null;
//       return <div>LoggedIn</div>;
//     }}
//   </Query>
// );
