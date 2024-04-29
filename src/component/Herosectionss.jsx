const Herosection = ({ data }) => {
    console.log(data);
    return (
        <div>
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
                    return <div key={idx} className="flex flex-col gap-20">
                        {
                            ele.user1 && ele.user1.map((ele, i) => (
                                <div key={i} className="">
                                    <p>{ele.text}</p>
                                </div>
                            ))
                        }
                    </div>
                })
            }
        </div>
    )
}
export default Herosection
// function Widget() {
//     return (
//         <div className="flex h-screen bg-zinc-800 text-white">

//             <div className="w-64 bg-zinc-900 p-5">
//                 <div className="flex items-center space-x-4 p-2 mb-5">
//                     {/* <img className="h-12 w-12 rounded-full" src="https://placehold.co/100x100" alt="Profile"> */}
//                         <div>
//                             <h4 className="font-semibold">First last name</h4>
//                             <p className="text-sm text-zinc-400">Last chat details</p>
//                         </div>
//                 </div>
//                 <ul className="space-y-2">
//                     <li>
//                         <a href="#" className="flex items-center space-x-4 p-2 hover:bg-zinc-700 rounded">
//                             <span className="block bg-zinc-500 h-10 w-10 rounded-full"></span>
//                             <span>First last name</span>
//                         </a>
//                     </li>

//                 </ul>
//             </div>


//             <div className="flex-1 p-4">
//                 <div className="flex justify-between items-center p-3 bg-zinc-700 rounded-t">
//                     <h3 className="text-lg font-semibold">Today</h3>
//                     <span>08:37</span>
//                 </div>
//                 <div className="flex flex-col p-3 bg-zinc-700 h-full">
//                     <div className="mb-4 p-4 bg-zinc-600 rounded">
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
//                     </div>

//                 </div>
//             </div>
//         </div>

//     )
// }
// export default Widget