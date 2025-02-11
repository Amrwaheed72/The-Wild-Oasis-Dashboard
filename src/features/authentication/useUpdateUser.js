import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
    const { reset } = useForm();
    const queryClient = useQueryClient();
    const { isPending: isUpdating, mutate: updateUser } = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: () => {
            toast.success("User Account Updated Successfully");
            queryClient.invalidateQueries({
                queryKey: ["user"],
            });
            reset();
        },
        onError: (err) => toast.error(err.message),
    });
    return { isUpdating, updateUser }
}