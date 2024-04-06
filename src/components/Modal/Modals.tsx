import ReactDOM from 'react-dom';
import { useRecoilValue } from 'recoil'
import { modalAtom, modalDispatch } from '../../recoil/modal/atom';

export default function Modals() {

  const modalValue = useRecoilValue(modalAtom);
  const {close} = useRecoilValue(modalDispatch);

  return ReactDOM.createPortal(
    <>
        {modalValue.map((modalInfo,index)=>{

            const {Component, props, isOpen} = modalInfo;

            const onClose = ()=>{
              close(Component);
            }

            return (
                <Component key={index} onClose={onClose} isOpen={isOpen} {...props} />
            )

        })}
    </>, document.body
  )
}
