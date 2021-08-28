/** @format */

export const Home = () => {
  return (
    <section id="home">
      <div className="container mx-auto flex flex-col items-center text-center  space-y-10 pt-20">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Start Crafting Your <br />{" "}
          <span className="text-indigo-600">Next Great Idea</span>
        </h1>
        <p className="text-gray-500 md:w-5/12">
          Simplifying the creation of landing pages, blog pages, application
          pages and so much more
        </p>
        <div className="flex flex-col relative">
          <small className="absolute -top-3 -right-4 right-0 rounded-full px-2 py-1 text-white text-xs bg-green-400">
            only $15/mo
          </small>
          <a
            href="#home"
            className="rounded-full px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition duration-300">
            Purchase Now
          </a>
          <small className="pt-3 text-indigo-500 cursor-pointer">
            Learn more
          </small>
        </div>
        <div className="pt-28">
          <p className="uppercase text-xs font-bold">
            Trusted By Top Leading Companies
          </p>
          <div className="flex items-baseline space-x-5 md:space-x-16 flex-wrap pt-2 justify-center gap-y-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/1920px-Disney%2B_logo.svg.png"
              alt="Disney plus"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
              alt="Google"
              className="h-7"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/1920px-HubSpot_Logo.svg.png"
              alt="Hubspot"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
              alt="Youtube"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1920px-Slack_Technologies_Logo.svg.png"
              alt="Slack"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1920px-Shopify_logo_2018.svg.png"
              alt="Shopify"
              className="h-6"
            />
          </div>
        </div>
        <div className="md:w-9/12 pt-8">
          <div className="flex md:space-x-32 p-3 flex-col md:flex-row items-center">
            <figure className="md:p-5">
              <img
                src="https://www.freevector.com/uploads/vector/preview/26316/Space_rocket.jpg"
                alt="rocket"
                className="h-56 md:pl-5"
              />
            </figure>
            <div className="flex flex-col text-left p-5 space-y-6 md:w-6/12">
              <h3 className="text-2xl font-semibold">Boost Productivity</h3>
              <p className="text-gray-700">
                Build an atmosphere that creates productivity in your
                organization and your company culture.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center space-x-3">
                  <span className="list"></span>{" "}
                  <p> Maximize productivity and growth</p>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="list"></span>
                  <p>Speed past your Competition</p>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="list"></span>
                  <p>Learn the top techniques</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:p-10 p-3 flex-col flex-col-reverse md:flex-row items-center">
            <div className="flex flex-col text-left p-5 space-y-6 md:w-6/12">
              <h3 className="text-2xl font-semibold">Automated Tasks</h3>
              <p className="text-gray-700">
                Save time and money with our revolutionary services. We are the
                leaders in the industry.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center space-x-3">
                  <span className="list"></span>{" "}
                  <p> Automated task management workflow</p>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="list"></span>
                  <p>Detailed analytics for your data</p>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="list"></span>
                  <p>Some awesome integrations</p>
                </li>
              </ul>
            </div>
            <figure>
              <img
                src="https://www.freevector.com/uploads/vector/preview/26316/Space_rocket.jpg"
                alt="rocket"
                className="h-56 md:pl-28 object-fit"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
