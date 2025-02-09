import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckout() {
    const queryClient = useQueryClient()
    const { mutate: checkout, isPending: isCheckingout } = useMutation({
        mutationFn: (bookingId) => updateBooking(bookingId, {
            status: "checked-out",
        }),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ active: true })
            toast.success(`Booking #${data.id} Successsfully Checked out `)
        },
        onError: () => {
            toast.error("There was an error while Checking out ")
        }
    })
    return { checkout, isCheckingout }
}