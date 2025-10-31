"use strict";

const { createStrapi } = require("@strapi/strapi");
const strapi = createStrapi();

async function createAdmin() {
  await strapi.load();

  const hasAdmin = await strapi.db.query("admin::user").findOne({
    where: { email: "admin@poppyshotels.com" },
  });

  if (!hasAdmin) {
    await strapi.db.query("admin::user").create({
      data: {
        firstname: "Admin",
        lastname: "User",
        email: "admin@poppyshotels.com",
        password: "Poppyshotel@123",
        isActive: true,
        roles: await strapi.db.query("admin::role").findMany(),
      },
    });
    console.log("✅ Admin created");
  } else {
    console.log("⚠️ Admin already exists");
  }

  await strapi.destroy();
}

createAdmin().catch((err) => {
  console.error("❌ Error creating admin:", err);
});
