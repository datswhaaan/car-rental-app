import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function ProductCard({ carname, imgSrc} : { carname:string, imgSrc:string }) {
    return (
        <InteractiveCard contentName={ carname }>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%] p-[10px]'>{carname}</div>
        </InteractiveCard>
    )
}