import React from "react";
import { Card } from "./Card";
import { cards } from "./Recomendations";
import { useShuffle } from "@/hooks/useShuffle";

export const Interesting = () => {
  return (
    <section className="wrapper">
      <div className="interesting">
        <div className="block">
          <div className="h3">Интересное</div>
          <span className="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium sequi saepe et delectus cupiditate velit odio? Consequatur eaque velit debitis voluptatem quae porro corrupti recusandae vel itaque quibusdam. Ut, fuga?</span>
        </div>
        <div className="interesting-cards my-1 flex wrap g-05">
          {cards.slice(2, 6).map((card, index) => (
            <Card key={index} className="shadow" img={card.img} title={card.title} discount={card.discount} />
          ))}
        </div>
      </div>
    </section>
  )
}
