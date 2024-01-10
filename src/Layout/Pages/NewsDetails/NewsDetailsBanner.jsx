import { Link } from "react-router-dom";


const NewsDetailsBanner = () => {
    return (
      <div className="pt-32 pb-20 bg-center bg-no-repeat bg-cover news-detail-banner flex items-center justify-center">
        <div className="text-sm breadcrumbs text-white ">
          <h3 className="text-white text-center text-4xl font-bold mb-5">Single Blog</h3>
          <ul className="justify-center">
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              Single Blog
            </li>
          </ul>
        </div>
      </div>
    );
};

export default NewsDetailsBanner;