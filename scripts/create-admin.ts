// scripts/create-admin.js
// Creates an admin user if it doesn't exist, then exits (does NOT start the server).
// Run this before starting Strapi.

const { createStrapi } = require("@strapi/strapi");

(async () => {
  try {
    const strapi = await createStrapi();
    await strapi.start();

    const email = process.env.FIRST_ADMIN_EMAIL || "admin@poppyshotels.com";
    const password = process.env.FIRST_ADMIN_PASSWORD || "Poppyshotel@123";
    const firstname = process.env.FIRST_ADMIN_FIRSTNAME || "Admin";
    const lastname = process.env.FIRST_ADMIN_LASTNAME || "User";

    const existing = await strapi.db
      .query("admin::user")
      .findOne({ where: { email } });

    if (!existing) {
      await strapi.db.query("admin::user").create({
        data: {
          email,
          firstname,
          lastname,
          password,
          isActive: true,
        },
      });
      console.log("✅ Admin user created:", email);
    } else {
      console.log("ℹ️ Admin already exists:", email);
    }

    await strapi.stop();
    process.exit(0);
  } catch (err) {
    console.error("❌ create-admin error:", err);
    process.exit(1);
  }
})();
