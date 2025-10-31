// path: ./config/database.js

const path = require("path");
const parse = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  const isProduction = env("NODE_ENV") === "production";

  if (isProduction) {
    const config = parse(env("DATABASE_URL"));

    if (!config.host) {
      throw new Error("DATABASE_URL is missing or invalid");
    }

    return {
      connection: {
        client: "postgres",
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: { rejectUnauthorized: false },
        },
        debug: false,
      },
    };
  }

  // Local (SQLite)
  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };
};
