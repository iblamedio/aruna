import { useState } from "react";
import './styles.css';

import { DownloadModal } from "../downloadModal";

import Modal from 'react-modal';

export const Table = () => {

    Modal.setAppElement(document.getElementById("root") ?? "#root");

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const tableArchive = {
        name:'tabeladeprecos',
        displayName:'Tabela de Preços'
    }

    return (
        <div className="table-container">
            <div className="table-content">
                <button onClick={openModal}> Visualizar tabela de preços</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="download-modal"
                overlayClassName="download-modal-overlay"
            >
                <DownloadModal archive={tableArchive} />
            </Modal>
        </div>
    )
}