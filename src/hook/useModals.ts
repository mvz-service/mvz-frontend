import { useRecoilValue } from "recoil";
import { modalDispatch } from "../recoil/modal/atom";

export default function useModals() {
    
    const {open,close} = useRecoilValue(modalDispatch);

    const openModal = (Component : any, props: any) =>{
        open(Component,props);
    }

    const closeModal = (Component: any) =>{
        close(Component);
    }

    return {openModal,closeModal};

}
