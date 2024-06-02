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
];

export default function UserList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative isolate pt-16 lg:px-8">
      <div className="w-full rounded-lg bg-white p-4 shadow-lg">
        <div className="mb-4 flex items-center">
          <input
            type="text"
            placeholder="Recherche"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 p-2 text-lg"
          />
          <FaSearch className="ml-2 cursor-pointer text-gray-500 text-lg" />
        </div>
        <div className="rounded-lg bg-white p-1">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="relative mb-4 flex items-center space-x-4 rounded-lg bg-gray-100 p-2 shadow-sm flex-col md:flex-row"
              >
                <div className="relative">
                  <div
                    className={`absolute -right-1.5 -top-1 w-3 h-3 rounded-full ${
                      user.online ? "bg-green-500" : "bg-gray-500"
                    }`}
                  ></div>
                  <div className="flex w-10 h-10 items-center justify-center rounded-full bg-gray-300">
                    <img
                      src={user.avatar_path}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                </div>
                <div className="min-w-0 flex-1 text-center md:text-left">
                  <h3 className="break-words text-lg font-medium">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500">{user.device}</p>
                </div>
                <div className="relative">
                  <button className="text-gray-500">
                    <FiMoreVertical className="text-lg" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-red-700">No user found!</div>
          )}
        </div>
      </div>
    </div>
  );
}
