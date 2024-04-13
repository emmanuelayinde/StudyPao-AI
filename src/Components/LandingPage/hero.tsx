import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mt-10 mx-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green w-full md:w-96 leading-normal mx-auto">
          Achieve More. Learn Faster.
        </h1>

        <p className="w-full md:w-[50%] mx-auto my-5">
          Supercharge your learning with Studdy Buddie. Our AI maximizes study
          sessions and helps you grasp concepts faster and achieve better
          results in less time.
        </p>

        <Link to="/signin">
          <button className="bg-green text-white px-4 py-2 rounded mid mb-[80px] my-10">
            Sign In
          </button>
        </Link>

        <div className="relative">
          <div>
            <img
              src="/Images/vector.svg"
              alt="vector"
              className="absolute bottom-0 right-0"
            />

            <img
              src="/Images/fill.svg"
              alt="fill"
              className="absolute right-2/4 left-2/3 -top-12"
            />
          </div>

          <div className="relative w-full md:w-[65%] mx-auto">
            <img
              src="/Images/hero.AVIF"
              alt="hero"
              loading="lazy"
              className="mx-auto relative hidden md:block"
            />

            <img
              src="/Images/mobileHero.AVIF"
              alt="hero"
              loading="lazy"
              className="mx-auto w-full  relative md:hidden"
            />

            <div className="flex bg-lightOrange w-48 text-left gap-5 px-2 py-1 rounded-md absolute -top-10 left- shadow-inner">
              <img src="/Images/book.svg" alt="book" />
              <span className="text-orange">Upload Bulky Textbooks</span>
            </div>

            <div className="text-left bg-lightOrange text-orange w-52 px-2 py-1 rounded-md absolute top-20 right-0 md:-right-[10px] shadow-inner">
              <span>Generate Intereactive Quizzes like: </span>
              <ul className="list-disc mx-8">
                <li>Quizes</li>
                <li>Flash Cards</li>
                <li>MCQs</li>
                <li>Essays</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
