import React from 'react'
import { CarFrontIcon, Battery, FuelIcon } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  icon: "car" | "battery" | "fuel";
}

function getHref(icon: Props["icon"]): string {
  switch (icon) {
    case "car":
      return "/neumaticos";
    case "battery":
      return "/baterias";
    case "fuel":
      return "/filtros";
    default:
      return "/";
  }
}

function getIcon(icon: Props["icon"]): React.ReactNode {
  switch (icon) {
    case "car":
      return <CarFrontIcon className="w-12 h-12" />;
    case "battery":
      return <Battery className="w-12 h-12" />;
    case "fuel":
      return <FuelIcon className="w-12 h-12" />;
  }
}

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <a
      href={getHref(icon)}
      className="rounded-lg p-8 bg-gray-50 transition-all duration-200 shadow hover:shadow-lg hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer block text-inherit no-underline"
      style={{ textDecoration: 'none' }}
    >
      <article className="mb-4 flex justify-center">{getIcon(icon)}</article>
      <span className="mt-4 text-xl font-semibold block text-center">{title}</span>
      <p className="text-sm text-center mt-2">{description}</p>
    </a>
  );
}
