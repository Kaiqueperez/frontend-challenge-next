"use client";

export default function Page({ params }: { params: { nameId: string } }) {
  console.log(params);
  return <h1>My Page {params.nameId}</h1>;
}
