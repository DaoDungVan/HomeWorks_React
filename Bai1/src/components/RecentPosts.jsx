const posts = [
  {
    title: "Making a design system from scratch",
    date: "12 Feb 2020",
    category: "Design, Pattern",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
  },
  {
    title: "Creating pixel perfect icons",
    date: "20 Mar 2020",
    category: "UI, Icon",
    desc: "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat."
  }
];

function RecentPosts() {
  return (
    <section className="recent-posts">
      <div className="section-header">

        <div className="recent-posts-header">
          <h4>Recent posts</h4>
          <a className="recent-posts-link">View all</a>
        </div>

        <div className="recent-post">
          {posts.map((post, index) => (
            <article className="recent-post-details" key={index}>
              <h3>{post.title}</h3>

              <div className="recent-post-description">
                <time>{post.date}</time>
                <p>{post.category}</p>
              </div>

              <p>{post.desc}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RecentPosts;
