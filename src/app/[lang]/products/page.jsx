import Link from "next/link";
import React from "react";

export default async function page({ params: { lang } }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return (
    <section>
      <div className="container flex flex-col	pt-8">
        {data.slice(0, 10)?.map((value, index) => (
          <Link href={`/products/${value?.id}`}>{value?.title}</Link>
        ))}
      </div>
    </section>
  );
}
