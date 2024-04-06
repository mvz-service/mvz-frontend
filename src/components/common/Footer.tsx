import { useRecoilValue } from "recoil";
import {ReactComponent as Tistory} from "../../asset/image/tistory.svg";
import {IoChatboxEllipses,IoLogoGithub, IoMailSharp} from "react-icons/io5"
import { modalDispatch } from "../../recoil/modal/atom";
import CustomModal from "../Modal/CustomModal/CustomModal";
import MessageModal from "../Modal/MessageModal/MessageModal";

export default function Footer() {

    const {open} = useRecoilValue(modalDispatch);

    const serviceClick = ()=>{
        open(CustomModal,{name : "이용약관"});
    }

    const privacyClick = ()=>{
        open(CustomModal,{name : "개인정보 처리방침"});
    }

    const messageClick = ()=>{
        open(MessageModal);
    }

  return (
    <footer className="text-sm text-white bg-point-color px-4 font-pretendard tracking-custom">
        <div className="container max-w-screen-xl mx-auto py-8">
            <div className="flex items-center flex-col gap-5 md:flex-row md:justify-between">
                <nav className="flex gap-4">
                    <button onClick={serviceClick}>이용약관</button>
                    <button onClick={privacyClick}>개인정보처리방침</button>
                </nav>
                <nav className="flex text-2xl gap-4 order-first md:order-2">
                    <button onClick={messageClick}><IoChatboxEllipses /></button>
                </nav>
            </div>
            <p className="mt-3 text-center md:text-left">Copyright (C) 2024 MVZ All Rights Reserved.</p>
            <address className="not-italic text-center flex gap-3 mt-5 md:mt-3 md:text-left text-xl items-center justify-center md:justify-start">
                <p><a href="mailTo:spbabo97@naver.com"><IoMailSharp /></a></p>
                <p><a href="https://banal7.tistory.com" target="_blank" rel="noreferrer"><Tistory width={20}/></a></p>
                <p><a href="https://github.com/Banal972" target="_blank" rel="noreferrer"><IoLogoGithub /></a></p>
            </address>
        </div>
    </footer>
  )
}
