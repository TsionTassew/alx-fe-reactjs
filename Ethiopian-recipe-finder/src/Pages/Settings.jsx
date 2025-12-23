import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react";

export default function Setting() {
    // 1. Initial State for CSS Variables
    const [settings, setSettings] = useState({
        "--font-size": "16px",
        "--animation-speed": "1s",
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--primary-color": "rgb(216, 26, 26)",
        "--shadow-color": "rgba(0, 0, 0, 0.2)",
        "--text-color": "rgb(116, 7, 7)",
        "--text-light": "gray"
    })

    const [theme, setTheme] = useState("light")
    const [primaryColor, setPrimaryColor] = useState(0)

    // 2. The Effect that applies state to the actual CSS
    useEffect(() => {
        const root = document.documentElement;
        for (let key in settings) {
            root.style.setProperty(key, settings[key]);
        }
    }, [settings])

    const themes = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.1)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757",
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea",
        }
    ]

    const primaryColors = [
        "rgb(0, 0, 255)",
        "rgb(255, 255, 0)",
        "rgb(0, 255, 0)",
        "rgb(210, 105, 30)",
        "rgb(128, 0, 128)"
    ]

    // 3. Logic to change Theme
    function changeTheme(i) {
        const _theme = { ...themes[i] }
        setTheme(i === 0 ? "light" : "dark")
        let _settings = { ...settings }
        for (let key in _theme) {
            _settings[key] = _theme[key]
        }
        setSettings(_settings)
    }

    // 4. Logic to change Primary Color
    function changeColor(i) {
        const _color = primaryColors[i]
        setPrimaryColor(i)
        let _settings = { ...settings }
        _settings["--primary-color"] = _color
        setSettings(_settings)
    }

    return (
        <div>
            {/* --- Preferred Theme Section --- */}
            <div className="section d-block">
                <h2>Primary color</h2>
                <div className="options-container">
                    <div className="option light" onClick={() => changeTheme(0)}>
                        {theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                    <div className="option dark" onClick={() => changeTheme(1)}>
                        {theme === "dark" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* --- Primary Color Section --- */}
            <div className="section d-block">
                <h2>Preferred theme</h2>
                <div className="options-container">
                    {primaryColors.map((color, index) => (
                        <div 
                            key={index}
                            className="option" 
                            style={{ backgroundColor: color }}
                            onClick={() => changeColor(index)}
                        >
                            {primaryColor === index && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}