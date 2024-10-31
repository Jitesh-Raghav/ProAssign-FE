import { Input } from "@/components/ui/input";
// import "./Login.css";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { login } from "@/redux/Auth/Action";
import { inviteToProject } from "@/redux/Project/Project.Action";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../components/ui/animated-modal";
import SendIcon from '@mui/icons-material/Send';

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
 
});
const InviteUserForm = ({projectId}) => {
  const dispatch=useDispatch();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      
    },
  });
  const onSubmit = (data) => {
    data.projectId=projectId
     dispatch(inviteToProject(data))
    
    console.log("sent invitation", data);

  };
  return (
    <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="border w-full border-gray-700 py-5 px-5"
                          placeholder="Enter user email"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Modal>
              <ModalTrigger className="bg-[#2d7aff] dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                 Send Invitation
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  <SendIcon/>
                </div>
              </ModalTrigger>
              </Modal>
              </form>
            </Form>

         
          </div>
  );
};

export default InviteUserForm;
