import { useEffect, useState } from "react"
import { IoPersonSharp } from "react-icons/io5";
import { PeopleList } from "../../types/PeopleListType";
import AnonymousImage from "../../asset/image/anonymous.jpg";

export default function Card({item,onClick} : {item? : PeopleList, onClick? : React.MouseEventHandler<HTMLDivElement>}) {

    /* const [poster,setPoster] = useState('');

    useEffect(()=>{
        
        if(!item) return;

        const posterGet = async ()=>{
            setPoster(await peopleImageAPI(item.peopleNm,item.repRoleNm));
        }

        posterGet();

    },[item]); */

    return (
    <div onClick={onClick} className="flex flex-col">
        <div className={`w-full bg-cyan-50 relative overflow-hidden pb-[100%] rounded-t-xl after:pb-2.5 after:content-[''] after:block`}>
            <img 
                className="absolute left-0 top-0 w-full h-full object-cover transition-transform object-top"
                src={AnonymousImage}
                alt="인물 사진"
            />
        </div>
        <div className="border p-3 flex-1">
            <dl>
                <dt className="text-lg font-semibold break-keep">
                    {item?.peopleNm} <span className="text-xs font-light text-neutral-400">{item?.repRoleNm}</span>
                </dt>
                <dd className="text-xs md:text-sm mt-1 text-neutral-500 text-ellipsis overflow-hidden line-clamp-2 ">{item?.filmoNames}</dd>
            </dl>
        </div>
    </div>
    )

}