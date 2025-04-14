import React from 'react';
import { SoftwareCard } from '../components/SoftwareSection';
import { Softwares } from '../../lib/projects';

export default function Page() {
  const softwares = Softwares;
  return (
    <div className="space-y-16">
      {Softwares.map((software) => (
        <SoftwareCard key={software.slug} software={software} />
      ))}
    </div>
  );
}
