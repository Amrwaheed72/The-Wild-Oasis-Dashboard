import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { mutate: logout, isPending } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            toast.success('Logged out successfully')
            queryClient.removeQueries() // to remove the data from the cache and local storage 
            navigate('/login', { replace: true })
        },
        onError: () => {
            toast.error('error logging out')
        }
    })
    return { logout, isPending }
}