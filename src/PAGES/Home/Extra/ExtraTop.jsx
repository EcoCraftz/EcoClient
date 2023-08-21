
const ExtraTop = () => {
    return (
        <div className="mx-4 my-4">
            <div className="grid grid-cols-2 justify-between items-center lg:hidden gap-4">
                <div className="text-xl text-center p-2 border border-amber-500">All Catagories</div>
                <div className="text-xl text-center p-2 border border-red-500">Dashboard</div>
                <div className="text-xl text-center p-2 border border-green-500">About</div>
                <div className="text-xl text-center p-2 border border-blue-500">Contact</div>

            </div>
        </div>
    );
};

export default ExtraTop;