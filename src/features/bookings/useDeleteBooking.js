import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
    const queryClient = useQueryClient()

    const { mutate: deletingBooking, isPending: isDeletingBooking } = useMutation({
        mutationFn: (bookingId) => deleteBooking(bookingId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['bookings']
            })
            toast.success("Booking Deleted Successfully")
        },
        onError: () => {
            toast.error("an Error occured, booking could not be deleted")
        }
    })
    return { deletingBooking, isDeletingBooking }
}