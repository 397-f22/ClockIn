import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      setInterval(
        () => setTime(new Date())
      , 1000)
    }, [])

    return (
      <div className="header">
        <h1>{time.toLocaleTimeString()}</h1>
      </div>
    )
}
export default Header
