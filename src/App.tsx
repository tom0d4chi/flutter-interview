import { useState } from "react";
import "./App.css";
import { FinOptionsType } from "./types";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";



const App = () => {
  const [finitions, setFinitions] = useState<FinOptionsType[] | []>([]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-md">
            <span className="text-sm font-semibold text-blue-700">
              Plaque d'immatriculation
            </span>
          </div>
        </div>
        <SearchForm 
            finitions={finitions}
            setFinitions={setFinitions}
        />
        <SearchResults finitions={finitions}/>
      </div>
    </div>
  );
};

export default App;
