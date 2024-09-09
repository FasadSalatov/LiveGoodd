import { IAssignment } from '@/entities/Assignment/types/assignment';
import TelegramIcon from '@/shared/assets/svg/Assignment/telegram.svg';

export const mockAssignmentList: IAssignment[] = [
  {
    id: 2,
    icon: TelegramIcon,
    isDone: false,
    reward: '50',
    text: 'Текст описание задания Текст описание задания Текст описание задания Текст описание задания Текст описание задания',
    title: 'Подписаться на TELEGRAM',
  },
  {
    id: 3,
    icon: TelegramIcon,
    isDone: false,
    reward: '50',
    text: 'Текст описание задания Текст описание задания Текст описание задания Текст описание задания Текст описание задания',
    title: 'Подписаться на TELEGRAM',
  },
  {
    id: 4,
    icon: TelegramIcon,
    isDone: true,
    reward: '50',
    text: 'Текст описание задания Текст описание задания Текст описание задания Текст описание задания Текст описание задания',
    title: 'Подписаться на TELEGRAM',
  },
  {
    id: 5,
    icon: TelegramIcon,
    isDone: true,
    reward: '50',
    text: 'Текст описание задания Текст описание задания Текст описание задания Текст описание задания Текст описание задания',
    title: 'Подписаться на TELEGRAM',
  },
  {
    id: 6,
    icon: TelegramIcon,
    isDone: true,
    reward: '50',
    text: 'Текст описание задания Текст описание задания Текст описание задания Текст описание задания Текст описание задания',
    title: 'Подписаться на TELEGRAM',
  },
];
