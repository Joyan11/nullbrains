/** @format */
import { FaCertificate, FaLaptopCode } from "react-icons/fa";
import {
  AiFillNotification,
  AiFillCodeSandboxSquare,
  AiOutlineBlock,
} from "react-icons/ai";
import { RiCoupon2Fill } from "react-icons/ri";

export const Features = () => {
  return (
    <section id="features" className="mt-20">
      <div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">Our Features</h2>
          <p className="text-gray-700">
            Check out our list of awesome features below.
          </p>
        </div>
        <div className="center">
          <div className="card">
            <FaCertificate className="text-indigo-700 text-4xl" />
            <h6 className="text-gray-700">Certifications</h6>
            <p className="text-sm text-gray-500">
              Each of our plan will provide you and your team with
              certifications
            </p>
          </div>
          <div className="card">
            <AiFillNotification className="text-indigo-700 text-4xl" />
            <h6 className="text-gray-700">Notifications</h6>
            <p className="text-sm text-gray-500">
              Send your notifications to all your customers and keep them
              engaged
            </p>
          </div>
          <div className="card">
            <AiFillCodeSandboxSquare className="text-indigo-700 text-4xl" />
            <h6 className="text-gray-700">Bundles</h6>
            <p className="text-sm text-gray-500">
              High-quality bundles of awesome tools to help you out
            </p>
          </div>
          <div className="card">
            <FaLaptopCode className="text-indigo-700 text-4xl" />
            <h6 className="text-gray-700">Developer tools</h6>
            <p className="text-sm text-gray-500">
              Developer tools to help you grow your application and keep it
              up-to-date
            </p>
          </div>
          <div className="card">
            <AiOutlineBlock className="text-indigo-700 text-4xl" />
            <h6 className="text-gray-700">Building blocks</h6>
            <p className="text-sm text-gray-500">
              The right kind of building blocks to take your companyto the next
              level
            </p>
          </div>
          <div className="card">
            <RiCoupon2Fill className="text-indigo-700 text-4xl" />
            <h6 className="text-gray-700">Coupons</h6>
            <p className="text-sm text-gray-500">
              Coupon system to provide special offers and discounts for your app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
