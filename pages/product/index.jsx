import React from 'react'
import Image from "next/image";
import Title from '../components/ui/Title';


const Index = () => {
  return (
    <div className="flex items-center md:h-[calc(100vh_-_88px)] gap-5 py-20 flex-wrap ">
      <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto">
        <Image src="/images/f1.png" alt=""  fill  objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">
          $10
        </span>
        <p className="text-sm my-4 md:pr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          fugit corporis ex laboriosam tenetur at ad aspernatur eius numquam
          molestiae.
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div
              className="relative w-8 h-8 cursor-pointer"
            >
              <Image src="/images/f1.png" alt=""  fill  />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Small
              </span>
            </div>
            <div
              className="relative w-12 h-12 cursor-pointer"
            >
              <Image src="/images/f1.png" alt=""  fill  />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Medium
              </span>
            </div>
            <div
              className="relative w-16 h-16 cursor-pointer"
            >
              <Image src="/images/f1.png" alt=""  fill  />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 my-6 md:justify-start justify-center">
            <label className="flex items-center gap-x-1" >
              <input
                type="checkbox"
                className="w-5 h-5 accent-primary"
              />
              <span className="text-sm font-semibold">Ketçap</span>
            </label>
            <label className="flex items-center gap-x-1" >
              <input
                type="checkbox"
                className="w-5 h-5 accent-primary"
              />
              <span className="text-sm font-semibold">Mayonez</span>
            </label>
            <label className="flex items-center gap-x-1" >
              <input
                type="checkbox"
                className="w-5 h-5 accent-primary"
              />
              <span className="text-sm font-semibold">Ranch Sos</span>
            </label>
        </div>
        <button className="btn-primary" >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Index