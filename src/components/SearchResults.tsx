import { SearchResultsProps } from "../types"
import SearchResult from "./SearchResult"

export default function SearchResults({finitions}: SearchResultsProps){
    return (
        <div className="flex flex-col gap-2 mt-4">
            {finitions.length > 0 && finitions.map(finition => 
            <SearchResult key={finition.value} finition={finition}/>)}
        </div>
    )
}