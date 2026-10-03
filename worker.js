export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/test") {
      const result = await env.DB
        .prepare("SELECT COUNT(*) AS count FROM enquiries")
        .first();

      return Response.json({
        success: true,
        enquiries: result.count
      });
    }

    return env.ASSETS.fetch(request);
  }
};
