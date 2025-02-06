import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useBooking() {
    const {
        data,
        isPending,
        error
    } = useQuery({
        queryKey: ['bookings'],
        queryFn: getBookings
    });

    return {
        data,
        isPending,
        error
    };
}