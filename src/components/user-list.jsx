import { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Text,
  VStack,
  Badge,
  AvatarBadge,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import { Search2Icon } from "@chakra-ui/icons";

const users = [
  {
    id: 1,
    name: "Andry Desktop",
    device: "Lenovo",
    avatar_path: "src/assets/pics/1.jpg",
    online: true,
  },
  {
    id: 2,
    name: "Andiniaina",
    avatar_path: "src/assets/pics/2.jpg",
    device: "HP",
    online: true,
  },
  {
    id: 3,
    name: "Hary's PC",
    avatar_path: "src/assets/pics/3.jpeg",
    device: "DELL",
    online: true,
  },
  {
    id: 4,
    name: "Desktop",
    avatar_path: "src/assets/pics/4.jpeg",
    device: "ASUS",
    online: true,
  },
  {
    id: 5,
    name: "Aina",
    avatar_path: "src/assets/pics/5.jpeg",
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
    <>
      <div className="relative isolate  lg:px-8">
        <div className="h-screen w-full rounded-lg bg-white p-4 shadow-lg">
          <div className="mb-4">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg "
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
              />
              <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                <Search2Icon />
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-white p-1">
            {filteredUsers.length > 0 ? (
              <VStack spacing={4} align="stretch">
                {filteredUsers.map((user, index) => (
                  <Flex key={index}>
                    <Avatar src={user.avatar_path}>
                      {user.online && (
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                      )}
                    </Avatar>
                    <Box ml="3">
                      <Text fontWeight="bold">{user.name}</Text>
                      <Text fontSize="sm">{user.device}</Text>
                    </Box>
                    <Box ml="auto" mr="-2">
                      <FiMoreVertical />
                    </Box>
                  </Flex>
                ))}
              </VStack>
            ) : (
              <div className="text-center text-red-700">No user found!</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
