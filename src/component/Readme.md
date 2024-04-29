import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BiMessageAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaToggleOn } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const Leftbar = () => {
    const ChatData = [
        {
            user1: [
                { id: 1, text: 'Hi there!', sender: 'user1', questiones: "first user Details" },
                { id: 2, text: 'what about you ?', sender: 'user2', questiones: "first user Details" },
                { id: 3, text: 'where are you from ?', sender: 'user3', questiones: "Third user Details" },
                { id: 3, text: 'your Hobby ', sender: 'user3', questiones: "Thied user Details" }
            ]
        },
        {
            user2: [
                { id: 1, text: 'Hey!', sender: 'user2' },
                { id: 2, text: "I'm good, thanks.", sender: 'user2' },
                { id: 3, text: "Narsinghgarh.", sender: 'user2' },
                { id: 4, text: "cricket", sender: 'user2' }
            ]
        }
    ];

    const [data, setData] = useState(ChatData);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="grid sm:grid-cols-12 bg-slate-800 w-full h-screen rela">
            <div className="bg-slate-900 sm:col-span-1 h-auto relative">
                <div className="flex pt-10 flex-col items-center gap-6">
                    <div className="w-12 bg-white h-12 border rounded-full flex mx-auto"></div>
                    <div className="pt-10 "><FaUser className="w-4 h-4 text-white" /></div>
                    <div className="pt-10 "><BiMessageAlt className="w-6 h-4 text-white" /></div>
                    <div className="pt-10 "><IoSettingsOutline className="w-6 h-6 text-white" /></div>
                    <div className="absolute bottom-0 sm:mb-20 mx-auto ">
                        <FaToggleOn className="text-white w-10 h-10 mt-2 mx-auto" />
                    </div>
                </div>
            </div>
            <div className="sm:col-span-3">
                <div className="shadow-2xl shadow-slate-900 mt-4 flex items-center gap-2">
                    <input className="px-8 py-2 rounded-full mx-2 bg-slate-500 text-white" type="text" placeholder="Search" />
                    <div>
                        <IoMdAdd className="bg-white w-8 h-8 text-blue-600" />
                    </div>
                </div>
                <div>
                    {data.map((items, idx) => (
                        <div key={idx}>
                            {Object.keys(items).map((user, idxx) => (
                                <div key={idxx} onClick={() => handleUserClick(user)} className="text-white shadow-2xl bg-slate-800 m-2 rounded p-4">
                                    <p>{user}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="sm:col-span-8">
                <div>
                    <h1>Enter first name</h1>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span className="border-b-4 border-white "></span>
                    <h1 >bhavesh</h1>
                    <h1 className="border-b-4 border-white "></h1>
                </div>
                {selectedUser &&
                    <div>
                        {data.map((ele, idx) => {
                            if (ele[selectedUser]) {
                                return (
                                    <div key={idx} className="flex flex-col gap-20 mt-10 ">
                                        {ele[selectedUser].map((msg, i) => (
                                            <div key={i} className="text-white">
                                                <p>{msg.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                }
            </div>
        </div>
    );
};

export default Leftbar;
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BiMessageAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaToggleOn } from "react-icons/fa";
import Searchbar from "./Searchbar";
import { IoMdAdd } from "react-icons/io";
// import Herosection from "./Herosection";

const Leftbar = () => {

    const ChatData = [

        {
            user1:
                [{ id: 1, text: 'Hi there!', sender: 'user1', questiones: "first user Details" },
                { id: 2, text: 'How are you?', sender: 'user2', questiones: "first user Details" },
                { id: 2, text: 'How are you?', sender: 'user3', questiones: "Thied user Details" }]

        },
        {
            user2: [
                { id: 1, text: 'Hey!', sender: 'user2' },
                { id: 2, text: "I'm good, thanks.", sender: 'user2' },
                { id: 3, text: "I'm good, thanks.", sender: 'user2' },
                { id: 4, text: "I'm good, thanks.", sender: 'user2' }
            ]
        }
    ];

    const [data, setData] = useState(ChatData)
    return (
        <div className="grid sm:grid-cols-12 bg-slate-800 w-full h-screen  rela ">
            <div className="bg-slate-900  sm:col-span-1 h-auto relative">
                <div className="flex  pt-10 flex-col items-center gap-6">
                    <div className=" w-12 bg-white h-12 border rounded-full flex mx-auto"></div>
                    <div className=" pt-10 "><FaUser className="w-4 h-4 text-white" /></div>
                    <div className=" pt-10 "><  BiMessageAlt className="w-6 h-4 text-white" /></div>
                    <div className=" pt-10 ">< IoSettingsOutline className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-0   sm:mb-20 mx-auto ">
                        <FaToggleOn className="text-white w-10 h-10 mt-2 mx-auto" />
                    </div>
                </div>

            </div>
            {/* second section */}
            <div className="sm:col-span-3">
            <div className="shadow-2xl shadow-slate-900 mt-4 flex items-center gap-2">
                <input className="px-8 py-2 rounded-full mx-2 bg-slate-500 text-white" type="text" placeholder="Search" />
                <div>
                    <IoMdAdd className="bg-white  w-8  h-8 text-blue-600" />
                </div>
            </div>
            <div >
                {
                    data.map((items, idx) => (
                        <div key={idx}>

                            {
                                items.user1 && items.user1.map((ele, idxx) => {
                                    return <div key={idxx}  className="text-white    shadow-2xl bg-slate-800 m-2 rounded p-4" >
                                        <p>{ele.sender}</p>
                                    </div>
                                })

                            }

                        </div>

                    ))

                }
            </div>

            </div>
            {/* third section  */}
            <div className="sm:col-span-8">
            <div>
                <h1>Enter first name</h1>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className=" border-b-4 border-white "></span>
                <h1 >bhavesh</h1>
                <h1 className=" border-b-4 border-white "></h1>
            </div>
            {
                data.map((ele, idx) => {
                    return <div key={idx} className="flex flex-col gap-20 mt-10 ">
                        {
                            ele.user1 && ele.user1.map((ele, i) => (
                                <div key={i} className=" text-white">
                                    <p>{ele.text}</p>
                                </div>
                            ))
                        }
                    </div>
                })
            }
                {/* <Herosection data={data} setData={setData}/> */}
            </div>



        </div>
    )
}
export default Leftbar

// import { FaUser } from "react-icons/fa";
// import { BiMessageAlt } from "react-icons/bi";
// import { IoSettingsOutline } from "react-icons/io5";
// import { FaToggleOn } from "react-icons/fa";
// import Searchbar from "./Searchbar";
// const Leftbar = () => {
//     return (
//         <>
//             <div className="bg-slate-800 w-[100px] h-screen ">


//                 <div className="flex  pt-10 flex-col items-center gap-6">
//                     <div className=" w-12 bg-white h-12 border rounded-full flex mx-auto"></div>
//                     <div className=" pt-10 "><FaUser className="w-4 h-4 text-white" /></div>
//                     <div className=" pt-10 "><  BiMessageAlt className="w-6 h-4 text-white" /></div>
//                     <div className=" pt-10 ">< IoSettingsOutline className="w-6 h-6 text-white" /></div>
//                     <div className="absolute bottom-0   mb-20 mx-auto ">
//                         <p className="text-white">Mode</p>
//                         <FaToggleOn className="text-white w-10 h-10 mt-2 mx-auto" />
//                     </div>
//                 </div>
//                 <Searchbar/>
//             </div>


//         </>
//     )
// }
// export default Leftbar
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BiMessageAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaToggleOn } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const Leftbar = () => {
    const ChatData = [
        {
            user1: [
                { id: 1, text: 'Hi there!', sender: 'user1', questiones: "first user Details" },
                { id: 2, text: 'How are you?', sender: 'user2', questiones: "first user Details" },
                { id: 3, text: 'How are you?', sender: 'user3', questiones: "Thied user Details" }
            ]
        },
        {
            user2: [
                { id: 1, text: 'Hey!', sender: 'user2' },
                { id: 2, text: "I'm good, thanks.", sender: 'user2' },
                { id: 3, text: "I'm good, thanks.", sender: 'user2' },
                { id: 4, text: "I'm good, thanks.", sender: 'user2' }
            ]
        }
    ];

    const [data, setData] = useState(ChatData);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="grid sm:grid-cols-12 bg-slate-800 w-full h-screen rela">
            <div className="bg-slate-900 sm:col-span-1 h-auto relative">
                <div className="flex pt-10 flex-col items-center gap-6">
                    <div className="w-12 bg-white h-12 border rounded-full flex mx-auto"></div>
                    <div className="pt-10 "><FaUser className="w-4 h-4 text-white" /></div>
                    <div className="pt-10 "><BiMessageAlt className="w-6 h-4 text-white" /></div>
                    <div className="pt-10 "><IoSettingsOutline className="w-6 h-6 text-white" /></div>
                    <div className="absolute bottom-0 sm:mb-20 mx-auto ">
                        <FaToggleOn className="text-white w-10 h-10 mt-2 mx-auto" />
                    </div>
                </div>
            </div>
            <div className="sm:col-span-3">
                <div className="shadow-2xl shadow-slate-900 mt-4 flex items-center gap-2">
                    <input className="px-8 py-2 rounded-full mx-2 bg-slate-500 text-white" type="text" placeholder="Search" />
                    <div>
                        <IoMdAdd className="bg-white w-8 h-8 text-blue-600" />
                    </div>
                </div>
                <div>
                    {data.map((items, idx) => (
                        <div key={idx}>
                            {Object.keys(items).map((user, idxx) => (
                                <div key={idxx} onClick={() => handleUserClick(user)} className="text-white shadow-2xl bg-slate-800 m-2 rounded p-4">
                                    <p>{user}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="sm:col-span-8">
                <div>
                    <h1>Enter first name</h1>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span className="border-b-4 border-white "></span>
                    <h1 >bhavesh</h1>
                    <h1 className="border-b-4 border-white "></h1>
                </div>
                {selectedUser &&
                    <div>
                        {data.map((ele, idx) => {
                            if (ele[selectedUser]) {
                                const otherUser = Object.keys(ele).find(key => key !== selectedUser);
                                const otherUserMessages = ele[otherUser];
                                return (
                                    <div key={idx} className="flex flex-col gap-20 mt-10 ">
                                        {ele[selectedUser].map((msg, i) => (
                                            <div key={i} className="text-white">
                                                <p>{selectedUser}: {msg.text}</p>
                                                <p>{otherUser}: {otherUserMessages[i].text}</p>
                                            </div>
                                        ))}
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                }
            </div>
        </div>
    );
};

export default Leftbar;
