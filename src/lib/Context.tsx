import { createContext, useContext, useReducer } from "react";
import { cardReducer } from "./Reducers";

const CardsContext = createContext({} as any);

const Context = ({ children }: any) => {
  const [state, dispatch] = useReducer(cardReducer, {
    cards: [
      {
        id: 123452,
        card_name: "Superhuman",
        card_last_four: "5139",
        expiry: "03/20206",
        colour: "#121a30",
      },
      {
        id: 1111,
        card_name: "Nagendra",
        card_last_four: "5139",
        expiry: "03/20206",
        colour: "#e5304d",
      },
      {
        id: 2222,
        card_name: "Arjun",
        card_last_four: "5139",
        expiry: "03/20206",
        colour: "#f55732",
      },
      {
        id: 3333,
        card_name: "Janvi",
        card_last_four: "5139",
        expiry: "03/20206",
        colour: "#f69e1c",
      },
      {
        id: 4444,
        card_name: "Surya",
        card_last_four: "5139",
        expiry: "03/20206",
        colour: "#f1cb4a",
      },
      {
        id: 5555,
        card_name: "Vardhan",
        card_last_four: "5139",
        expiry: "03/20206",
        colour: "#21ce8f",
      },
      {
        id: 6666,
        card_name: "Lakshmi",
        card_last_four: "5139",
        expiry: "03/20206",
        colour: "#1c97ee",
      },
      {
        id: 7777,
        card_name: "Sravan ",
        card_last_four: "5139",
        expiry: "03/20206",
        colour: "#9b51de",
      },
    ],
    selectedCard: {},
  });
  return (
    <CardsContext.Provider value={{ state, dispatch }}>
      {children}
    </CardsContext.Provider>
  );
};

export default Context;

export const CardState = () => {
  return useContext(CardsContext);
};
