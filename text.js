<div>
{/* Introduction Section */}
<div className="container mx-auto px-5 py-10">
    <h1 className="text-2xl pt-5 text-white font-bold uppercase text-center mb-10">
        Welcome to <span className="text-bright-sun-300">Major Baseball League</span> Championship
    </h1>
    <div className="flex items-center justify-center gap-8 h-[600px]">
        <div className="text-white flex-1 flex flex-col gap-5 font-poppins">
            <h2 className="text-2xl pt-5 text:font-semibord uppercase">
                Your Ultimate Baseball Companion
            </h2>
            <p className="text-3xl">
                Get real-time MLB updates, player stats, and game insights all in one place!
            </p>
            <p className="text-lg">
                The Major Baseball League Championship Companion is a cutting-edge web application designed to be the ultimate
                destination for baseball enthusiasts. Whether you're a passionate fan, a stats junkie, or someone looking to stay updated on the latest MLB news,
                this platform provides an engaging and comprehensive experience tailored to meet your needs.
            </p>
        </div>
        <div className="flex-1">
            <img src={Introduction} alt="Introduction" className="rounded-lg shadow-lg bg-white" />
        </div>
    </div>
</div>

{/* Hero Section with Background */}
<div
    className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
    style={{
        backgroundImage: `url(${bgplaying})`, // Correct use of `url()`
    }}
>
    {/* Overlay for Text Clarity */}
    <div className="absolute inset-0 bg-black-950 bg-opacity-50"></div>

    {/* Content Section */}
    <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Ultimate Baseball Companion
        </h1>
        <p className="text-lg md:text-xl mb-8">
            Get real-time MLB updates, player stats, and game insights—all in one place!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold">
                Start Chatting
            </button>
            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-lg font-semibold">
                Explore Features
            </button>
        </div>
    </div>

    {/* Chatbot Illustration */}
    <div className="absolute bottom-16 right-16 md:bottom-20 md:right-20">
        <img
            src="/path-to-chatbot-illustration.png"
            alt="Chatbot Illustration"
            className="w-32 h-32 md:w-48 md:h-48"
        />
    </div>
</div>
</div>