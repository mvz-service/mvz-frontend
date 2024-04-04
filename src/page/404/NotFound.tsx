import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center font-pretendard">
        <div>
            <dl className="text-center">
                <dt className="text-8xl font-bold md:text-9xl">404</dt>
                <dd>이 페이지는 없는 페이지 입니다.</dd>
            </dl>
            <Link to={'/'} className="bg-point-color text-white w-32 h-8 flex items-center justify-center mx-auto mt-3 rounded">돌아가기</Link>
        </div>
    </div>
  )
}
