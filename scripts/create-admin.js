// scripts/create-admin.js
const strapi = require("@strapi/strapi");
const bcrypt = require("bcryptjs");

async function createAdmin() {
  const app = await strapi().load();

  const adminExists = await strapi.db.query("admin::user").findOne({
    where: { email: "admin@poppyshotels.com" },
  });

  if (adminExists) {
    console.log("✅ Admin already exists.");
    process.exit(0);
  }

  const password = "Poppyshotel@123";
  const hashedPassword = await bcrypt.hash(password, 10);

  await strapi.db.query("admin::user").create({
    data: {
      firstname: "Admin",
      lastname: "User",
      email: "admin@poppyshotels.com",
      password: hashedPassword,
      isActive: true,
      roles: ["strapi-super-admin"],
    },
  });

  console.log("🎉 Admin user created successfully!");
  process.exit(0);
}

createAdmin().catch((err) => {
  console.error("❌ Error creating admin:", err);
  process.exit(1);
});
