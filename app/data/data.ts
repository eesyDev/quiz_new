import { TbFileCode, TbCalendarCode, TbLayoutDashboard, TbUser, TbFileText } from "react-icons/tb";

export const pagesSidebar = [
    {
        link: '/',
        name: 'Панель управления',
        icon: TbLayoutDashboard
    },
    {
        link: '/tests',
        name: 'Тесты',
        icon: TbFileCode
    },
    {
        link: '/',
        name: 'Задания',
        icon: TbCalendarCode
    },
    {
        link: '/',
        name: 'Профиль',
        icon: TbUser
    },
    {
        link: '/',
        name: 'Статьи',
        icon: TbFileText
    }
]