module.exports = {
  name: '@auth0/auth0-react',
  out: './docs/',
  toc: [
    'useAuth0',
    'withAuth0',
    'withAuthenticationRequired',
    'Auth0Provider',
    'Auth0Context',
    'Auth0ProviderOptions',
    'Auth0ContextInterface',
    'WithAuth0Props',
    'WithAuthenticationRequiredOptions',
  ],
  mode: 'file',
  exclude: ['./src/utils.tsx', './src/reducer.tsx', './src/auth-state.tsx'],
  excludeExternals: true,
  excludePrivate: true,
  excludeNotExported: true,
  includeDeclarations: true,
  hideGenerator: true,
  theme: 'minimal',
  readme: './README.md',
};
