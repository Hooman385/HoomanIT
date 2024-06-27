export default async function sitemap() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_HOST_URL}api/getAllProductIDs`
  );
  const productIDs = await response.json();
  const productEntries = productIDs.map((id) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_HOST_URL}product/${id}`,
  }));
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_HOST_URL}categories`,
    },
    ...productEntries,
  ];
}
