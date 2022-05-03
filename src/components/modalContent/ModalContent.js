import React from "react";
import PropTypes from "prop-types";
import "./modalcontent.scss";

const ModalContent = ({
  id,
  header,
  content,
  className,
  toggleModal,
  nextId,
}) => {
  return (
    <div className={className} id="modal-content">
      <h4 className="h4-font-style">{header}</h4>
      <p>{content}</p>
      <button className="modal__content__button--close" onClick={toggleModal}>
        UŽDARYTI
      </button>
      <button
        className={id === 6 ? "hidden-button" : "modal__content__button--next"}
        onClick={nextId}
      >
        TĘSTI
      </button>
    </div>
  );
};

ModalContent.propTypes = {
  id: PropTypes.number.isRequired,
  header: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  nextId: PropTypes.func.isRequired,
};

ModalContent.defaultProps = {
  toggleModal: () => {},
};

export default ModalContent;
