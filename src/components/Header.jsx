import { useState, useEffect } from "react";
const Header = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        setInterval(
            () => setTime(new Date())
            , 1000)
    }, [])
    
    return (
        <h1>{time.toLocaleTimeString()}</h1>
    )
}
export default Header
