declare interface ThemeState {
    value: string; 
}

declare interface DesktopCard {
    title: string,
    icon: JSX.Element,
    content: string,
    classNameProp: string
}

declare interface DesktopCardExtended extends DesktopCard {
    totalLessons: number,
    completedLessons: number
}