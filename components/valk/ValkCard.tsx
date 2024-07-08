'use client'
import useLanguage from '@/hooks/useLanguage';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'

interface IValkCard {
    title: string;
    description: string;
    date: string;
    link: string;
    category: string;
    image: string | null;
    valk: string;
  }
  
  const ValkCard = ({
    title,
    description,
    date,
    link,
    category,
    image,
    valk
  }: IValkCard) => {
    const language = useLanguage();
    const [categories, setCategories] = React.useState<string[]>([]);
  
    useEffect(() => {
      setCategories([]);
      category.split(",").map((cat) => {
        setCategories((prev) => [...prev, cat]);
      });
    }, [category]);
  
    return (
      <div className="bg-primary border border-secondary rounded-md my-2 md:m-2 m-0">
        <Link
          className="hover:underline w-full h-full flex justify-start items-center text-text"
          href={`/${language}${valk}`}
        >
          <div className="py-8 px-2">
            <div className="flex w-full md:flex-row flex-col md:items-start items-center">
              {image && (
                <Image
                  src={image}
                  alt="Lycians pixel art"
                  width={250}
                  height={250}
                  className="mr-4 border border-secondary md:mb-0 mb-4 rounded-md"
                />
              )}
              <div className="flex flex-col justify-start w-full">
                <h1 className="font-bold text-base md:text-xl lg:text-2xl mb-4">{title}</h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };
  
  export default ValkCard;
  