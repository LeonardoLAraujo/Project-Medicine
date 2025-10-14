import { IconTypes } from "ecv-component";
import { TemplateResult } from "lit";

export type StudyLesson = {
    type: string;
    title: string,
    icone: IconTypes;
    link: string;
}
export type ModuleLesson = {
    label: string;
    lessons: StudyLesson[];
}

export type StudyModule = {
    id: number;
    romanNumber: string;
    type: string;
    thumb: string;
    title: string;
    description: string;
    banner: PageBanner;
    moduleLessons: ModuleLesson[];
}

export type PageBanner = {
    background: string;
    title: string;
    description: TemplateResult | any;
}

export type StudyPage = {
    banner: PageBanner;
    studyCards: StudyModule[];
}