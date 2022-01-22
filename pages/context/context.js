import React ,{useState, useContext} from "react"; 

const AppContext= React.createContext();

const AppProvider =({children})=>{
    const [loading, setLoading] =useState(false)
    const [sidebarIsOpen , setSidebarOpen] = useState(false)
    const [submenu, setSubmenu] = useState(false);

    const handelOpenSidebar=()=>{
       setSidebarOpen(!sidebarIsOpen)
    }
    const handelCloseSidebar =()=>{
        setSidebarOpen(false)
        setSubmenu(false)
    }
    const showSubmenu =()=>{
        setSubmenu(!submenu)
      
    }
  

    return(
        <AppContext.Provider value={{loading , sidebarIsOpen , handelOpenSidebar ,handelCloseSidebar, showSubmenu ,submenu}}>
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