import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        {isOpenModal ? "hide Form" : "Add new cabin"}
      </Button>
      {isOpenModal ? (
        <Modal onClose={()=>setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={()=>setIsOpenModal(false)} />
        </Modal>
      ) : null}
    </div>
  );
}

export default AddCabin;
