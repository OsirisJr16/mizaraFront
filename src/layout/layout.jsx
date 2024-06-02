import Header from "../components/header";
import UserList from "../components/user-list";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col bg-gray-50 p-4">
        <div className="flex flex-col items-center md:flex-row justify-between">
          <div className="w-full max-w-md">
            <UserList />
          </div>
        </div>
      </main>
    </div>
  );
}
