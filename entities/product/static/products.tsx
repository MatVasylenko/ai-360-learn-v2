import { ReactNode } from "react";
import { IProduct } from "../model/IProduct";
import { Activity, Code, Image, MessageCircleCode, Video } from "lucide-react";
import { ROUTES } from "@/app/config/routes";

interface IProductUI extends Pick<IProduct, 'title' | 'description'> {
  icon: ReactNode;
  color: string;
  link: string;
}

export const PRODUCTS:IProductUI[] = [
  {
    title: 'Chat AI',
    description: 'Спитай все що завгодно',
    icon: <MessageCircleCode />,
    color: 'text-green-700',
    link: ROUTES.cabinet.chat,
  },
  {
    title: 'Code Helper',
    description: 'Допомога при створення будь-якого коду на усіх мовах программування',
    icon: <Code />,
    color: 'text-red-700',
    link: ROUTES.cabinet.code,
  },
  {
    title: 'Image Generate',
    description: 'Шукаєшь картинки? - Зроби свої за допомогою AI',
    icon: <Image />,
    color: 'text-yellow-700',
    link: ROUTES.cabinet.image,
  },
  {
    title: 'Audio Generate',
    description: 'Сгенеруй музику своєї мрії',
    icon: <Activity />,
    color: 'text-blue-700',
    link: ROUTES.cabinet.audio,
  },
  {
    title: 'Video Generate',
    description: 'Сгенеруй відео своєї мрії',
    icon: <Video />,
    color: 'text-orange-700',
    link: ROUTES.cabinet.video,
  }
]