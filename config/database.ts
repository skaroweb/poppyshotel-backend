const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "sqlite"),
    connection:
      env("DATABASE_CLIENT") === "sqlite"
        ? {
            filename: path.join(__dirname, "..", ".tmp/data.db"),
          }
        : {
            host: env("DATABASE_HOST", "localhost"),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", "your-db-name"),
            user: env("DATABASE_USERNAME", "your-db-user"),
            password: env("DATABASE_PASSWORD", "your-db-password"),
            ssl: env.bool("DATABASE_SSL", false)
              ? { rejectUnauthorized: false }
              : false,
          },
    useNullAsDefault: true,
  },
});
