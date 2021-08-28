/** @format */
import image1 from "../assets/images/pexels-charlotte-may-5946676.jpg";
import image2 from "../assets/images/pexels-pixabay-161573.jpg";
import image3 from "../assets/images/pexels-marko-blazevic-2708981.jpg";
import image4 from "../assets/images/pexels-fox-3829227.jpg";
import image5 from "../assets/images/pexels-cottonbro-3992140.jpg";
export const Blog = () => {
  return (
    <section id="blog" className="mt-20">
      <div className="px-5 md:pl-32">
        <h2 className="text-4xl font-bold">The Project Blog</h2>
        <p className="text-gray-600 pt-2">
          Designes and layouts to help you with your app
        </p>
      </div>

      <div className="center">
        <div className="blog-card bg-yellow-500">
          <figure className="h-64">
            <img src={image1} alt="Design" className="card-image" />
          </figure>
          <div className="p-5 relative space-y-3">
            <span className="tag">Resources</span>
            <h6 className="text-4xl font-bold text-white">
              Refreshing Delights
            </h6>
            <p className="text-white">
              Quench satisfying designs to help you stir up emotion and tell you
              a story
            </p>
          </div>
        </div>
        <div className="blog-card bg-green-500">
          <figure className="h-64">
            <img src={image2} alt="Design" className="card-image" />
          </figure>
          <div className="p-5 relative space-y-3">
            <span className="tag">Lifestyle</span>
            <h6 className="text-4xl font-bold text-white">
              Healthier lifestyle
            </h6>
            <p className="text-white">
              Living a healthier lifestyle will help with your productivity and
              your mind
            </p>
          </div>
        </div>
        <div className="blog-card bg-purple-500">
          <figure className="h-64">
            <img src={image3} alt="Design" className="card-image" />
          </figure>
          <div className="p-5 relative space-y-3">
            <span className="tag">Entertainment</span>
            <h6 className="text-4xl font-bold text-white">Gaming Evolution</h6>
            <p className="text-white">
              Learn about the evolution of gaming and how it started an
              revolution
            </p>
          </div>
        </div>
        <div className="blog-card ">
          <figure className="h-52">
            <img src={image4} alt="Design" className="card-image" />
          </figure>
          <div className="p-5 relative space-y-1">
            <span className="tag2 bg-indigo-500 text-white ">Inspiration</span>
            <h6 className="text-xl font-bold ">Best Workstation of the year</h6>
            <p className="text-gray-500">
              Checkout this inspiring workstations to get an idea on how to
              level-up your workstation
            </p>
          </div>
        </div>
        <div className="blog-card">
          <figure className="h-52">
            <img src={image5} alt="Design" className="card-image" />
          </figure>
          <div className="p-5 relative space-y-1">
            <span className="tag2 bg-yellow-700 text-white ">Food</span>
            <h6 className="text-xl font-bold ">Eating for Productivity</h6>
            <p className="text-gray-500">
              Learn how to be more deciplined in your diet and how you can eat
              to maximise productivity
            </p>
          </div>
        </div>
        <div className="blog-card">
          <figure className="h-52">
            <img src={image5} alt="Design" className="card-image" />
          </figure>
          <div className="p-5 relative space-y-1">
            <span className="tag2 bg-indigo-500 text-white ">Food</span>
            <h6 className="text-xl font-bold ">A Design Mind-set</h6>
            <p className="text-gray-500">
              What does it mean to have a design mind-set? Learn how to improve
              your eye for design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
