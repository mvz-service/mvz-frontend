export interface CompanyListType {
    totCnt: number;
    companyList: CompanyList[];
    source: string;
}

export interface CompanyList {
    companyCd: string;
    companyNm: string;
    companyNmEn: string;
    companyPartNames: string;
    ceoNm: string;
    filmoNames: string;
}