// scripts/create-admin.js
const { createStrapi } = require("@strapi/strapi");

(async () => {
  try {
    const strapi = await createStrapi();

    await strapi.start();

    const adminExists = await strapi.db.query("admin::user").findOne({
      where: { email: process.env.ADMIN_EMAIL },
    });

    if (!adminExists) {
      await strapi.db.query("admin::user").create({
        data: {
          email: process.env.ADMIN_EMAIL,
          firstname: "Admin",
          lastname: "User",
          password: process.env.ADMIN_PASSWORD,
          isActive: true,
        },
      });
      console.log("✅ Admin user created successfully!");
    } else {
      console.log("ℹ️ Admin user already exists.");
    }

    await strapi.stop();
  } catch (error) {
    console.error("❌ Error creating admin:", error);
    process.exit(1);
  }
})();
