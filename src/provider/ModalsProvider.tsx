import React, { useEffect, useMemo } from 'react'
import { useSetRecoilState } from 'recoil'
import { modalAtom, modalDispatch } from '../recoil/modal/atom';
import Modals from '../components/Modal/Modals';

export default function ModalsProvider({children} : {children : React.ReactNode}) {

    const setModalValue = useSetRecoilState(modalAtom);
    const setModalDispatch = useSetRecoilState(modalDispatch);

    const open = (Component : any,props : any)=>{
        setModalValue((prev)=>{
            return [
                ...prev,
                {
                    Component,
                    props,
                    isOpen : true
                }
            ]
        })
    }

    const close = (Component : any)=>{
        setModalValue((prev)=>{
            return prev.filter(item=>item.Component !== Component);
        })
    }

    const dispatch = useMemo(()=> ({open,close}),[]);

    useEffect(()=>{
        setModalDispatch(dispatch);
    },[open,close]);

  return (
    <>
        <Modals/>
        {children}
    </>
  )
}
