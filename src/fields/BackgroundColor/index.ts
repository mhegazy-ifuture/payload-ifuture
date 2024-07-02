import { Field } from "payload/types";

export const backgroundColor: Field = {
  name: "backgroundColor",
  type: "select",
  defaultValue:'FFFFFF',
  options: [
    {
      label: "Black",
      value: "161616",
    },
    {
      label: "Dark White",
      value: "FAFAFA",
    },
    {
      label: "White",
      value: "FFFFFF",
    },
    {
      label: "Dark Blue",
      value: "000937",
    },
  ],
};
