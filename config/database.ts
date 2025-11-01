export default ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "sqlite"),
    connection:
      env("DATABASE_CLIENT") === "postgres"
        ? env("DATABASE_URL")
        : {
            filename: env("DATABASE_FILENAME", ".tmp/data.db"),
          },
    useNullAsDefault: env("DATABASE_CLIENT") !== "postgres",
  },
});
