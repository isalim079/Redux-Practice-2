import Modal from "../ui/Modal";


const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <div>
          
              <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero"  > 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam, impedit sequi quae quisquam sunt amet obcaecati earum odit atque quam. Quia earum rem, amet omnis tempora perferendis consectetur ipsum.
              </ Modal>
        </div>
    );
};

export default AddTaskModal;