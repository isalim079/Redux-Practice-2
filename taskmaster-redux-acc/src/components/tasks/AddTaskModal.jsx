import Modal from "../ui/Modal";
import {useForm} from "react-hook-form"


const AddTaskModal = ({isOpen, setIsOpen}) => {

  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }

    return (
        <div>
           
              <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero"  > 
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" {...register('name')} />
                  <button type="submit">Submit</button>
                </form>

              </ Modal>
        </div>
    );
};

export default AddTaskModal;