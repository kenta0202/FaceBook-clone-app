module.exports = {
  rewrites() {
    return [
      {
        source: "/edge/api/authentication/:path*",
        destination: "/api/auth/:path*",
      },
    ];
  },
  images: {
    domains: [
      "links.papareact.com",
      "platform-lokaside.fbsbx.com",
      "lh3.googleusercontent.com",
      "firebasestorage.googleapis.com",
      "https://firebasestorage.googleapis.com/v0/b",
    ],
    // , "image.tmdb.org"
  },
  //   next.config.js に使用する外部ドメインを設定
};
