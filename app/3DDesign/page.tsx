import React from 'react';
import { Softwares } from '../../lib/Projects';
import { SoftwareCard } from '../components/ProjectCards';

export default function Page() {
  const softwares = Softwares;
  return (
    <div className="space-y-16">
      {softwares.map((software) => {
        return <SoftwareCard key={software.slug} software={software} />;
      })}
    </div>
  );
}
