module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 10000),
  url: env("RENDER_EXTERNAL_URL", "https://poppyshotel-backend.onrender.com/"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
