import React, { createContext, useContext, useEffect, useState } from 'react'

const DataContext = createContext();
const ContextProvider = ({ children }) => {
    const [courses, setCourses] = useState([])
    const getCourses = async () => {
        const req = await fetch(`${import.meta.env.VITE_SERVER_API}/courses/all/All`);
        const res = await req.json();
        setCourses(res?.courses);
    }
    useEffect(() => {
        getCourses()
    }, [])
    return (
        <DataContext.Provider value={{ courses }}>
            {children}
        </DataContext.Provider>
    )
}

export { ContextProvider }
export default DataContext