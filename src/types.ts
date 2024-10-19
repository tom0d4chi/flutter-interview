import { Dispatch, SetStateAction } from "react";

export interface FinOptionsType {
    value: string;
    label: string;
    energy: string;
    price: string;
    brand: string;
  }

export interface SearchFormProps {
    finitions: FinOptionsType[];
    setFinitions: Dispatch<SetStateAction<FinOptionsType[]>>;
}

export interface SearchResultsProps {
    finitions: FinOptionsType[] | [];
}

export interface SearchResultProps {
    finition: FinOptionsType;
}