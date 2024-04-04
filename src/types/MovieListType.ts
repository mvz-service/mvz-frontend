export interface MovieListType {
    totCnt: number;
    source: string;
    movieList: MovieList[];
}
  
export interface MovieList {
    movieCd: string;
    movieNm: string;
    movieNmEn: string;
    prdtYear: string;
    openDt: string;
    typeNm: string;
    prdtStatNm: string;
    nationAlt: string;
    genreAlt: string;
    repNationNm: string;
    repGenreNm: string;
    directors: Director[];
    companys: any[];
}
  
export interface Director {
    peopleNm: string;
}