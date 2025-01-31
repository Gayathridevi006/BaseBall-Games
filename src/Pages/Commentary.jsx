import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

const CommentaryCard = () => {
    return (
        <div className=" bg-purple-100 min-h-screen">
            <div className="p-5">
                <div className=" bg-green-500 shadow-lg rounded-lg w-10 p-2">
                    <Link to="/get-start">
                        <ArrowBack className="text-6xl text-white cursor-pointer  " />
                    </Link>
                </div>

            </div>
            <div className="p-6  flex items-center  justify-center relative">

                <div className="flex flex-col gap-4   bg-transparent border-4  bg-white rounded-xl shadow-lg max-w-4xl border-white  p-5 lg:p-6 lg:max-h-full">

                    <h1 className="text-2xl font-bold text-purple-800 mb-4"> See the details of the commentary</h1>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Favorite Player"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="text"
                            placeholder="Favorite Team"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                        <textarea
                            placeholder="Enter Commentary"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 resize-none"
                        ></textarea>
                        <select
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="es">Japanese</option>
                            {/* Add more language options */}
                        </select>
                        <button
                            type="submit"
                            className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 w-full"
                        >
                            Generate Commentary Card
                        </button>
                    </form>

                </div>
                {/* <div className="absolute lg:top-12 top-24 lg:text-7xl text-5xl">
                    <FaBaseballBall style={{ color: colors[colorIndex] }} className="animate-ping" />
                </div> */}

            </div>
        </div>
    );
};

export default CommentaryCard;
