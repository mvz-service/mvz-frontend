import { atom } from "recoil";

export interface ModalInterface {
    Component : any;
    props : any;
    isOpen : boolean;
}

export const modalAtom = atom<ModalInterface[]>({
    key : "modalKey",
    default : []
})

interface ModalDispatchInterface {
    open : any;
    close : any;
}
export const modalDispatch = atom<ModalDispatchInterface>({
    key : "modalDispatchKey",
    default : {
        open : ()=>{},
        close : ()=>{},
    }
})