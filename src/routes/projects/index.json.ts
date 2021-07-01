import posts from './_posts';

export function get() {
  console.log("/projects/index.json")
  return {
    body: Object.keys(posts)
                .map((slug) => (
                  {
                    slug, ...posts[slug],
                  })),
  };
}
