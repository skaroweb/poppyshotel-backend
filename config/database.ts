export default ({ env }) => ({
  connection:
    env("NODE_ENV") === "production"
      ? {
          client: "postgres",
          connection: {
            connectionString: env("DATABASE_URL"),
            ssl: { rejectUnauthorized: false },
          },
          pool: { min: 0, max: 10 },
        }
      : {
          client: "sqlite",
          connection: {
            filename: env("DATABASE_FILENAME", ".tmp/data.db"),
          },
          useNullAsDefault: true,
        },
});
