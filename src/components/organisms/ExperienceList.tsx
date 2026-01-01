'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { experiences, allSectors, allTechnologies, technologyLabels, Sector, Technology } from '@/lib/experiences';
import { ExperienceCard } from '@/components/molecules';
import { FilterChip } from '@/components/molecules';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function ExperienceList() {
  const t = useTranslations('experiences');
  
  const [selectedSectors, setSelectedSectors] = useState<Sector[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

  const sectorLabels: Record<Sector, string> = {
    'healthcare': t('sectors.healthcare'),
    'finance': t('sectors.finance'),
    'consumer-goods': t('sectors.consumer-goods'),
    'energy': t('sectors.energy'),
    'real-estate': t('sectors.real-estate'),
    'logistics': t('sectors.logistics'),
    'technology': t('sectors.technology'),
  };

  const filteredExperiences = useMemo(() => {
    return experiences.filter((exp) => {
      if (exp.hide) return false;
      const matchesSector = selectedSectors.length === 0 || selectedSectors.includes(exp.sector);
      const matchesTech = selectedTechnologies.length === 0 || 
        selectedTechnologies.some((tech) => exp.technologies.includes(tech));
      return matchesSector && matchesTech;
    });
  }, [selectedSectors, selectedTechnologies]);

  const toggleSector = (sector: Sector) => {
    setSelectedSectors((prev) =>
      prev.includes(sector)
        ? prev.filter((s) => s !== sector)
        : [...prev, sector]
    );
  };

  const toggleTechnology = (tech: Technology) => {
    setSelectedTechnologies((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedSectors([]);
    setSelectedTechnologies([]);
  };

  const hasActiveFilters = selectedSectors.length > 0 || selectedTechnologies.length > 0;

  return (
    <div className="space-y-8">
      {/* Sector Filters */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">
            {t('filterBySector')}
          </h3>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="h-7 text-xs gap-1"
            >
              <X className="h-3 w-3" />
              {t('clearFilters')}
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {allSectors.map((sector) => (
            <FilterChip
              key={sector}
              label={sectorLabels[sector]}
              isActive={selectedSectors.includes(sector)}
              onClick={() => toggleSector(sector)}
            />
          ))}
        </div>
      </div>

      {/* Technology Filters */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">
          {t('filterByTech')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {allTechnologies.map((tech) => (
            <FilterChip
              key={tech}
              label={technologyLabels[tech]}
              isActive={selectedTechnologies.includes(tech)}
              onClick={() => toggleTechnology(tech)}
            />
          ))}
        </div>
      </div>

      {/* Experience Cards */}
      <div className="space-y-4">
        {filteredExperiences.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            {t('noResults')}
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredExperiences.map((experience) => (
              <ExperienceCard
                key={experience.slug}
                experience={experience}
                variant="full"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
