import Image from "next/image";
import { Pin, Headphones, CallCalling } from "@/public/svg/index";
export default function Home() {
  const data = [
    {
      icon: <CallCalling />,
      heading: "Phone Number",
      firstInfo: "+1 843 848 98 ",
      secondInfo: "+6 848 3422",
      backgroundColor : "bg-gradient-to-tl from-blue-500   to-cyan-500"
    },
    {
      icon: <Pin />,
      heading: "Location",
      firstInfo: "USA, Stockholm 401 Warren",
      secondInfo: "Street Hudson, NY 12",
      backgroundColor : "bg-gradient-to-tl from-[#EB5779]  to-[#F6C149]"
    },
    {
      icon: <Headphones />,
      heading: "support",
      firstInfo: "currentvpn@gmail.com ",
      secondInfo: "Chat: +27 399 2378",
      backgroundColor : "bg-gradient-to-tl from-blue-500   to-cyan-500"
    },
  ];
  return (
    <div className=" w-screen h-screen flex flex-col  justify-center items- center gap-6 ">
      <h2 className="text-[#092857] text-center text-5xl">Contact us..!</h2>
      <div className="flex gap-4 mt-12 justify-center">
        {data.map((item, index) => {
          return (
            <div className="relative ">
              <div
                className={` flex justify-center items-center h-[86px] w-[86px] rounded-t-full  absolute top-[-49px] left-[110px] ${item.backgroundColor}   ` }
                style={{ zIndex: 80 }}
              >
                {item.icon}
              </div>
              <div
                className="max-w-sm mx-auto   mb-10 p-10 py-12 z-10"
                style={{
                  clipPath: "ellipse(47% 73% at 49% -34%)",
                  position: "relative",
                  zIndex: 33,
                  backgroundColor: "black",
                }}
              ></div>

              <div
                className=" w-[300px] h-[235px] bg-white  flex flex-col justify-center items-center  overflow-visible "
                style={{
                  clipPath: "ellipse(56% 96% at 49% -8%)",
                  position: "relative",
                  marginTop: "-128px",
                  borderTopRightRadius: "51px",
                  borderTopLeftRadius: "51px",
                }}
              >
                <h3 className="text-xl text-[#092857] font-medium mb-4 ">
                  {item.heading}
                </h3>
                <div className="flex flex-col gap-px justify-center items-center">
                  <p className="text-base text-[#8D98A9]">{item.firstInfo}</p>
                  <p className="text-base text-[#8D98A9]">{item.secondInfo}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

     
    </div>
  );
}
