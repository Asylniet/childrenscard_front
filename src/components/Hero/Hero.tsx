import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Button } from '../common/Button';
import { ArrowRightIcon } from '../svg/ArrowRightIcon';

const list = [
    {
        title: "Аттракционы",
        discount: "50%",
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perferendis minima itaque saepe culpa consequatur minus, aperiam recusandae soluta quod!",
        img: "https://images.unsplash.com/photo-1559402900-f5e7feea8679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
    },
    {
        title: "Образовательные курсы",
        discount: "30%",
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perferendis minima itaque saepe culpa consequatur minus, aperiam recusandae soluta quod!",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9uJTIwY291cnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=2070q=80",
    },
    {
        title: "Бассейны",
        discount: "15%",
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perferendis minima itaque saepe culpa consequatur minus, aperiam recusandae soluta quod!",
        img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9vbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
        title: "Развлечения",
        discount: "40%",
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perferendis minima itaque saepe culpa consequatur minus, aperiam recusandae soluta quod!",
        img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
]

export const Hero: React.FC = () => {
    const [isEnd, setIsEnd] = React.useState(false);
    const [isBeginning, setIsBeginnig] = React.useState(true);
    return (
        <section className="hero">
            <div className="hero-wrapper container p0">
                <Swiper
                    modules={[Pagination, EffectFade, Autoplay]}
                    effect='fade'
                    spaceBetween={1}
                    slidesPerView={1}
                    autoplay={true}
                    pagination={{
                        clickable: true,
                    }}
                    onSlideChange={(swiper) => {
                        setIsEnd(swiper.isEnd);
                        setIsBeginnig(swiper.isBeginning);
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <NextButton isEnd={isEnd}  />
                    <PrevButton isBeginning={isBeginning}  />
                    {list.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Image src={item.img} alt={item.title} fill priority={false} />
                            <div className="flex-column j-center h-100 p-2">
                                <div className="badge mb-1">
                                    {item.discount} скидка
                                </div>
                                <div className="h1">{item.title}</div>
                                <span className='mb-2'>{item.descr}</span>
                                <Button>
                                    Подробнее 
                                    <ArrowRightIcon />
                                </Button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
