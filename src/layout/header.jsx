import { BellIcon, RepeatIcon } from "@chakra-ui/icons";
import { Avatar, Stack, Switch } from "@chakra-ui/react";
import useDarkMode from "../hooks/useDarkMode";

export default function Header() {

  const { mode, toggleMode } = useDarkMode({ initialValue: false });

  function handleChange() {
    toggleMode()
    console.log("change");

    console.log(mode);
  }

  return (
    <>
      <div className="bg-white">
        <nav className="bg-white border-gray-200 fixed w-full z-10 shadow-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a className="flex items-center space-x-3">
              <img src="./favicon.ico" className="h-8"/>
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Mi-Zara
              </span>
            </a>
            <div className="items-center justify-between w-full md:flex md:w-auto md:order-1">
              <button
                type="button"
                className="text-black bg-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                style={{ width: "400px" }}
              >
                Recevoir
              </button>
            </div>
            <div className="flex md:order-2 items-center relative">
              <Stack align="center" direction="row" spacing="24px">
                <RepeatIcon boxSize={6} />
                <BellIcon boxSize={6} />
                <Stack align="center" direction="row">
                  <Switch size="lg" />
                  <p className="font-bold">Dark</p>
                </Stack>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Quitter
                </button>
                <Avatar size="sm" src="src/assets/pics/1.jpg" />
              </Stack>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
