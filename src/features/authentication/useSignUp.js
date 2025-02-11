import { useMutation } from "@tanstack/react-query";
import { signUp as apiSignup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
    const { mutate: signup, isPending } = useMutation({
        mutationFn: apiSignup,
        onSuccess: () => {
            toast.success('new user created successfully')
        }
    })
    return { signup, isPending }
}