function FeaturedItem({ image, title, year, category, desc }) {
  return (
    <div className="featured-work">
      <div className="featured-img">
        <img src={image} alt={title} />
      </div>

      <article className="featured-article">
        <h3>{title}</h3>

        <div className="featured-badge">
          <p>{year}</p>
          <p>{category}</p>
        </div>

        <p>{desc}</p>
      </article>
    </div>
  );
}

export default FeaturedItem;
