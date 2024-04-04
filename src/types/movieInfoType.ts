export interface MovieInfoType {
    movieInfo: MovieInfo;
    source: string;
}
  
export interface MovieInfo {
    movieCd: string;
    movieNm: string;
    movieNmEn: string;
    movieNmOg: string;
    showTm: string;
    prdtYear: string;
    openDt: string;
    prdtStatNm: string;
    typeNm: string;
    nations: Nation[];
    genres: Genre[];
    directors: Director[];
    actors: Actor[];
    showTypes: ShowType[];
    companys: Company[];
    audits: Audit[];
    staffs: Staff[];
}
  
export interface Staff {
    peopleNm: string;
    peopleNmEn: string;
    staffRoleNm: string;
}
  
export interface Audit {
    auditNo: string;
    watchGradeNm: string;
}
  
export interface Company {
    companyCd: string;
    companyNm: string;
    companyNmEn: string;
    companyPartNm: string;
}
  
export interface ShowType {
    showTypeGroupNm: string;
    showTypeNm: string;
}
  
export interface Actor {
    peopleNm: string;
    peopleNmEn: string;
    cast: string;
    castEn: string;
}
  
export interface Director {
    peopleNm: string;
    peopleNmEn: string;
}
  
export interface Genre {
    genreNm: string;
}

export interface Nation {
    nationNm: string;
}