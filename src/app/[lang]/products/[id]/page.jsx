import api from "@/api";

export default async function page({ params: { lang, id } }) {
  const data = await api.products.show(id, lang).then((res) => res);
  return <div>{data?.data?.title}</div>;
}
