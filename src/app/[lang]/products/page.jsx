import Link from "next/link";
import api from "@/api";

export default async function page({ params: { lang } }) {
  const data = await api.products.index(lang).then((res) => res);

  return (
    <section>
      <div className="container flex flex-col	pt-8">
        {data?.data.slice(0, 10)?.map((value, index) => (
          <Link href={`/products/${value?.id}`} key={index}>
            {value?.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
