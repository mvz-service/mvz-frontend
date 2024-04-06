import ReactModal from 'react-modal'
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { MySwal } from '../../../utils/MySwal';
import { ModalInterface } from '../../../recoil/modal/atom';

interface Props extends ModalInterface {
    onClose : any;
  }

export default function MessageModal({isOpen,onClose} : Props) {
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [text,setText] = useState('');
    
    const handleClose = ()=>{
        onClose();
    }

    const onChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {target : {name,value}} = e;

        if(name === "name"){
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "text"){
            setText(value);
        }

    }

    const onSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(!process.env.REACT_APP_EMAILJS_PUBLICKKEY || !process.env.REACT_APP_EMAILJS_SERVICE_ID || !process.env.REACT_APP_EMAILJS_TEMPLATE_ID) return;

        emailjs
            .send(process.env.REACT_APP_EMAILJS_SERVICE_ID,process.env.REACT_APP_EMAILJS_TEMPLATE_ID,{
                name,
                email,
                text
            },{
                publicKey : process.env.REACT_APP_EMAILJS_PUBLICKKEY
            })
            .then(
                async (response)=>{
                    const {status} = response;
                    if(status === 200){
                        await MySwal.fire({
                            icon : "success",
                            text : "메일이 성공적으로 보내졌습니다."
                        }).then(result=>{
                            if(result.isConfirmed){
                                handleClose();
                            }
                        })
                    }
                },
                (error)=>{
                    console.log(error);
                }
            )
            

    }

  return (
    <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={{
            content : {
              width : "95%",
              maxWidth : "820px",
              top : "50%",
              left : "50%",
              transform : 'translate(-50%, -50%)',
            },
            overlay : {
              zIndex : '1050',
              background : "rgba(0,0,0,0.5)"
            }
          }}
    >
        <IoClose className="text-4xl text-point-color cursor-pointer" onClick={handleClose}/>
        <div className="border-t border-b py-2 mt-2 font-pretendard tracking-custom">
            <h2 className="text-point-color text-center text-2xl">건의 사항</h2>
        </div>

        <form onSubmit={onSubmit}>
            <div className='pt-5 font-pretendard tracking-custom'>
                <div className='flex-col md:flex-row gap-3 md:gap-5 flex'>
                    <div className='flex-1'>
                        <label 
                            htmlFor="name" 
                            className='text-point-color font-bold text-sm'
                        >성함</label>
                        <input 
                            onChange={onChange}
                            name='name'
                            className='w-full block border border-gray-300 px-2 h-10' 
                            type="text" 
                            placeholder='성함'
                            id='name'
                        />
                    </div>
                    <div className='flex-1'>
                        <label 
                            htmlFor="email" 
                            className='text-point-color font-bold text-sm'
                        >이메일</label>
                        <input 
                            onChange={onChange}
                            name='email' 
                            className='w-full block border border-gray-300 px-2 h-10' 
                            type="email" 
                            placeholder='이메일'
                        />
                    </div>
                </div>
                <textarea 
                    onChange={onChange}
                    className='w-full mt-5 border border-gray-300 p-2 h-40 resize-none' 
                    name="text" 
                    placeholder='건의사항 내용을 입력해주세요'
                ></textarea>
                <button className='w-28 h-9 bg-point-color text-white rounded m-auto block mt-5'>보내기</button>
            </div>
        </form>

    </ReactModal>
  )
}
