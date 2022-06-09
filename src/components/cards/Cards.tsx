import { useState } from "react";
import { CardProps } from "../../App";
import { CardState } from "../../lib/Context";
import Modal from "../modal/Modal";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Card from "../card/Card";
import "./Cards.scss";

const Cards = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const {
    state: { cards, selectedCard },
    dispatch,
  } = CardState();

  const [current, setCurrent] = useState(3);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);

  const handleCardAction = (): void => {
    dispatch({
      type: "CURRENT_CARD",
      payload: {
        id: Math.floor(new Date().getMilliseconds() * Math.random()),
        card_name: "",
        card_last_four: "",
        expiry: "00/00",
        colour: "#131a30",
      },
    });
    setShow(true);
  };
  const handleClose = (): void => {
    setShow(false);
  };

  const handleCardClick = (card: CardProps): void => {
    dispatch({ type: "CURRENT_CARD", payload: card });
    setShow(true);
  };

  const handleLeft = (): void => {
    if (start <= 0) {
      setEnd(cards.length - 1);
      setStart(cards.length - 3);
    } else {
      setEnd(start);
      setStart(start - 3);
    }
  };
  const handleRight = (): void => {
    setCurrent(current >= cards?.length - 3 ? 0 : current + 3);
    if (end <= cards.length - 3) {
      setStart(end);
      setEnd(end + 3);
    } else {
      setStart(0);
      setEnd(2);
    }
  };

  return (
    <>
      <div className="cards-container">
        <div className="add-card" onClick={handleCardAction}>
          <button type="button" className="add-btn">
            +
          </button>
          <span className="title">Create/Activate Cards</span>
        </div>
        <section className="cards-carousel">
          <AiOutlineLeft className="left" onClick={handleLeft} />
          <AiOutlineRight className="right" onClick={handleRight} />
          <div className="card-wrapper">
            {cards?.map(
              (card: any, index: number) =>
                index >= start &&
                index <= end && (
                  <div
                    className="card-outer-wrapper"
                    key={index}
                    onClick={(): void => handleCardClick(card)}
                  >
                    <Card {...card} />
                  </div>
                )
            )}
          </div>
        </section>
      </div>
      <Modal show={show} onClose={handleClose}>
        <Card {...selectedCard} />
      </Modal>
    </>
  );
};

export default Cards;
