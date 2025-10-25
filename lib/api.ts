import { client } from "./contentful";

export async function getAllPosts(locale = 'en-US') {
    const res = await client.getEntries({
        content_type: 'blogPage',
        locale,
    });

    return res.items.map((item) => ({
        id: item.sys.id,
        title: item.fields.title,
        slug: item.fields.slug,
        excerpt: item.fields.excerpt,
        coverImage: (item.fields.image && typeof item.fields.image === 'object' && 'fields' in item.fields.image)
            ? (item.fields.image as { fields: { file: { url: string } } }).fields.file.url
            : undefined,
        publishedDate: item.fields.publishedDate,
        author: item.fields.author,
        body: item.fields.body,
    }));
}

export async function getPostById(id: string, locale = 'en-US') {
    const res = await client.getEntries({
        content_type: 'blogPage',
        'fields.entry_id': id,
        locale,
        limit: 1,
    });

    const post = res.items[0];
    if (!post) return null;
    return {
        id: post.sys.id,
        title: post.fields.title,
        slug: post.fields.slug,
        excerpt: post.fields.excerpt,
        body: post.fields.body,
        coverImage: (post.fields.image && typeof post.fields.image === 'object' && 'fields' in post.fields.image)
            ? (post.fields.image as { fields: { file: { url: string } } }).fields.file.url
            : undefined,
        publishedDate: post.fields.publishedDate,
        author: post.fields.author,
    };
}

const listTypes = async () => {
    const res = await client.getContentTypes();
    console.log(res.items.map(ct => ct.sys.id));
};

// listTypes();
