
import UserList from '../../layouts/user-list'

const home = () => {
    return (
        <main className="flex flex-col flex-1 p-4">
            <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="w-full max-w-md">
                    <UserList />
                </div>
            </div>
        </main>
    )
}

export default home
