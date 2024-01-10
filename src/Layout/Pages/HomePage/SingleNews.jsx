import { FaRegComments } from "react-icons/fa";
import PropTypes from "prop-types";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
const SingleNews = ({ data }) => {
  const {
    id,
    title,
    description,
    image,
    author_name,
    author_img,
    comments_number,
    publish_date,
  } = data;
  return (
    <div className="custom-shadow rounded-lg">
      <div className="p-5">
        <div className="h-[fit-content]  relative">
          <img className="rounded-t-lg w-full" src={image} alt="" />
          <div className="bg-warning px-10 py-5 rounded-r-full w-[fit-content] absolute news-card bottom-3 left-[-15px]">
            <p className="text-white font-semibold">{publish_date}</p>
          </div>
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between my-5">
            <div className="flex items-center gap-2">
              <img className="rounded-full" src={author_img} alt="" />
              <p className="font-semibold">{author_name} </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="block">
                <FaRegComments />
              </span>
              <p className="font-semibold">{comments_number} Comments</p>
            </div>
          </div>
          <a href="#">
            <h3 className=" font-semibold duration-300 hover:text-warning text-2xl 2xl:text-3xl">
              {title}
            </h3>
          </a>
          <p className="my-5 line-clamp-4">{description}</p>
        </div>
      </div>
      <Link to={`/newsDetails/${id}`} className="bg-slate-50 p-4 flex items-center justify-between rounded-b-lg">
        <p className="capitalize text-warning font-semibold" href="#">
          read more...
        </p>
        <p href="#" className="text-3xl text-warning">
          <MdOutlineArrowRightAlt />
        </p>
      </Link>
    </div>
  );
};

export default SingleNews;
SingleNews.propTypes = {
  data: PropTypes.object.isRequired,
};
