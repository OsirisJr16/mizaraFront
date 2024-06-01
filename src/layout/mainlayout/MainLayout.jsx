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
        <div className="flex justify-between">
          <div className="w-full max-w-md">
            <ListUser />
          </div>

          <div className="w-full max-w-md">
            <Hello /> 
          </div>
        </div>
       
      </main>

    </div>
  );
}

export default MainLayout;
