"use client";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [testing, setTesting] = useState<[any]>();
  useEffect(() => {
    const query = `
      query {
        allProducts {

          name
          description
          image_url
          category
          price_in_cents
          sales
          created_at
        }
      }
    `;

    fetch("http://localhost:3333/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Header />
    </Container>
  );
}
