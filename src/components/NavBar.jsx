import React, { useState, useEffect } from "react";
import img1 from "../assets/image_1.svg";
import search from "../assets/Vector.svg";
import drawer from "../assets/Vector1.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("test");
    fetch("https://fintra.co.in/english?debug=true")
      .then((response) => response.json())
      .then((data) => {
        console.log(data["navigation"]);
        setPosts(data["navigation"]);
        console.log(posts[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const navigate = useNavigate();

  if (open) {
    return (
      <div className="flex-col">
        <nav className=" flex items-center py-5 top-0 z-20 bg-white rounded-t-lg p-4 border border-sky-500 justify-between ">
          <div className="flex flex-row  justify-between  gap-6">
            <img className="w-8 h-8 rounded-full" src={img1} alt="" />
            <div className="text-cyan-500 text-lg font-bold font-montserrat">
              Fintra{" "}
            </div>
          </div>
          <div className="flex flex-row  justify-between  gap-6">
            <img className="w-8 h-8" src={search} alt="" />
            <img
              className="w-8 h-8 hover:cursor-pointer "
              src="https://cdn-icons-png.flaticon.com/512/5244/5244832.png"
              alt=""
              onClick={closeDrawer}
            />

            {/* <div className="h-12">
          <DrawerWithNavigation />
        </div> */}
          </div>
        </nav>
        <div className="w-full text-black flex justify-center font-montserrat flex-col mr-4 border-2">
          {posts.map((post) => (
            <div
              className="flex p-2 justify-center hover:cursor-pointer hover:text-[#00C6CA]"
              onClick={() => {
                navigate(post.href, { replace: true });
                closeDrawer();
              }}
            >
              {post.caption}
            </div>
          ))}

          {/* <div
            className="flex p-2 justify-center hover:cursor-pointer hover:text-[#00C6CA]"
            onClick={() => {
              navigate("/", { replace: true });
              closeDrawer();
            }}
          >
            Home
          </div>
          <div
            className="flex p-2 justify-center hover:cursor-pointer hover:text-[#00C6CA]"
            onClick={() => {
              navigate("/calc ", { replace: true });
              closeDrawer();
            }}
          >
            Calculators
          </div>
          <div
            className="flex p-2 justify-center hover:cursor-pointer hover:text-[#00C6CA]"
            onClick={() => {
              navigate("/mutualFund ", { replace: true });
              closeDrawer();
            }}
          >
            Mutual Funds
          </div>
          <div
            className="flex p-2 justify-center hover:cursor-pointer hover:text-[#00C6CA]"
            onClick={() => {
              navigate("/sipCalc ", { replace: true });
              closeDrawer();
            }}
          >
            Sip Calculator
          </div>
          <div
            className="flex p-2 justify-center hover:cursor-pointer hover:text-[#00C6CA]"
            onClick={() => {
              navigate("/listMf ", { replace: true });
              closeDrawer();
            }}
          >
            List of Mutual Funds
          </div> */}
        </div>
      </div>
    );
  } else
    return (
      <nav className=" flex items-center py-5 top-0 z-20 bg-white rounded-t-lg p-4 border border-sky-500 justify-between ">
        <div className="flex flex-row  justify-between  gap-6">
          <img className="w-8 h-8 rounded-full" src={img1} alt="" />
          <div className="text-cyan-500 text-lg font-bold font-montserrat">
            Fintra{" "}
          </div>
        </div>
        <div className="flex flex-row  justify-between  gap-6">
          <img className="w-8 h-8 " src={search} alt="" />
          <img
            className="w-8 h-8 hover:cursor-pointer"
            src={drawer}
            alt=""
            onClick={openDrawer}
          />

          {/* <div className="h-12">
          <DrawerWithNavigation />
        </div> */}
        </div>
      </nav>
    );
}

export default Navbar;
