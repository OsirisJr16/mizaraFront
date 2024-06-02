import Header from "../components/header";
import UserList from "../components/user-list";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col bg-gray-50 p-4 pt-20">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full max-w-md">
            <UserList />
          </div>
          <div className="p-8">
            <h1>Hello world</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
