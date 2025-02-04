import Filter from "../../ui/Filter";
import TableOperatopns from "../../ui/TableOperations";
function CabinTableOperations() {
  return (
    <TableOperatopns>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
    </TableOperatopns>
  );
}

export default CabinTableOperations;
