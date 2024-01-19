import { FieldDefinitionBase, defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Keep the title relative to product",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    // optional - if you only sell one kind of product:
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (rule: any) => rule.required(),
    } as { type: string; name: string; of: Array<{ type: string; to: Array<{ type: string }> }> } & FieldDefinitionBase),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required(),
    }),

    // optional
    defineField({
      name: "rowprice",
      title: "Row Price",
      type: "number",
    }),

    // optional
    defineField({
      name: "ratings",
      title: "Ratings",
      type: "number",
      description: "Ratings must be equal or below 5",
    }),

    // optional
    defineField({
      name: "isnew",
      title: "New Arrival",
      type: "boolean",
    }),
    
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),

    // optional
    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),

    // optional
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
    }),


    defineField({
      name: "quantity",
      title: "Quantity",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      position: "position",
    },
  },
});
