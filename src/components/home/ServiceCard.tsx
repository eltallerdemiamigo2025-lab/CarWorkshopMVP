import React from 'react';
import { CarFrontIcon, Battery, FuelIcon } from 'lucide-react';
import tireLogo from '../../assets/logos/tire.png';
import batteryLogo from '../../assets/logos/battery.png';
import fuelLogo from '../../assets/logos/aceiteyfiltros.png';
import brakesLogo from '../../assets/logos/freno.svg';
import mechanicLogo from '../../assets/logos/mecanica.png';

interface Props {
  title: string;
  description: string;
  icon: 'car' | 'battery' | 'fuel' | 'brakes' | 'mechanic';
}

function getHref(icon: Props['icon']): string {
  switch (icon) {
    case 'car':
      return '/neumaticos';
    case 'battery':
      return '/baterias';
    case 'fuel':
      return '/filtros';
    case 'brakes':
      return '/frenos';
    case 'mechanic':
      return '/mecanica';
    default:
      return '/';
  }
}

function getIcon(icon: Props['icon']): React.ReactNode {
  switch (icon) {
    case 'car':
        return (
          <img
            src={tireLogo.src}
            alt="Neumáticos"
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
        );
    case 'battery':
        return (
          <img
            src={batteryLogo.src}
            alt="Batería"
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
        );
    case 'fuel':
        return (
          <img
            src={fuelLogo.src}
            alt="Aceite y Filtros"
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
        );
    case 'brakes':
        return (
          <img
            src={brakesLogo.src}
            alt="Frenos"
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
        );
    case 'mechanic':
        return (
          <img
            src={mechanicLogo.src}
            alt="Mecánica"
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
        );
  }
}

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <a
      href={getHref(icon)}
      className="rounded-lg p-6 sm:p-8 bg-gray-50 transition-all duration-200 hover:bg-gray-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer block text-inherit no-underline"
      style={{ textDecoration: 'none' }}
    >
      <article className="mb-4 sm:mb-6 flex justify-center">{getIcon(icon)}</article>
      <span className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold block text-center">
        {title}
      </span>
      <p className="text-sm sm:text-base text-center mt-2 sm:mt-3 leading-relaxed text-gray-600">
        {description}
      </p>
    </a>
  );
}
