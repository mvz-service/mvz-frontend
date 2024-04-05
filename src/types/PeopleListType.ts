export interface PeopleListType {
    totCnt: number;
    peopleList: PeopleList[];
    source: string;
}
  
export interface PeopleList {
    peopleCd: string;
    peopleNm: string;
    peopleNmEn: string;
    repRoleNm: string;
    filmoNames: string;
}