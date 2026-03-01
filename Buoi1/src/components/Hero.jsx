function Hero() {
  return (
    <section className="section-header">
      <article className="hero-banner">
        <div>
          <h1>Hi, I am Mario, Creative Technologist</h1>

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>

          <button className="btn btn-primary">
            Download Resume
          </button>
        </div>

        <div>
          <img
            className="my-avatar"
            src="/img/avatar.png"
            alt="avatar"
          />
        </div>
      </article>
    </section>
  );
}

export default Hero;
