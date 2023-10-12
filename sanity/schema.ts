import { defineField, defineType, type SchemaTypeDefinition } from "sanity";

const exampleType = defineType({
  name: "exampleType",
  type: "document",
  fields: [defineField({ name: "exampleField", type: "string" })],
});

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [exampleType],
};
