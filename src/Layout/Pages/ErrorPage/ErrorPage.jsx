import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center w-full h-[100vh]">
            <div className="container mx-auto text-center space-y-4">
                <h2 className="text-5xl font-semibold">Oops!</h2>
                <h4 className="text-3xl font-semibold font-sans">Page not Found</h4>
                <Link to={`/`} className="btn btn-warning">Go Back Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;