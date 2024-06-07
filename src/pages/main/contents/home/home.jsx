import UserList from "../../layouts/user-list";
import FileProgress from "../../../fileprogress/FileProgress";

const Home = () => {
  const fileName = "Far Cry";
  return (
    <>
      <main className="flex flex-1 flex-col p-4 pt-20">
        <div className="flex flex-col md:flex-row">
          <div className="w-full max-w-md">
            <UserList />
          </div>
          <div>
            <FileProgress fileName={fileName} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
