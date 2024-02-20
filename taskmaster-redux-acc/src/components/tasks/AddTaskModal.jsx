/* eslint-disable no-unused-vars */
import Modal from "../ui/Modal";
import {useForm} from "react-hook-form"
import {useDispatch} from "react-redux"
import { addTask } from "../../redux/features/tasks/tasksSlice";


const AddTaskModal = ({isOpen, setIsOpen}) => {

  const {register, handleSubmit, reset} = useForm()

  const dispatch = useDispatch()

  const onCancel = () => {
    reset ()
    setIsOpen(false)
  }

  const onSubmit = (data) => {
    // console.log(data);

    dispatch(addTask(data))

    onCancel()
  }

    return (
        <div>
           
              <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero"  > 
                
                <form onSubmit={handleSubmit(onSubmit)}>

                 <div className="flex mt-5 flex-col gap-1">
                  <label htmlFor="title" className="mb-2">Title</label>
                  <input type="text" className="w-full" id="title" {...register('title')} />
                 </div>

                 <div className="flex mt-5 flex-col gap-1">
                  <label htmlFor="title" className="mb-2">Description</label>
                  <input type="text" className="w-full" id="description" {...register('description')} />
                 </div>

                 <div className="flex mt-5 flex-col gap-1">
                  <label htmlFor="title" className="mb-2">Deadline</label>
                  <input type="date" className="w-full" id="date" {...register('date')} />
                 </div>

                 <div className="flex mt-5 flex-col gap-1">
                  <label htmlFor="title" className="mb-2">Assign To</label>
                  <select  className="w-full" id="assignedTo" {...register('assignedTo')} > 
                  
                  <option value="Mir Hussain">Mir Hussain</option>
                 <option value="Mezba Abedin">Mezba Abedin</option>
                 <option value="Nahid Hasan">Nahid Hasan</option>
                 <option value="Rahatul Islam">Rahatul Islam</option>
                 <option value="Mir Hussain">Mir Hussain</option>
                 <option value="Mezba Abedin">Mezba Abedin</option>
                 <option value="Nahid Hasan">Nahid Hasan</option>
                 <option value="Rahatul Islam">Rahatul Islam</option>

                  </select>
                 </div> 

                  <div className="flex justify-end gap-3 mt-5">
                  <button onClick={() => onCancel()} className="bg-red-600 rounded-md  px-3 py-2 text-white">Cancel</button>
                  <button className="bg-green-600 rounded-md  px-3 py-2 text-white " type="submit">Submit</button>
                  </div>
                </form>

              </ Modal>
        </div>
    );
};

export default AddTaskModal;