export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
    sessions: {
      maxSessionLifespan: 7 * 24 * 60 * 60,
      maxRefreshTokenLifespan: 30 * 24 * 60 * 60,
    },
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
});
