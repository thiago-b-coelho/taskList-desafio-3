import React from "react";
import "./index.scss";

const Modal = ({ task, onClose, EditTask, show }) => {
    if (!show) return null;

    return (
        <div className="Modal">
            <div className="Modal__content">
                <h2 className="Modal__content__header">
                    Deseja editar esse item?
                </h2>
                <div className="Modal__content__body">
                    <h3>
                        <b>Título: </b>
                        {task.title}
                    </h3>
                    <h4>
                        <b>Descrição: </b>
                        {task.description}
                    </h4>
                </div>
                <div className="Modal__content__buttons">
                    <button
                        className="Modal__content__buttons--yes"
                        onClick={() => {
                            EditTask(task.id, task.title, task.description);
                            onClose();
                        }}
                    >
                        Sim
                    </button>
                    <button
                        className="Modal__content__buttons--no"
                        onClick={onClose}
                    >
                        Não
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
