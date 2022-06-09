import { useEffect, useState } from "react";
import { CardProps } from "../../App";
import { CardState } from "../../lib/Context";
import { AiFillEdit } from "react-icons/ai";
import "./Card.scss";

const Card = (props: CardProps): JSX.Element => {
  const { card_name, card_last_four, expiry, colour } = props;

  const { dispatch } = CardState();

  //   const [card, setCard] = useState({});

  const [toggleState, setToggleState] = useState({
    card_name: false,
    card_last_four: false,
    expiry: false,
  });

  const handleChange = (key: string, value: string): void => {
    dispatch({
      type: "UPDATE_CARD",
      payload: { [key]: value },
    });
  };

  const updateToggleState = (key: string, action: boolean): void => {
    setToggleState((prev) => ({
      ...prev,
      [key]: action,
    }));
  };

  return (
    <div className="card-container" style={{ background: colour || "#131a30" }}>
      {toggleState.card_name ? (
        <input
          type="text"
          value={card_name}
          onChange={(e) => handleChange("card_name", e.target.value)}
          onBlur={(): void => updateToggleState("card_name", false)}
        />
      ) : (
        <span onDoubleClick={(): void => updateToggleState("card_name", true)}>
          {card_name ? (
            card_name
          ) : (
            <span>
              Name <AiFillEdit />
            </span>
          )}
        </span>
      )}
      {toggleState.card_last_four ? (
        <div>
          <span>**** **** ****</span>
          <input
            type="text"
            value={card_last_four}
            onChange={(e) => handleChange("card_last_four", e.target.value)}
            onBlur={(): void => updateToggleState("card_last_four", false)}
          />
        </div>
      ) : (
        <div
          onDoubleClick={(): void => updateToggleState("card_last_four", true)}
        >
          **** **** ****{" "}
          {card_last_four ? (
            card_last_four
          ) : (
            <span>
              {" "}
              <AiFillEdit />
            </span>
          )}
        </div>
      )}
      <div>
        <div>Expiry</div>
        {toggleState.expiry ? (
          <input
            type="text"
            value={expiry}
            onChange={(e) => handleChange("expiry", e.target.value)}
            onBlur={(): void => updateToggleState("expiry", false)}
          />
        ) : (
          <span onDoubleClick={(): void => updateToggleState("expiry", true)}>
            {expiry}
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
