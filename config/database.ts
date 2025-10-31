module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "postgres"),
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "poppys_strapi_db"),
      user: env("DATABASE_USERNAME", "poppys_strapi_db_user"),
      password: env("DATABASE_PASSWORD", "Poppyshotel@123"),
      ssl: env.bool("DATABASE_SSL", true),
    },
    debug: false,
  },
});
