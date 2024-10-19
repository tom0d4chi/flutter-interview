import { useState, useEffect } from 'react';
import { fetchCarByImmat } from '../services/carServices';
import { FinOptionsType } from '../types';

export function useCarSearch(query: string, setFinitions: (fins: FinOptionsType[]) => void) {
  const [noCarFound, setNoCarFound] = useState(false);
  const [errorImmat, setErrorImmat] = useState("");

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  const handleSearch = async (query: string) => {
    let regCharacters = /^[a-zA-Z0-9-\-\s]*$/;

    setErrorImmat("");
    if (!regCharacters.test(query)) {
      setErrorImmat("Le numéro de la plaque d'immatriculation n'est pas valide");
      return;
    }

    const result = await fetchCarByImmat(query.replace(/\s|-/g, ""));
    if (!result || !result.modele) {
      setNoCarFound(true);
      setFinitions([]);
      return;
    }

    setNoCarFound(false);
    const finOptions: FinOptionsType[] =
      result?.finitions?.version?.map((version: string) => ({
        value: version,
        label: version.toUpperCase(),
        energy: result.energie,
        price: result.prix_vehic,
        brand: result.marque,
      })) || [];

    setFinitions(finOptions);
  };

  return { noCarFound, errorImmat };
}
