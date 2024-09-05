'use client'
import CatalogNavigation from "../CatalogNavigation";
import Image from "next/image";
import nlmkLogoPic from '@/public/images/NLMK-logo.png'
import listyOcinkPic1 from '@/public/images/listy-ocinkovannyj-1.jpeg'
import listyOcinkPic2 from '@/public/images/listy-ocinkovannyj-2.jpeg'
import listyOcinkPic3 from '@/public/images/listy-ocinkovannyj-3.jpeg'
import listyOcinkPic4 from '@/public/images/listy-ocinkovannyj-4.jpeg'
import listyOcinkSmall from '@/public/images/list-ocink-small.png'
import LightGallery from 'lightgallery/react';
import { nlmkSiteUrl } from "@/app/constants";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

const thinkness = [0.5, 0.7, 0.8, 0.9, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0]

export default function CatalogSheetPage() {
    return (<div>
        <div style={{}} className="relative w-full py-16">
            <div className="container">
                <h1 className="text-white text-4xl">Лист оцинкованный</h1>
            </div>
        </div>
        <div className="container py-20">
            <div className="mb-16">
                <CatalogNavigation />
            </div>
            <div className="mb-16">
                <div>
                    <div>
                        <table className="w-full">
                            <thead>
                                <tr className="border-b bg-neutral-100">
                                    <th className="p-5">Наименование</th>
                                    <th>Длина</th>
                                    <th>Марка</th>
                                    <th>Производитель</th>
                                    <th>Цена (с НДС)</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {thinkness.map(item => (
                                    <tr className="border-b text-center text-sm" key={item}>
                                        <td className="py-5">
                                            <div className="flex items-center gap-4 justify-center">
                                                <Image src={listyOcinkSmall} width="48" alt="Лист оцинкованный" />
                                                <span>Лист оцинкованный {Number(item).toFixed(1)} мм</span>
                                            </div>
                                        </td>
                                        <td>Любая<br /> от 2500 до 5000 мм</td>
                                        <td>02</td>
                                        <td>
                                            <a href={nlmkSiteUrl} target="_blank">
                                                <Image src={nlmkLogoPic} className="mx-auto" width="65" alt="Логотип компании НЛМК" />
                                            </a>
                                        </td>
                                        <td>По запросу</td>
                                        <td><button className="rounded-full bg-orange-400 px-7 py-2 text-white">Купить</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="font-bold text-2xl mb-8">Фото продукции</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{ 768: { slidesPerView: 4 } }}
                    onSlideChange={() => console.log('slide change')}
                    navigation
                    modules={[Navigation]}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {[listyOcinkPic1, listyOcinkPic2, listyOcinkPic3, listyOcinkPic4].map((image, index) => (
                        <li key={index}>
                            <SwiperSlide>
                                <LightGallery
                                    download={false}
                                    speed={500}
                                >
                                    <Image className="w-full h-full cursor-pointer" src={image} alt='asd1' />
                                </LightGallery></SwiperSlide>
                        </li>

                    ))}
                </Swiper>
            </div>
        </div>
    </div>)
}