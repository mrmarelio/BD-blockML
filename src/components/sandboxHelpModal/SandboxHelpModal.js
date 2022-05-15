import React, { useEffect, useState } from "react";
import ModalContent from "components/modalContent/ModalContent";
import ModalConfig from "components/sandboxHelpModal/ModalItems";

import "./sandboxhelpmodal.scss";

const SandboxHelpModal = () => {
  const [modal, setModal] = useState(false);
  const [currentId, setCurrentId] = useState(1);
  const [currentModal, setCurrentModal] = useState([]);

  const toggleModal = () => {
    setModal(!modal);
    setCurrentId(1);
  };

  const nextId = () => {
    setCurrentId(parseInt(currentId) + 1);
  };

  useEffect(() => {
    function changeZindex() {
      let sandboxSpace = document.getElementById("sandbox-blockly-space");
      let buttonSpace = document
        .getElementById("sandbox-button-wrapper")
        .querySelectorAll(".blockSpaceButton__item");
      let titleSpace = document.getElementById("blockly-website-title");
      let codeSpace = document.getElementById("sandbox-code-preview");
      let websiteSpace = document.getElementById("sandbox-website");

      switch (currentId) {
        case 2:
          sandboxSpace.style.zIndex = "82";
          break;
        case 3:
          sandboxSpace.style.zIndex = "";
          buttonSpace.forEach((element, index) => {
            buttonSpace[index].style.zIndex = "82";
          });
          break;
        case 4:
          buttonSpace.forEach((element, index) => {
            buttonSpace[index].style.zIndex = "";
          });
          titleSpace.style.zIndex = "82";
          break;
        case 5:
          titleSpace.style.zIndex = "";
          codeSpace.style.zIndex = "82";
          break;
        case 6:
          codeSpace.style.zIndex = "";
          websiteSpace.style.zIndex = "82";
          break;
        default:
          sandboxSpace.style.zIndex = "";
          buttonSpace.forEach((element, index) => {
            buttonSpace[index].style.zIndex = "";
          });
          titleSpace.style.zIndex = "";
          codeSpace.style.zIndex = "";
          websiteSpace.style.zIndex = "";
      }
    }

    const currentModalCard = ModalConfig.modalItems.filter(
      (item) => item.modalId === currentId
    );

    setCurrentModal(currentModalCard);
    changeZindex();
  }, [currentId]);

  return (
    <>
      <button onClick={toggleModal} className="blockSpaceButton__item">
        Pagalba
      </button>
      {modal && (
        <div className="modal">
          <div className="modal__overlay"></div>
          {currentModal.map((card) => {
            return (
              <ModalContent
                key={card.modalId}
                id={card.modalId}
                className={card.modalStyle}
                header={card.header}
                content={card.content}
                toggleModal={toggleModal}
                nextId={nextId}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default SandboxHelpModal;
