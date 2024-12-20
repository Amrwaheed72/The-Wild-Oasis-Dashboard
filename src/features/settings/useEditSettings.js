import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useEditSettings() {
    const { reset } = useForm();
    const queryClient = useQueryClient();
    const { isPending: isUpdating, mutate: updateSettings } = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
            toast.success("Settings Updated Successfully");
            queryClient.invalidateQueries({
                queryKey: ["settings"],
            });
            reset();
        },
        onError: (err) => toast.error(err.message),
    });
    return { isUpdating, updateSettings }
}