import { RepeatIcon, BellIcon } from '@chakra-ui/icons';
import { Avatar } from '@chakra-ui/react';

function Header() {
  return (
    <>
      <header className='flex items-center justify-between py-2 border-b-2 text-lg px-4 md:px-8'>

        {/* Conteneur pour le logo et le bouton "Recevoir" */}
        <div className='flex items-center space-x-4 md:space-x-14'>

          {/* Logo de l'application avec une taille différente selon la taille de l'écran */}
          <h1 className='text-2xl md:text-4xl'>Mi-zara</h1>

          {/* Bouton "Recevoir" avec un espace supplémentaire sur les écrans larges */}
          <button className='bg-gray-100 py-2 px-4 md:px-[150px] rounded-lg' style={{ marginLeft : "150px"}}>Recevoir</button>

        </div>
        {/* Conteneur pour les icônes et les boutons de navigation */}
        <div className='flex items-center space-x-4 md:space-x-[60px]'>

          <RepeatIcon className='text-2xl' />
          <BellIcon className='text-2xl' />

          <button>dark</button>

          <button className='bg-blue-500 text-white py-2 px-4 rounded-full'>Quitter</button>

          {/* Avatar de l'utilisateur */}
          <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' className='w-10 h-10 rounded-full' />
        </div>
      </header>
    </>
  );
}

export default Header;
