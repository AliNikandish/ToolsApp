import NoutFound from "./Components/NoutFound"
import Bank from "./Pages/Bank/Bank"
import Interest from "./Pages/Bank/Interest"
import Loan from "./Pages/Bank/Loan"
import BMI from "./Pages/Health/BMI"
import BMR from "./Pages/Health/BMR"
import Health from "./Pages/Health/Health"
import Hoobies from "./Pages/Hoobies/Hoobies"
import LuckyWheels from "./Pages/Hoobies/LuckyWheels/LuckyWheels"
import Meme from "./Pages/Hoobies/Meme/Meme"
import Index from "./Pages/Index"
import Calculator from "./Pages/Math/Calculator"
import Math from "./Pages/Math/Math"
import Ip from "./Pages/Practical/Ip"
import PasswordGenerator from "./Pages/Practical/PasswordGenerator"
import Practical from "./Pages/Practical/Practical"
import StopWatch from "./Pages/Time/StopWatch"
import Time from "./Pages/Time/Time"
import Timer from "./Pages/Time/Timer"



const routes = [
    {path:'/',element:<Index/>},

    //bank
    {path: "/bank", element: <Bank /> },
    {path: "/bank/interest", element: <Interest /> },
    {path: "/bank/loan", element: <Loan /> },

    //health
    {path: "/health", element: <Health /> },
    {path: "/health/bmi", element: <BMI /> },
    {path: "/health/bmr", element: <BMR /> },

    //hoobies
    {path: "/hoobies", element: <Hoobies /> },
    {path: "/hoobies/luckywheels", element: <LuckyWheels /> },
    {path: "/hoobies/meme", element: <Meme /> },

    //math
    {path: "/math", element: <Math /> },
    {path: "/math/calculator", element: <Calculator /> },

    //practical
    {path: "/practical", element: <Practical /> },
    {path: "/practical/ip", element: <Ip /> },
    {path: "/practical/passwordgenerator", element: <PasswordGenerator /> },
    
    //time
    {path: "/time", element: <Time /> },
    {path: "/time/stopwatch", element: <StopWatch /> },
    {path: "/time/timer", element: <Timer /> },
    {path:"*",element:<NoutFound/>}

]

export default routes