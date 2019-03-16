import Link from 'next/link';

const postFileNames =
  preval`
module.exports = require("fs").readdirSync("./pages/blog/")
` || [];

const posts = postFileNames.map(name => {
  const {
    default: Component,
    meta: { title }
  } = require('../pages/blog/' + name);

  return {
    Component,
    title,
    path: `/blog/${name.replace('.md', '')}`
  };
});

export default () => (
  <div>
    <h1>My Blog</h1>
    {posts.map(post => (
      <div key={`post-${post.title}`}>
        <Link href={post.path}>
          <a>
            <h2>{post.title}</h2>
          </a>
        </Link>
      </div>
    ))}
  </div>
);
