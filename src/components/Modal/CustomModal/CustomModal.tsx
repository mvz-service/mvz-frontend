import { IoClose } from "react-icons/io5";
import ReactModal from "react-modal";
import Service from "./Service";
import Privacy from "./Privacy";
import { ModalInterface } from "../../../recoil/modal/atom";

interface Props extends ModalInterface {
  onClose : any;
  name : string;
}

export default function CustomModal({isOpen,onClose,name} : Props) {

  const handleClose = ()=>{
    onClose();
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        content : {
          width : "95%",
          maxWidth : "820px",
          height : "80%",
          maxHeight : "600px",
          top : "50%",
          left : "50%",
          transform : 'translate(-50%, -50%)',
          overflow : "hidden",
        },
        overlay : {
          zIndex : '1050',
          background : "rgba(0,0,0,0.5)"
        }
      }}
    >
      <IoClose className="text-4xl text-point-color cursor-pointer" onClick={handleClose}/>
      <div className="flex flex-col h-full pb-12 font-pretendard tracking-custom">
        <div className="border-t border-b my-2 py-2">
            <h2 className='text-point-color text-xl text-center'>{name}</h2>
        </div>
        <div className="overflow-y-auto flex-1 ">
          {
            name === "이용약관"?
              <Service/>
            : <Privacy/>
          }
        </div>
      </div>
    </ReactModal>
  )
}
