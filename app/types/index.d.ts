declare interface IThemeState {
    value: string; 
}

declare interface IDesktopCard {
    title: string,
    icon: JSX.Element,
    content: string,
    classNameProp: string
}

declare interface IDesktopCardExtended extends IDesktopCard {
    totalLessons: number,
    completedLessons: number
}

declare interface IUser {
    _id?: string;
    _type?: string;
    name?: string | null;
    image?: string | null;
    email?: string | null;
}