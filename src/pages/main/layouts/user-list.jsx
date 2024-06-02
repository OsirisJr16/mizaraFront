import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const users = [
  {
    id: 1,
    name: "Andry Desktop",
    device: "Lenovo",
    avatar_path: "./5.jpeg",
    online: true,
  },
  {
    id: 2,
    name: "Ramamonjiarisoa Mihaingo Andiniaina",
    avatar_path: "./2.jpg",
    device: "HP",
    online: true,
  },
  {
    id: 3,
    name: "Hary's PC",
    avatar_path: "./3.jpeg",
    device: "DELL",
    online: true,
  },
  {
    id: 4,
    name: "Desktop W550CC",
    avatar_path: "./4.jpeg",
    device: "ASUS",
    online: true,
  },
  {
    id: 5,
    name: "Aina",
    avatar_path: "./avatar.jpeg",
    device: "Mac",
    online: false,
  },
  {
    id: 5,
    name: "Aina",
    avatar_path: "./avatar.jpeg",
    device: "Mac",
    online: false,
  },
  {
    id: 5,
    name: "Aina",
    avatar_path: "./avatar.jpeg",
    device: "Mac",
    online: false,
  },
  {
    id: 5,
    name: "Aina",
    avatar_path: "./avatar.jpeg",
    device: "Mac",
    online: false,
  },
  {
    id: 5,
    name: "Aina",
    avatar_path: "./avatar.jpeg",
    device: "Mac",
    online: false,
  },
];

export default function UserList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative pt-16 isolate lg:px-8">
      <div className="w-full p-4 bg-white rounded-lg shadow-lg dark:bg-zinc-800">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Recherche"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-2 text-lg border border-gray-300 rounded-lg outline-none dark:bg-zinc-800 dark:text-zinc-300 "
          />
          <FaSearch className="ml-2 text-lg text-gray-500 cursor-pointer" />
        </div>
        <div className="max-h-[70vh] overflow-y-auto rounded-lg bg-white p-1 dark:bg-zinc-800">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="relative flex flex-col items-center p-2 mb-4 space-x-4 bg-gray-100 rounded-lg shadow-sm dark:bg-zinc-700 md:flex-row"
              >
                <div className="relative">
                  <div
                    className={`absolute -right-1.5 -top-1 size-3 rounded-full ${user.online ? "bg-green-500" : "bg-gray-500"
                      }`}
                  ></div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full size-10">
                    <img
                      src={user.avatar_path}
                      alt="Avatar"
                      className="rounded-full size-10"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0 text-center md:text-left">
                  <h3 className="text-lg font-medium break-words dark:text-zinc-200">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-zinc-400">{user.device}</p>
                </div>
                <div className="relative">
                  <button className="text-gray-500">
                    <FiMoreVertical className="text-lg" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-red-700 dark:text-zinc-200">No user found!</div>
          )}
        </div>
      </div>
    </div>
  );
}
