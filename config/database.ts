module.exports = ({ env }) => ({
  connection:
    env("NODE_ENV") === "production"
      ? {
          client: "postgres",
          connection: {
            connectionString: env("DATABASE_URL"),
            ssl: { rejectUnauthorized: false },
          },
          useNullAsDefault: true,
        }
      : {
          client: "sqlite",
          connection: {
            filename: env("DATABASE_FILENAME", ".tmp/data.db"),
          },
          useNullAsDefault: true,
        },
});
