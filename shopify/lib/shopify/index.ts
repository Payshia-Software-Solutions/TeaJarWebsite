export async function getMenu(handle:string):Promise<Menu[]> {
    const res = await shopifyFetch<ShopifyMenuOperation>({
        query: getMenuQuery,
        tags: [TAGS.collections],
        variables: {
            handle,
        }
    });

    return (
        res.body?.data?.menu?.items.map((item: {title:string, url:string}) => ({
            title: item.title,
            path: item.url.replace(domain, "")
        }))
    )
}