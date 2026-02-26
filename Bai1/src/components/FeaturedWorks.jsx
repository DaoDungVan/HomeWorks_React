import FeaturedItem from "./FeaturedItem";

const works = [
  {
    image: "/img/featured-work-1.png",
    title: "Designing Dashboards",
    year: "2026",
    category: "Dashboard",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
  },
  {
    image: "/img/featured-work-2.png",
    title: "Vibrant Portraits",
    year: "2025",
    category: "Illustration",
    desc: "Velit officia consequat duis enim velit mollit."
  },
  {
    image: "/img/featured-work-3.png",
    title: "Malayalam Typography",
    year: "2024",
    category: "Typography",
    desc: "Exercitation veniam consequat sunt nostrud amet."
  }
];

function FeaturedWorks() {
  return (
    <section className="featured-works">

      <div className="recent-posts-header">
        <h4>Featured works</h4>
      </div>

      {works.map((work, index) => (
        <div key={index}>
          <FeaturedItem {...work} />
          <hr />
        </div>
      ))}

    </section>
  );
}

export default FeaturedWorks;
