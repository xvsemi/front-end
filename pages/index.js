import React, { useState } from "react";

const useStateTask = () => {
    const [color, setColor] = useState("");
    return (
        <div className={`flex space-y-4 w-full h-screen bg-${color}-800 flex-col`}>
            <p>Өнгө солих:</p>
            <button className="border bg-red-800 py-4 px-6" onClick={() => {setColor("red")}}>Улаан</button>
            <button className="border bg-blue-800 py-4 px-6" onClick={() => {setColor("blue")}}>Цэнхэр</button>
            <button className="border bg-green-800 py-4 px-6" onClick={() => {setColor("green")}}>Ногоон</button>
        </div>
    );
};

export default useStateTask
