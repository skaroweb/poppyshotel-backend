export default {
  upload: {
    config: {
      provider: "local",
      providerOptions: {},
      actionOptions: {
        upload: {
          allowedMimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/svg+xml",
          ],
        },
      },
    },
  },
};
