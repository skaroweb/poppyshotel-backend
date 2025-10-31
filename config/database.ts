module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("dpg-d41lmsfgi27c739l824g-a"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("poppys_strapi_db"),
      user: env("poppys_strapi_db_user"),
      password: env("0oYzs81WIjvhcPKkVLK0v2rHWT7k8rpy"),
      ssl: {
        rejectUnauthorized: false, // Important: ignore self-signed certificate
      },
    },
  },
});
