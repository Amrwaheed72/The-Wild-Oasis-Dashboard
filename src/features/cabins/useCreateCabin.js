import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";



export function useCreateCabin() {
    const { reset } = useForm();
    const queryClient = useQueryClient();
    const { isLoading: isCreating, mutate: createCabin } = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            toast.success("New cabin Created Successfully");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
            reset();
        },
        onError: (err) => toast.error(err.message),
    });
    return { isCreating, createCabin };
}