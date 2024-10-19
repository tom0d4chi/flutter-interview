import { useState } from "react";
import { SearchResultProps } from "../types";

export default function SearchResult({finition}: SearchResultProps){
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const handleClick = () => {
        setIsSelected(!isSelected)
    }

    return (
        <div className="flex flex-col bg-slate-100 rounded-md p-4 transition-all hover:bg-slate-200 hover:cursor-pointer gap-2" onClick={handleClick}>
            <p>{finition.label}</p>
            {isSelected && 
                <div className="flex flex-col">
                    <p>{finition.brand}</p> 
                    <p>{finition.energy}</p> 
                    <p>{finition.price} €</p>
                </div>}
        </div>
    )
}