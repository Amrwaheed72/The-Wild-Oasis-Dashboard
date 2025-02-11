import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import {useCabins} from "../cabins/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isPending: isRecentBookings, recentBookings } = useRecentBookings();

  const {
    isPending: isRecentStays,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();

  const { cabins, isPending: isCabins } = useCabins();

  if (isRecentBookings || isRecentStays || isCabins) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={recentBookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>Todays activity</div>
      <div>Chart Stay Durations</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
