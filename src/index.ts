/**
 * This runs automatically when Strapi starts.
 * Works 100% with Strapi 5 (TypeScript).
 */
export default {
  async bootstrap({ strapi }) {
    const adminEmail = process.env.ADMIN_EMAIL || "admin@poppyshotels.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "Poppyshotel@123";

    try {
      // Check if admin user already exists
      const existingAdmin = await strapi.db.query("admin::user").findOne({
        where: { email: adminEmail },
      });

      if (!existingAdmin) {
        const hashedPassword = await strapi
          .service("admin::auth")
          .hashPassword(adminPassword);

        await strapi.db.query("admin::user").create({
          data: {
            email: adminEmail,
            firstname: "Admin",
            lastname: "User",
            password: hashedPassword,
            isActive: true,
            blocked: false,
          },
        });

        console.log("✅ Admin user created successfully");
      } else {
        console.log("ℹ️ Admin user already exists — skipping creation");
      }
    } catch (error) {
      console.error("❌ Error creating admin:", error);
    }
  },
};
