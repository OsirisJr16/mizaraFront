import Header from '../../pages/header/Header';
import ListUser from '../../pages/listuser/ListUser';
import Hello from '../../pages/hello/Hello';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Importing Header */}
      <Header />

      {/* Importing User List */}
      <main className="flex flex-1 flex-col bg-gray-50 p-4">
        <div className="flex flex-col items-center md:flex-row justify-between">
          <div className="w-full max-w-md">
            <ListUser />
          </div>

          <div className="w-full max-w-md mt-4 md:mt-0 md:ml-5">
            <Hello /> 
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
