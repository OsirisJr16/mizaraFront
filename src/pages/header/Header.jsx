import { RepeatIcon, BellIcon } from '@chakra-ui/icons'
function Header(){
  return (
    <>
      <header className='flex text-2xl py-2 border-b-[2px] '>
      <h1 className='mx-16 text-6xl'>Mi-zara</h1>
      <button className='bg-gray-100 py-2 px-20 rounded-xl mx-28'>Recevoir</button>
      <RepeatIcon className='my-5 mx-4'/>
      <BellIcon className='my-5 mx-4'/>
      <button className='mx-6'>dark</button>
      <button className='bg-blue-500 text-white py-2 px-10 rounded-full'>Quitter</button>
      <label className='ml-8'>sary</label>
      </header>
    </>
  )
}

export default Header
