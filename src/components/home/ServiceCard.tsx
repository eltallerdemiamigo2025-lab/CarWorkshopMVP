import React from 'react'
import { CarFrontIcon, Battery, FuelIcon } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  icon: "car" | "battery" | "fuel";
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
    <section className="rounded-lg p-8 bg-gray-50">
      <article className="mb-4">
        {getIcon(icon)}
      </article>

      <span className="mt-4 text-xl font-semibold">{title}</span>
      <p className="text-sm">
        {description}
      </p>
    </section>
  )
}
