import { Link, useLocation, useNavigate } from "react-router-dom";
// import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { MySwal } from "../../utils/MySwal";

export default function Header() {

  const user = auth.currentUser;
  
  const navigate = useNavigate();
  const loaction = useLocation();
  const [mobMenu,setMobMenu] = useState(false)

  const isView = loaction.pathname.startsWith('/movie/view');

  const onMenuClick = ()=>{
    setMobMenu(!mobMenu);
  }

  const onLogOut = ()=>{

    MySwal.fire({
      icon : 'warning',
      text : "로그아웃을 하시겠습니까?",
      showCancelButton : true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText : "네",
      cancelButtonText : "아니요"
    }).then((result)=>{
      if(result.isConfirmed){
        auth.signOut();
        navigate('/login');  
      }
    });

  }

  useEffect(()=>{
    setMobMenu(false);
  },[loaction.pathname]);

  useEffect(()=>{
    const resizehandle = ()=>{
      if(window.innerWidth > 768){
        setMobMenu(false);
      }
    }
    window.addEventListener('resize',resizehandle);
    return()=>{
      window.removeEventListener('resize',resizehandle);
    }
  },[]);

  return (
    <>
      <header
        className={`${isView ? "absolute" : ""} z-50 w-full md:px-12 font-pretendard tracking-custom`}
      >
          <div 
            className={`${isView ? "" : "bg-point-color"} mx-auto flex justify-between items-center text-white h-12 px-4 md:px-6 md:rounded-lg md:h-14`}
          >
              <Link 
                className="text-xl md:text-2xl"
                to={'/'}
              >MVZ</Link>

              <nav 
                className="mr-auto ml-10 gap-4 text-sm hidden md:flex"
              >
                  <Link to={'/movie'}>영화목록</Link>
                  <Link to={'/company'}>영화사목록</Link>
                  <Link to={'/people'}>영화인목록</Link>
              </nav>

              <nav
                className=" text-sm hidden md:block "
              >
                {
                  !user ?
                  <>
                    <Link 
                      to={'/login'}
                    >로그인</Link>
                    <Link 
                      className="ml-2 pl-2 border-l"
                      to={'/sign'}
                    >회원가입</Link>
                  </>
                  : 
                  <>
                    <Link 
                      className="ml-2 pl-2"
                      to={'/mypage'}
                    >마이페이지</Link>
                    <span 
                      className="ml-2 pl-2 border-l cursor-pointer "
                      onClick={onLogOut}
                    >로그아웃</span>
                  </>
                }
                  
              </nav>

              <div onClick={onMenuClick} className=" w-7 h-4 relative cursor-pointer md:hidden z-[52] group">
                <div className={`${mobMenu ? "bg-black rotate-45 top-1/2 -translate-y-1/2" : "bg-white top-0"} w-full absolute h-menu left-0 transition-[background,transform,top] duration-300`}></div>
                <div className={`${mobMenu ? "bg-black -translate-x-full opacity-0" : "bg-white"} w-4/5 absolute h-menu top-1/2 right-0 transition-[opacity,transform] duration-300`}></div>
                <div className={`${mobMenu ? "bg-black -rotate-45 top-1/2 -translate-y-1/2" : "bg-white top-full"} w-full absolute h-menu left-0 transition-[background,transform,top] duration-300`}></div>
              </div>

              <div className={`fixed top-0 w-4/5 max-w-96 h-full z-[51] bg-white text-black pt-12 flex flex-col transition-[transform] duration-300 right-0 ${mobMenu ? "translate-x-0" : "translate-x-full"}`}>
                <nav className="flex text-center text-white bg-point-color py-2">
                  {
                    !user ?
                    <>
                      <Link 
                        className="flex-1"
                        to={'/login'}
                      >로그인</Link>
                      <Link 
                        className="flex-1 border-l border-[#5b87bd]"
                        to={'/sign'}
                      >회원가입</Link>
                    </>
                    : 
                    <>
                      <Link 
                        className="flex-1"
                        to={'/mypage'}
                      >마이페이지</Link>
                      <span 
                        className="flex-1 border-l border-[#5b87bd]"
                        onClick={onLogOut}
                      >로그아웃</span>
                    </>
                  }
                </nav>
                <nav className="flex flex-col px-4 text-2xl font-bold mt-5">
                  <Link to={'/movie'}>영화목록</Link>
                  <Link className="mt-2 pt-2 border-t" to={'/company'}>영화사목록</Link>
                  <Link className="mt-2 pt-2 border-t" to={'/people'}>영화인목록</Link>
                </nav>
              </div>

          </div>
      </header>
    </>
  )
}
