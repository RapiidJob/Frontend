import Sidebar from "../components/dashboard/Sidebar"
import Footer from "../components/dashboard/Footer"
// import Main from "../components/dashboard/Main"

import AppliedJobs from "../components/dashboard/AppliedJobs"
import Settings from "../components/dashboard/Settings"
import Overview from "../components/dashboard/Overview"
import JobsAlert from "../components/dashboard/JobsAlert"
import FavoriteJobs from "../components/dashboard/FavoriteJobs"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
const locMap = {
  "#settings":<Settings/>,
  "#overview":<Overview/>,
  "#jobalerts":<JobsAlert/>,
  "#favoritejobs":<FavoriteJobs/>,
  "#appliedjobs":<AppliedJobs/>,
}
const DashboardScreen = () => {
  const path = useLocation()
  const loc = path.hash
  const [data, setData] = useState("")
  useEffect(()=>{
    setData(loc)
  }, [loc])

  return (
    <>
    <main className="pt-[9rem] flex min-h-screen bg-gray-100" >

    <Sidebar/>
    {/* <Main/> */}
    {data =="" ? <Overview/>:locMap[data]}
    </main>

    <Footer/>
    

   
    </>
  )
}

export default DashboardScreen