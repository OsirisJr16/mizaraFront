import UserList from "../../layouts/user-list";


// Importation de la barre de progréssion
// import FileProgress from "../../../fileprogress/FileProgress";

// Importation du component Button
import Button from "../../../../components/Button"
import { FiSend, FiCheckSquare } from 'react-icons/fi';



const Home = () => {

  return (
    <>
      <main className="flex flex-1 flex-col p-4 pt-20">
        <div className="flex flex-col md:flex-row">
          {/* Liste des utilisateurs */}
          <div className="w-full max-w-md">
            <UserList />
          </div>

          {/* Contenus */}
          <div className="flex h-screen items-center justify-center">
            <div className="mr-1 flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-8">
              <Button
                text="Envoyer"
                Icon={FiSend}
              />
              <Button
                text="Recevoir"
                Icon={FiCheckSquare}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
