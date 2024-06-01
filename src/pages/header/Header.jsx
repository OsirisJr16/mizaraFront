import { FaBell, FaSyncAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="text-2xl font-bold">Mi-zara</div>
      <div className="flex items-center space-x-4">
        <button className="p-2"><FaSyncAlt /></button>
        <button className="p-2"><FaBell /></button>
        <button className="flex items-center space-x-2 rounded bg-blue-500 p-2 text-white">
          <span>Quitter</span>
          <FiLogOut />
        </button>
      </div>
    </header>
  );
}

export default Header;
