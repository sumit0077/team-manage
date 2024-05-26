import { useContext } from "react";
import EmployeeContext from "../Utils/EmployeeContext";


const Right = () => {
    const { state,dispatch } = useContext(EmployeeContext);
    const handleRemove = (each) => {
        dispatch({type: "REMOVE_EMPLOYEE", payload: each.id});
    }
    console.log(state.employee);

    const handleSort = (each) =>{
        dispatch({type : "SORT_EMPLOYEE",
         payload : each.age,
        })
    }

    return ( 
        // <div>
        //     {state.employee.map((item, index) => (
        //         <p key={index}>{item.first_name}</p>
                
        //     ))}
        // </div>
       


        <div className="w-[60%] p-10 m-10 shadow-xl rounded-lg flex flex-col items-center">
                <p className="text-3xl font-semibold text-emerald-800">Team</p>
                <div><button className="p-1 bg-emerald-400 rounded-lg text-white text-xs mr-24" onClick={(each)=>
                    handleSort(each)}>SORT</button></div>
                <table className="w-[70%] overflow-auto mt-5">
                    <thead>
                        <tr className="text-left text-gray-700">
                            <th className="p-2">ID</th>       
                            <th className="p-2">First Name</th>
                            <th className="p-2">Age</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.employee.map((each, idx) => (
                                <tr key={idx} className="border-b">
                                    <td className="p-2">{each.id}</td>
                                    <td className="p-2">{each.first_name}</td>
                                    <td className="p-2">{each.age}</td>
                                    <td className="p-2">{each.email}</td>
                                    <td className="p-2">{each.gender}</td>
                                    <button className="p-1 bg-red-400 rounded-lg text-white text-xs hover:bg-red-600 transition-all ml-10" onClick={()=>handleRemove(each)}>Remove</button>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default Right;
