import React from "react";
import { Modal, Button } from "react-bootstrap";

interface DeleteConfirmationModalProps {
    isShow: boolean;
    text: string;
    onDelete: () => void;
    onHide: () => void;
}
export default function DeleteConfirmationModal(
    props: DeleteConfirmationModalProps
) {

    return (
        <Modal show={props.isShow} onHide={props.onHide}>

            <Modal.Header>
                <Modal.Title>
                    Delete Item Confirmation
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                Do you confirm to delete item "
                <span className="text-primary">{props.text}</span>"?

                <br />
                <i className="text-danger">
                    This action cannot be reversed.
                </i>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Cancel
                </Button>

                <Button variant="danger" onClick={props.onDelete}>
                    Confirm Delete
                </Button>

            </Modal.Footer>

        </Modal>
    );

}
