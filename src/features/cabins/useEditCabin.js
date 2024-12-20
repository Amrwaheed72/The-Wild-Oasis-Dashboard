import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export function useEditCabin() {
    const { reset } = useForm();
    const queryClient = useQueryClient();
    const { isLoading: isEditing, mutate: editCabin } = useMutation({
        mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
        onSuccess: () => {
            toast.success("Cabin Edited Successfully");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
            reset();
        },
        onError: (err) => toast.error(err.message),
    });
    return { isEditing, editCabin }
}