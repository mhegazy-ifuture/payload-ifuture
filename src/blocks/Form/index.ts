import type { Block } from "payload/types";

import richText from "../../fields/richText";

export const FormBlock: Block = {
  slug: "formBlock",
  labels: {
    singular: "Form Block",
    plural: "Form Blocks",
  },
  fields: [
    {
      name: "enableIntro",
      label: "Enable Intro Content",
      type: "checkbox",
    },
    richText({
      name: "introContent",
      label: "Intro Content",
      admin: {
        condition: (_, { enableIntro }) => Boolean(enableIntro),
      },
    }),
    {
      name: "enableContactInfo",
      label: "Enable Content Info",
      type: "checkbox",
    },
    {
      name: "contactCards",
      label: "Contact Cards",
      admin: {
        condition: (_, { enableContactInfo }) => Boolean(enableContactInfo),
      },

      type: "array",
      fields: [
        {
          name: "type",
          type: "select",
          options: [
            { label: "Mail", value: "mail" },
            { label: "Phone", value: "tel" },
            { label: "Office", value: "location" },
          ],
        },
        {
          name: "icon",
          label: "Icon",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "contactInfo",
          label: "Contact Info",
          type: "text",
          localized:true,
          required: true,
        },
      ],
    },
   
  ],
};
