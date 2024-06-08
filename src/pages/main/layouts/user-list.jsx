import { Search2Icon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Text,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

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
  {
    id: 6,
    name: "Feno",
    avatar_path: "src/assets/pics/1.jpg",
    device: "Acer",
    online: true,
  },
  {
    id: 7,
    name: "Miora",
    avatar_path: "src/assets/pics/3.jpeg",
    device: "Surface",
    online: true,
  },
  {
    id: 8,
    name: "Jean",
    avatar_path: "src/assets/pics/2.jpg",
    device: "HP",
    online: false,
  },
  {
    id: 9,
    name: "Ranto",
    avatar_path: "src/assets/pics/5.jpeg",
    device: "MSI",
    online: true,
  },
  {
    id: 10,
    name: "Tiana",
    avatar_path: "src/assets/pics/1.jpg",
    device: "Razer",
    online: false,
  }
];

export default function UserList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative isolate lg:px-8">
      <div className="h-[92vh] w-full rounded-lg bg-white p-4 shadow-lg dark:bg-zinc-800">
        <div className="mb-6">
          <label
            htmlFor="search"
            className="sr-only mb-2 text-sm font-medium text-gray-900"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full rounded-lg border border-gray-300 p-4 ps-10 text-sm text-gray-900 dark:bg-zinc-800 dark:text-zinc-300"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <button className="absolute bottom-2.5 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <Search2Icon />
            </button>
          </div>
        </div>
        <div className="rounded-lg bg-white p-1 dark:bg-zinc-800">
          {filteredUsers.length > 0 ? (
            <Box maxHeight="440px" overflowY="auto" overflowX="hidden" className="scrollbar-thin">
              <VStack spacing={4} align="stretch" pb={2}>
                {filteredUsers.map((user, index) => (
                  <Flex key={index} mb={index === filteredUsers.length - 1 ? 0 : 4}>
                    <Avatar src={user.avatar_path}>
                      {user.online && (
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                      )}
                    </Avatar>
                    <Box ml="2">
                      <Text fontWeight="bold" className="dark:text-zinc-200">
                        {user.name}
                      </Text>
                      <Text fontSize="sm" className="dark:text-zinc-400">
                        {user.device}
                      </Text>
                    </Box>
                    <Box ml="auto" mr="4">
                      <FiMoreVertical />
                    </Box>
                  </Flex>
                ))}
              </VStack>
            </Box>
          ) : (
            <div className="text-center text-red-700 dark:text-zinc-200">
              No user founded !
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
