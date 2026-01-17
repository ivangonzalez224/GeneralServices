/**
 * Navigation Configuration
 * Definición centralizada de rutas y elementos de navegación
 */

import { TbHome, TbInfoSquareRounded } from "react-icons/tb";
import { GrContact, GrProjects } from "react-icons/gr";

export const NAV_LINKS = [
  {
    id: 'inicio',
    label: 'Inicio',
    href: '#inicio',
    icon: TbHome,
  },
  {
    id: 'servicios',
    label: 'Servicios',
    href: '#servicios',
    icon: GrProjects,
  },
  {
    id: 'contacto',
    label: 'Contacto',
    href: '#contacto',
    icon: GrContact,
  },
  {
    id: 'info',
    label: 'Información',
    href: '#info',
    icon: TbInfoSquareRounded,
  },
];

export const LOGO_ALT = 'Logo Musuq Technologies';
