module.exports = ({ env }) => ({
  connection:
    process.env.NODE_ENV === "production"
      ? {
          client: "postgres",
          connection: env("DATABASE_URL", ""),
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
