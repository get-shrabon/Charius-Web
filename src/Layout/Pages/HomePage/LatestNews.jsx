
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SingleNews from "./SingleNews";
import { FaEye } from "react-icons/fa";

const LatestNews = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [news, setNews] = useState([]);
  const [showAll, setShowAll] = useState(3)
  useEffect(() => {
    fetch("news-data.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div data-aos="fade-up" className="py-20">
      <div className="container mx-auto">
        <p className="text-yellow-500 text-3xl text-center">From The Blog</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 mt-5 w-full md:w-2/4 mx-auto">
          Our Latest News and Articles
        </h2>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {news.slice(0, showAll).map((data) => (
              <SingleNews key={data.id} data={data}></SingleNews>
            ))}
          </div>
          <div className={showAll === news.length && "hidden"}>
            <button
              onClick={() => setShowAll(news.length)}
              className="theme-btn flex items-center gap-2 mx-auto mt-10"
            >
              <FaEye /> Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
