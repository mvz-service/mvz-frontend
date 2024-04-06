import axios from "axios";

export const slideGetAjax = async (moviecode : string)=>{

    return new Promise<string>((resolve, reject) => { // promise을 만들어 useQuery()에 전달합니다.
        axios.get(`/api/slide/poster/${moviecode}`, { responseType: 'blob' })
        .then(response => {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    resolve(reader.result);
                } else {
                    reject(new Error('이미지를 문자열로 변환하는 데 문제가 발생했습니다.'));
                }
            };
            reader.readAsDataURL(response.data);
        })
        .catch(error => {
            reject(new Error('포스터를 가져오는데 에러가 발생했습니다.'));
        });
    });

}