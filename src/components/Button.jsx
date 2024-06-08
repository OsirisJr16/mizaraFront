const Button = ({ text, onClick, Icon }) => {
  return (
    <button
      onClick={onClick}
      className="m-2 flex size-40 flex-col items-center justify-center rounded-lg border-2 border-gray-300 text-gray-500 transition duration-300 hover:bg-gray-100 sm:m-4 sm:size-40 md:size-[200px]"
    >
      {Icon && <Icon className="mb-2 text-2xl sm:text-3xl md:text-4xl" />}
      <span className="text-sm font-semibold sm:text-lg md:text-xl">{text}</span>
    </button>
  );
};

export default Button;
