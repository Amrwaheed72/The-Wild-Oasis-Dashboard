import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { mutate: checkin, isPending: isCheckingin } = useMutation({
        mutationFn: (bookingId) => updateBooking(bookingId, {
            status: "checked-in",
            isPaid: true
        }),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ active: true })
            toast.success(`Booking #${data.id} Successsfully Checked in `)
            navigate("/")
        },
        onError: () => {
            toast.error("There was an error while Checking in ")
        }
    })
    return { checkin, isCheckingin }
} 