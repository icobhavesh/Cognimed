import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
const Searchbar = ({data,setData}) => {
    
    return (
        <div>
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



    )
}
export default Searchbar