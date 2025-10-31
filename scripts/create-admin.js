// scripts/create-admin.js
const { createAdminUser } = require("@strapi/strapi/lib/commands/admin");

(async () => {
  try {
    await createAdminUser({
      email: process.env.STRAPI_ADMIN_CREATE_USER_EMAIL,
      firstname: process.env.STRAPI_ADMIN_CREATE_USER_FIRSTNAME,
      lastname: process.env.STRAPI_ADMIN_CREATE_USER_LASTNAME,
      password: process.env.STRAPI_ADMIN_CREATE_USER_PASSWORD,
      blocked: process.env.STRAPI_ADMIN_CREATE_USER_BLOCKED === "true",
      isActive: true,
      roles: ["Super Admin"],
    });
    console.log("✅ Admin user created successfully");
  } catch (error) {
    console.error("❌ Error creating admin user:", error);
  }
})();
