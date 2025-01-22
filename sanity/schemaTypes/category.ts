import { defineType } from "sanity";

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Category Title',
            type: 'string',
    
            
        },
        {
            name: 'image',
            title: 'Category Image',
            type: 'image',
            
        },
        {
            title: 'Number of Products',
            name: 'products',
            type: 'number',
    
        }
    ],
});