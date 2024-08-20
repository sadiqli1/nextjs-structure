import React from "react";

export default async function page({ params: { lang, id } }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return <div>{data?.title}</div>;
}
