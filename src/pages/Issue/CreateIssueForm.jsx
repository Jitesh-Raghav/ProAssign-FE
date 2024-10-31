import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { createIssue } from "@/redux/Issue/Issue.action";
import { useParams } from "react-router-dom";
import { DialogClose } from "@/components/ui/dialog";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../components/ui/animated-modal";

import { motion } from "framer-motion";
import CreateIcon from '@mui/icons-material/Create';

const formSchema = z.object({
  issueName: z.string().min(2, {
    message: "issue name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "description must be at least 2 characters.",
  }),
});

export function CreateIssueForm({ status }) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      issueName: "",
      description: "",
    },
  });
  const onSubmit = (data) => {
    // Handle form submission here

    console.log(data);
    dispatch(
      createIssue({
        title: data.issueName,
        projectId: id,
        status,
        description: data.description,
      })
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="issueName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="what needs to be done?" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Describe your task..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose>
        <Modal>
              <ModalTrigger className="bg-[#2d7aff]  dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                 Create Issue
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  <CreateIcon/>
                </div>
              </ModalTrigger>
              </Modal>
        </DialogClose>
      </form>
    </Form>
  );
}
