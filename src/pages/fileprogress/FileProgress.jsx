import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon, Icon } from "@chakra-ui/icons";
import { FaFolder } from "react-icons/fa";

const ProgressBar = ({ progress, fileName }) => {
  return (
    <Box
      position="relative"
      w="80"
      bg="gray.200"
      rounded="full"
      h="20"
      overflow="hidden"
    >
      <Box
        bg="green.300"
        h="full"
        transition="all 0.3s ease-in-out"
        style={{ width: `${progress}%` }}
      ></Box>
      <Box
        position="absolute"
        left="6"
        top="50%"
        transform="translateY(-50%)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={FaFolder} w={10} h={10} color="gray.600" />
        <Text fontSize="xl" color="gray.700">
          {fileName}
        </Text>
      </Box>
      <Box
        position="absolute"
        right="2"
        bottom="0"
        top="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {progress < 100 ? (
          <CloseIcon color="gray.500" w={4} h={4} />
        ) : (
          <CheckCircleIcon color="green.500" w={5} h={5} />
        )}
      </Box>
    </Box>
  );
};

const FileProgress = ({ fileName }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 3;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <ProgressBar progress={progress} fileName={fileName} />
      </div>
    </>
  );
};

export default FileProgress;
