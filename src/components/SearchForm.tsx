
import { SearchFormProps, FinOptionsType } from "../types";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCarSearch } from "../hooks/useCarSearch";


export default function SearchForm({setFinitions}: SearchFormProps){

    const [immat, setImmat] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('search');
    const { noCarFound, errorImmat } = useCarSearch(query || "", setFinitions);

    const onSubmit = async (e:any) => {
        e.preventDefault();
        navigate(`?search=${encodeURIComponent(immat)}`);
      };


    return (
        <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <input
            name="immat"
            value={immat}
            onChange={(e) => setImmat(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Entrez votre plaque d'immatriculation"
          />
        </div>
        {noCarFound && (
          <p className="text-red-500 text-sm">
            Nous n'avons pas trouvé votre véhicule
          </p>
        )}
        {errorImmat && <p className="text-red-500 text-sm">{errorImmat}</p>}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Rechercher
        </button>
      </form>
    )
}