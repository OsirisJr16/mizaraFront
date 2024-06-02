
import UserList from '../../layouts/user-list'

const home = () => {
    return (
        <>
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
        </>
    )
}

export default home
