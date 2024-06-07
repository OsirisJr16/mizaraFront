import UserList from "../../layouts/user-list";
import FileProgress from "../../../fileprogress/FileProgress"

const home = () => {
    return (
        <>
            <main className="flex flex-1 flex-col   p-4 pt-20">
                <div className="flex flex-col md:flex-row ">
                    <div className="w-full max-w-md">
                        <UserList />
                    </div>
                    <div>
                        <FileProgress/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default home;
