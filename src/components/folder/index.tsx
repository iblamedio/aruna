import { useState } from 'react';
import './styles.css';

import Modal from 'react-modal';
import { DownloadModal } from '../downloadModal';

export default function Folder() {

    Modal.setAppElement(document.getElementById("root") ?? "#root");

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const folderArchive = {
        name:"folder",
        displayName: "Folder Digital"
    }

    return (
        <div className="folder-container">
            <div className="folder-content">
                <button onClick={openModal}>Fazer download do Folder Digital</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="download-modal"
                overlayClassName="download-modal-overlay"
            >
                <DownloadModal archive={folderArchive}/>
            </Modal>
        </div>
    )
}