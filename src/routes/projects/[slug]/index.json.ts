import posts from '../_posts';

export function get({ params }) {
  console.log("/slug/index.json")
  if (params.slug in posts) {
    return {
      body: posts[params.slug],
    };
  }

  return {
    status: 404,
  };
}
