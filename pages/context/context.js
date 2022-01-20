import React ,{useState, useContext} from "react"; 

const AppContext= React.createContext();

const AppProvider =({children})=>{
    const [loading, setLoading] =useState(false)
    const [sidebarIsOpen , setSidebarOpen] = useState(false)
    const handelOpenSidebar=()=>{
       setSidebarOpen(!sidebarIsOpen)
    }
    const handelCloseSidebar =()=>{
        setSidebarOpen(false)
    }
  

    return(
        <AppContext.Provider value={{loading , sidebarIsOpen , handelOpenSidebar ,handelCloseSidebar}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContex=()=>{
    return(

        useContext(AppContext)
    )
   } 
export { AppContext , AppProvider}