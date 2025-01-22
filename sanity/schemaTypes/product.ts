import { defineType } from "sanity";

export const product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "price", type: "number", title: "Price" },
    { name: "priceWithoutDiscount", type: "number", title: "Price Without Discount", },
    { name: "badge", type: "string", title: "Badge", options: { list: ["New", "Sales"] } },
    { name: "imageUrl", type: "url", title: "Image URL" },
    { name: "description", type: "text", title: "Description" },
    { name: "inventory", type: "number", title: "Inventory" },
    {
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      title: "Category",
    },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      title: "Tags",
    },
  ],
});
