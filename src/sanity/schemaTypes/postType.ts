import { defineType, defineField, defineArrayMember } from 'sanity';

// schemas/post.js
const post = defineType({
    name: 'post', // Schema name (used in references)
    type: 'document', // Must be 'document'
    title: 'Post', // Display name in Studio
    fields: [
        defineField({
            name: 'title', // Field name (this must exist for "name")
            type: 'string', // Type of field
            title: 'Post Title',
            description: "Title of the post",
            // Display name for this field in Studio
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title', // Use 'name' as the source
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: "summary",
            type: "text",
            title: "Summary",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
        }),
        defineField({
            name: "content",
            type: "array",
            title: "Content",
            of: [
                defineArrayMember({
                    type: "block"
                })
            ]
        }),
        defineField({
            name: "author",
            type: "reference",
            title: "Author",
            to: [{
                type: "author"

            }]
        })

    ],
});

export default post;
