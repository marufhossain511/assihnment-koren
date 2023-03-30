import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <h1 className=" normal-case text-2xl font-bold">Knowledge Cafe</h1>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div>
                    <img  className="w-10 h-10 rounded-full" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=740&t=st=1680190863~exp=1680191463~hmac=ac9d8a9caffdb8306fa4fd607a046247689ee95351daccbbce4b5c7a664f3361" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;