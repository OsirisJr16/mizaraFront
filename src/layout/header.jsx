import { BellIcon, RepeatIcon } from "@chakra-ui/icons";
import { Avatar, Stack, Switch } from "@chakra-ui/react";
import useDarkMode from "../hooks/useDarkMode";

export default function Header() {
  const { mode, toggleMode } = useDarkMode({ initialValue: true });

  function handleChange() {
    toggleMode();
    console.log("change");
    console.log(mode);
  }

  return (
    <>
      <div className="bg-white text-zinc-600 dark:text-zinc-300">
        <nav className="fixed z-10 w-full border-gray-200 bg-white shadow-md dark:bg-zinc-800">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <a className="flex items-center space-x-3">
              <img src="./favicon.ico" className="h-8" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold ">
                Mi-Zara
              </span>
            </a>
            <div className="w-full items-center justify-between md:order-1 md:flex md:w-auto">
              <button
                type="button"
                className="rounded-lg bg-gray-300 px-4 py-2 text-center text-sm font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
                style={{ width: "400px" }}
              >
                Recevoir
              </button>
            </div>
            <div className="relative flex items-center md:order-2">
              <Stack align="center" direction="row" spacing="24px">
                <RepeatIcon boxSize={6} />
                <BellIcon boxSize={6} />
                <Stack align="center" direction="row">
                  <Switch
                    isChecked={mode}
                    onChange={() => handleChange()}
                    size="lg"
                  />
                  <p className="font-bold text-zinc-600 dark:text-zinc-300">{mode ? "Dark" : "Ligth"}</p>
                </Stack>
                <button
                  type="button"
                  className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
