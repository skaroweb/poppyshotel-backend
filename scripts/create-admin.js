const { createStrapi } = require("@strapi/strapi");
const strapi = createStrapi();

strapi.start().then(async () => {
  const admin = {
    firstname: "Admin",
    lastname: "Poppy",
    email: "admin@poppyshotels.com",
    password: "Poppyshotel@123",
  };

  const superAdminExists = await strapi.db
    .query("admin::user")
    .findOne({ where: { email: admin.email } });

  if (!superAdminExists) {
    await strapi.admin.services.user.create({
      ...admin,
      roles: ["strapi-super-admin"],
      isActive: true,
    });
    console.log("✅ Super admin created successfully");
  } else {
    console.log("ℹ️ Super admin already exists");
  }

  process.exit(0);
});
