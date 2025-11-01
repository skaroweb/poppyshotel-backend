import strapi from "@strapi/strapi";

// Extend process.env types
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ADMIN_EMAIL?: string;
      ADMIN_PASSWORD?: string;
    }
  }
}

async function createAdmin() {
  console.log("🚀 Starting Strapi to create admin...");

  // ✅ Create Strapi app properly for v5
  const app = await strapi.createStrapi().load();

  try {
    const db = app.db;

    // Get super admin role
    const superAdminRole = await db.query("admin::role").findOne({
      where: { code: "strapi-super-admin" },
    });

    if (!superAdminRole) {
      console.error("❌ Super admin role not found.");
      process.exit(1);
    }

    const email = process.env.ADMIN_EMAIL || "admin@poppyshotels.com";
    const password = process.env.ADMIN_PASSWORD || "Poppyshotel@123";

    // Check if admin already exists
    const existingAdmin = await db.query("admin::user").findOne({
      where: { email },
    });

    if (existingAdmin) {
      console.log("ℹ️ Admin already exists, skipping creation.");
      await app.destroy();
      return;
    }

    // Create admin
    const newAdmin = await db.query("admin::user").create({
      data: {
        firstname: "Admin",
        lastname: "User",
        email,
        password,
        isActive: true,
        roles: [superAdminRole.id],
      },
    });

    console.log("✅ Admin created successfully:", newAdmin.email);
  } catch (error) {
    console.error("❌ Error creating admin:", error);
  } finally {
    await app.destroy();
    console.log("🧹 Strapi instance closed.");
  }
}

createAdmin();
