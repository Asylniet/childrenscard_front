import React from "react";
import Image from "next/image";

interface IProps {
  img: string;
  title: string;
  discount: number;
  className?: string;
}

export const Card: React.FC<IProps> = ({ img, title, discount, className }) => {
  return(
    <div className={`card ${className}`}>
      <div className="card-image-holder">
        <Image src={img} fill alt={title} />
      </div>
      <div className="body2 tac my-1">
        {title}
      </div>
      <div className="discount">
        до {discount}%
      </div>
    </div>
  )
}