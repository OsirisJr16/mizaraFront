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
      <div className="bg-white text-zinc-600 dark:text-zinc-300">
        <nav className="bg-white border-gray-200 shadow-md dark:bg-zinc-800">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <a className="flex items-center space-x-3">
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Mi-Zara
              </span>
            </a>
            <div className="items-center justify-between w-full md:order-1 md:flex md:w-auto">
              <button
                type="button"
                className="w-40 px-4 py-2 text-sm font-medium text-center bg-gray-300 rounded-lg text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"

              >
                Recevoir
              </button>
            </div>
            <div className="relative flex items-center md:order-2">
              <Stack align='center' direction='row' spacing='24px'>
                <RepeatIcon boxSize={6} />
                <BellIcon boxSize={6} />
                <Stack align='center' direction='row'>
                  <Switch size="lg" isChecked={mode} onChange={() => handleChange()} />
                  <p className="font-bold text-zinc-600 dark:text-zinc-300">{mode ? "Dark" : "Ligth"}</p>
                </Stack>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Quitter
                </button>
                <Avatar size="sm" />
              </Stack>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
