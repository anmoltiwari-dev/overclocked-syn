export const getPosts = async (locale: string) => {
    const res = await fetch(`${process.env.CONTENTFUL_API_URL}/posts?locale=${locale}`, {);
};

export const getPostBySlug = async (slug: string, locale: string) => {
    const res = await fetch(
        `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?content_type=blogPost&fields.slug=${slug}&locale=${locale}`
    );
    const data = await res.json();
    return data.items[0]?.fields;
}