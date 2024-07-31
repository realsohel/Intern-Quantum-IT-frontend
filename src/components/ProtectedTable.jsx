import React from 'react'
import { people } from '../utils/person'
import { useAuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedTable = () => {
    const { setIsauthenticated,setUser, user} = useAuthContext();
    const navigate = useNavigate();
    console.log(user)
    const handleLogout = (e)=>{
        e.preventDefault();
        setIsauthenticated(false);
        setUser("")
        localStorage.removeItem('token');
        toast.success("Logged Out !!")
        navigate('/login')
        
    }
    return (
        <div className='p-4 m-4'>
            <div className='flex justify-end mx-4 my-2 '>
                <button onClick={handleLogout} 
                    className='bg-red-600 tracking-wider hover:bg-red-700 text-xl text-white py-2 px-3 rounded-md border-red-200'>
                    Logout
                </button>
            </div>

            <div className="flex flex-col py-2">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className=" overflow-hidden border-b border-gray-200 sm:rounded-md shadow-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50 border shadow">
                            <tr>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Name
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Title
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Status
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Role
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {people.map(person => (
                            <tr key={person.email}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                    </div>
                                    <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                    <div className="text-sm text-gray-500">{person.email}</div>
                                    </div>
                                </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{person.title}</div>
                                <div className="text-sm text-gray-500">{person.department}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                    className={`px-2 inline-flex text-xs leading-5
                                font-semibold rounded-full ${person.isActive?'bg-green-100 text-green-800':'bg-red-100 text-red-600'} `}
                                >
                                    {person.isActive?"Active":"Not Active"}
                                </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {person.role}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                    Edit
                                </a>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProtectedTable
