import React from "react";
import { Card } from "./Card";

interface ICard {
  img: string;
  title: string;
  discount: number;
}

export const cards: ICard[] = [
  {
    img: "https://images.unsplash.com/photo-1571125720375-72763991e141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    title: "Популярное",
    discount: 10,
  },
  {
    img: "https://images.unsplash.com/photo-1416397202228-6b2eb5b3bb26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
    title: "Развлечения",
    discount: 25,
  },
  {
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80",
    title: "Питание",
    discount: 12,
  },
  {
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Компьютерные игры",
    discount: 10,
  },
  {
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80",
    title: "Питание",
    discount: 12,
  },
  {
    img: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    title: "PlayStation",
    discount: 17,
  },
  {
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Компьютерные игры",
    discount: 10,
  },
  {
    img: "https://images.unsplash.com/photo-1416397202228-6b2eb5b3bb26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
    title: "Развлечения",
    discount: 25,
  },
  {
    img: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    title: "PlayStation",
    discount: 17,
  },
  {
    img: "https://images.unsplash.com/photo-1571125720375-72763991e141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    title: "Популярное",
    discount: 10,
  },
]

export const Recomendations = () => {
  return (
    <section className="wrapper">
      <div className="h1 mb-1">Рекомендации</div>
      <div className="flex wrap g-05">
        {cards.map((card, index) => (
          <Card key={index} img={card.img} title={card.title} discount={card.discount} />
        ))}
      </div>
    </section>
  )
}
