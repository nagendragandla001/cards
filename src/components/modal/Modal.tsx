import React, { useEffect, useRef, useState } from "react";
import { CardState } from "../../lib/Context";
import "./Modal.scss";

interface ModalProps {
  onClose: () => void;
  show: boolean;
  children: any;
}

const Modal = (props: ModalProps): JSX.Element => {
  const { onClose, show, children } = props;

  const {
    state: { selectedCard },
    dispatch,
  } = CardState();

  const ref = useRef<HTMLElement>(null) as any;

  const submitCard = (): void => {
    dispatch({ type: "ADD_CARD", payload: selectedCard });
    onClose();
  };

  const handleStartHandler = (clr: string) => {
    dispatch({ type: "UPDATE_CARD", payload: { colour: clr } });
  };

  useEffect(() => {
    if (show) {
      ref?.current?.classList?.add("visible");
    } else {
      ref?.current?.classList?.remove("visible");
    }
  }, [show]);

  return (
    <React.Fragment>
      <div ref={ref} className="modal-container">
        <div className="modal-body-content">
          <button onClick={onClose} className="close-btn">
            X
          </button>
          <h3>Create Virtual Card</h3>
          {children}

          <div className="color-container">
            {[
              "#131a30",
              "#e6304b",
              "#f55731",
              "#f89e1c",
              "#f2c94b",
              "#21ce8e",
              "#1c98ef",
              "#9b51df",
            ].map((clr) => (
              <span
                key={clr}
                className="colour-btn"
                style={{ background: clr }}
                draggable
                onDragStart={() => handleStartHandler(clr)}
              />
            ))}
          </div>
          <button className="submit-btn" type="button" onClick={submitCard}>
            Confirm
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
