"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type authContextType = {
  stripImg: string;
  setStripImg: Dispatch<SetStateAction<string>>;
  stripSize: string;
  setStripSize: Dispatch<SetStateAction<string>>;
  stripType: string;
  setStripType: Dispatch<SetStateAction<string>>;
  caseImg: string;
  setCaseImg: Dispatch<SetStateAction<string>>;
};

const authContextDefaultValues: authContextType = {
  stripSize: "40/41 mm",
  setStripSize: () => {},
  stripType: "normal",
  setStripType: () => {},
  caseImg: "../01.svg",
  setCaseImg: () => {},
  stripImg: "/strap.svg",
  setStripImg: () => {},
};

const SelectedContext = createContext<authContextType>(
  authContextDefaultValues
);

export const SelectedProvider = ({ children }: { children: ReactNode }) => {
  const [stripSize, setStripSize] = useState("40/41 mm");
  const [stripType, setStripType] = useState("normal");
  const [stripImg, setStripImg] = useState("/strap.svg");
  const [caseImg, setCaseImg] = useState("../01.svg");

  return (
    <SelectedContext.Provider
      value={{
        stripImg,
        setStripImg,
        stripSize,
        setStripSize,
        stripType,
        setStripType,
        caseImg,
        setCaseImg,
      }}
    >
      {children}
    </SelectedContext.Provider>
  );
};

export const useSelected = () => {
  return useContext(SelectedContext);
};
