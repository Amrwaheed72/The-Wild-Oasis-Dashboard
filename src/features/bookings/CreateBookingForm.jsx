import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { add } from "date-fns";
import styled from "styled-components";
import Button from "../../ui/Button";
const StyledSelect = styled.select`
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;
function CreateBookingForm({ onCloseModal }) {
  const { register, handleSubmit, watch, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  function fromToday(numDays, withTime = false) {
    const date = add(new Date(), { days: numDays });
    if (!withTime) date.setUTCHours(0, 0, 0, 0);
    return date.toISOString().slice(0, -1);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Guest Name" error={errors?.fullName?.message}>
        <Input
          id="fullName"
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="email address">
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Nationality">
        <Input
          id="nationality"
          {...register("nationality", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Cabin name">
        <Input
          id="name"
          type="number"
          placeholder="001 to 008"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="number of guests">
        <Input
          id="numGuests"
          type="number"
          {...register("numGuests", {
            required: "This field is required",
          })}
        />
      </FormRow>
      {/* <FormRow label="BreakFast ?">
        <StyledSelect
          id="hasBreakfast"
          defaultValue="No"
          {...register("hasBreakfast", {
            required: "This field is required",
          })}
        >
          <option>Yes</option>
          <option>No</option>
        </StyledSelect>
      </FormRow> */}
      <FormRow label="status">
        <Input
          id="status"
          disabled
          defaultValue="unconfirmed"
          {...register("status", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Created at">
        <Input
          id="created_at"
          disabled
          defaultValue={fromToday(0, true)}
          {...register("created_at", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="start date">
        <Input
          id="startDate"
          type="date"
          {...register("startDate", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="end date">
        <Input
          id="endDate"
          type="date"
          {...register("endDate", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="number of nights">
        <span>10</span>
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          onClick={() => onCloseModal?.()}
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button type="submit">Add Booking</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
