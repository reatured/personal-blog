import React from 'react';
import { SoftwareCard } from '../components/softwareSection';
import { Softwares } from '../../lib/Projects';

export default function Page() {
  const softwares = Softwares;
  return (
    <div className="space-y-5">
      {Softwares.map((software) => (
        <SoftwareCard key={software.slug} software={software} />
      ))}
    </div>
  );
}
