import { cn } from '@/lib/utils'
import Image from 'next/image';
import { Button } from './button';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-2 sm:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  id
}: {
  className?: string;
  title?: string | React.ReactNode;
  description: string;
  image: string;
  id : string
}) => {
  return (
    <a
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-black border-white/[0.2]  border justify-between flex flex-col space-y-4 hover:border-[#39FCF2]/60",
        className
      )}
      href={`/post/${id}`}
    >
        <div className='pickgradient'>

       
        <Image src={image} width={100000} height={100000} alt='' className='h-[30vh] rounded-md w-[100%] object-cover'  />
        </div>
      <div className="transition-all group-hover/bento:translate-x-2 ">
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-xs text-neutral-300 line-clamp-2 hero" dangerouslySetInnerHTML={{__html : description}}>
          
        </div>
      </div>
    </a>
  );
};
