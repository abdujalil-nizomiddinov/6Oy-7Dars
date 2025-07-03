import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
function MainLayout() {
  return (
    <main>
      <header className="w-full flex flex-col ">
        <nav className="mx-auto p-5 flex justify-between items-center w-full">
          <a
            href="https://t.me/n1zomiddinov_571"
            target="_blank"
            className="relative active:scale-95 text-3xl text-[lime] font-[900] cursor-pointer select-none tracking-[6px] hover:scale-z-[18px] rounded-[25%] px-4 py-2 duration-100 ease-out hover:duration-200 hover:ease-in shadow-[0_0_10px_1px_lime] bg-black z-10 outline-none focus-visible:shadow-[0_0_10px_1px_white] focus-visible:outline focus-visible:outline-lime-500"
          >
            <span className="relative z-10">AlSahiy</span>
            <span className="absolute inset-0 rounded-[25%] shadow-[inset_0_0_10px_lime] bg-black z-0"></span>
          </a>
          <div className="max-[650px]:block hidden text-[lime] text-4xl">
            <FaBars />
          </div>
          <ul className="flex gap-2 max-[800px]:gap-0 max-[650px]:hidden">
            <li>
              <Link
                to="/"
                className="text-[lime] transition-all duration-100 ease-out hover:duration-200 hover:ease-in px-4 py-2 hover:shadow-[inset_0_0_10px_lime] rounded-[25%] focus:shadow-[inset_0_0_10px_yellow] focus:text-yellow-500 outline-none"
              >
                Bosh sahifa
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-[lime] transition-all duration-100 ease-out hover:duration-200 hover:ease-in px-4 py-2 hover:shadow-[inset_0_0_10px_lime] rounded-[25%] focus:shadow-[inset_0_0_10px_yellow] focus:text-yellow-500 outline-none"
              >
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[lime] transition-all duration-100 ease-out hover:duration-200 hover:ease-in px-4 py-2 hover:shadow-[inset_0_0_10px_lime] rounded-[25%] focus:shadow-[inset_0_0_10px_yellow] focus:text-yellow-500 outline-none"
              >
                Bog'lanish
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-5 relative max-w-[1200px] mx-30 max-[1000px]:mx-10">
          <img
            src="https://picsum.photos/1200/300"
            alt="bg"
            className="rounded-tr-[100%] rounded-bl-[100%] shadow-[0_0_15px_2px_lime] max-w-full max-[450px]:hidden"
          />
          <img
            src="https://picsum.photos/400/100"
            alt="bg"
            className="absolute top-0 right-0 rounded-tr-[100%] rounded-bl-[100%] shadow-[0_0_15px_2px_lime] max-[1270px]:max-w-[300px] max-[1050px]:max-w-[250px] max-[900px]:max-w-[200px] max-[800px]:max-w-[150px] max-[680px]:max-w-[130px] max-[650px]:hidden"
          />
          <img
            src="https://picsum.photos/400/100"
            alt="bg"
            className="absolute bottom-0 left-0 rounded-tr-[100%] rounded-bl-[100%] shadow-[0_0_15px_2px_lime] max-[1270px]:max-w-[300px] max-[1050px]:max-w-[250px] max-[900px]:max-w-[200px] max-[800px]:max-w-[150px] max-[680px]:max-w-[130px] max-[650px]:hidden"
          />
        </div>
      </header>

      <Outlet />
      <footer className="w-full text-center my-2 mb-10 select-none cursor-pointer">
        <a
          href="https://t.me/n1zomiddinov_571"
          target="_blank"
          className="outline-none"
        >
          <span className="text-lg max-[500px]:text-center text-[lime] hover:text-yellow-400 transition-all duration-100 ease-out hover:duration-200 hover:ease-in px-4 py-2 hover:shadow-[inset_0_0_10px_yellow] rounded-[25%] bg-transparent max-[400px]:text-sm">
            &copy; Powered by Abdujalil Nizomiddinov (Devixo coder)
          </span>
        </a>
      </footer>
    </main>
  );
}

export default MainLayout;
