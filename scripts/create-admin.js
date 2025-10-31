const { Strapi } = require("@strapi/strapi");

async function createAdmin() {
  console.log("🚀 Starting Strapi to create admin user...");

  // Load Strapi app (not start server)
  const app = await Strapi().load();

  const existingAdmin = await app.db.query("admin::user").findOne({
    where: { email: "admin@poppyshotels.com" },
  });

  if (existingAdmin) {
    console.log("✅ Admin user already exists, skipping creation.");
    process.exit(0);
  }

  const adminUser = {
    firstname: "Admin",
    lastname: "User",
    email: "admin@poppyshotels.com",
    password: "Poppyshotel@123",
    isActive: true,
  };

  await app.db.query("admin::user").create({ data: adminUser });

  console.log("🎉 Admin user created successfully!");
  process.exit(0);
}

createAdmin().catch((err) => {
  console.error("❌ Error creating admin:", err);
  process.exit(1);
});
