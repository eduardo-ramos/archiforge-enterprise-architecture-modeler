import React from 'react';
import { ArchiElementType } from '../types';

const icons: Record<ArchiElementType, React.ReactNode> = {
  [ArchiElementType.APPLICATION_COMPONENT]: (
    <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="90" height="60" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2" />
      <rect x="15" y="15" width="20" height="10" fill="#ffffff" stroke="#6b9fcf" strokeWidth="1" />
      <rect x="15" y="30" width="20" height="10" fill="#ffffff" stroke="#6b9fcf" strokeWidth="1" />
    </svg>
  ),
  [ArchiElementType.BUSINESS_PROCESS]: (
    <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
      <path d="M 5,35 A 15,15 0 0,1 20,20 H 80 A 15,15 0 0,1 95,35 A 15,15 0 0,1 80,50 H 20 A 15,15 0 0,1 5,35 Z" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2"/>
    </svg>
  ),
  [ArchiElementType.BUSINESS_ACTOR]: (
     <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="25" r="10" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2"/>
        <line x1="50" y1="35" x2="50" y2="50" stroke="#6b9fcf" strokeWidth="2"/>
        <line x1="35" y1="45" x2="65" y2="45" stroke="#6b9fcf" strokeWidth="2"/>
        <line x1="50" y1="50" x2="40" y2="65" stroke="#6b9fcf" strokeWidth="2"/>
        <line x1="50" y1="50" x2="60" y2="65" stroke="#6b9fcf" strokeWidth="2"/>
    </svg>
  ),
  [ArchiElementType.BUSINESS_ROLE]: (
     <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
        <path d="M 50 15 A 20 20 0 0 0 30 35 L 30 55 L 70 55 L 70 35 A 20 20 0 0 0 50 15 Z" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2" />
        <circle cx="50" cy="30" r="10" fill="none" stroke="#6b9fcf" strokeWidth="2" />
    </svg>
  ),
  [ArchiElementType.BUSINESS_SERVICE]: (
      <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 35 A 20 20 0 0 1 30 15 H 90 V 55 H 30 A 20 20 0 0 1 10 35 Z" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2"/>
    </svg>
  ),
  [ArchiElementType.APPLICATION_SERVICE]: (
      <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 35 A 20 20 0 0 1 30 15 H 90 V 55 H 30 A 20 20 0 0 1 10 35 Z" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2"/>
    </svg>
  ),
  [ArchiElementType.APPLICATION_FUNCTION]: (
     <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="90" height="60" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2" />
        <path d="M 80 5 L 95 15 V 65 L 80 55 Z" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2"/>
    </svg>
  ),
  [ArchiElementType.NODE]: (
    <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 L90 10 L90 50 L10 50 Z M10 10 L20 2 L100 2 L90 10 M20 2 L20 42 M100 2 L100 42 M20 42 L100 42 L90 50" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2"/>
    </svg>
  ),
  [ArchiElementType.TECHNOLOGY_SERVICE]: (
      <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 35 A 20 20 0 0 1 30 15 H 90 V 55 H 30 A 20 20 0 0 1 10 35 Z" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2"/>
    </svg>
  ),
  [ArchiElementType.STAKEHOLDER]: (
    <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10 L80 10 L80 60 L20 60Z M40 10 L60 10 L50 25Z" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2"/>
        <circle cx="50" cy="20" r="8" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2"/>
        <line x1="50" y1="28" x2="50" y2="45" stroke="#6b9fcf" strokeWidth="2"/>
        <line x1="35" y1="35" x2="65" y2="35" stroke="#6b9fcf" strokeWidth="2"/>
        <line x1="50" y1="45" x2="40" y2="60" stroke="#6b9fcf" strokeWidth="2"/>
        <line x1="50" y1="45" x2="60" y2="60" stroke="#6b9fcf" strokeWidth="2"/>
    </svg>
  ),
  [ArchiElementType.DRIVER]: (
     <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20 L80 20 L80 50 L20 50 Z M50 20 L70 35 L50 50 L30 35 Z" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2"/>
    </svg>
  ),
  [ArchiElementType.GOAL]: (
    <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="35" r="25" fill="#cce5ff" stroke="#6b9fcf" strokeWidth="2"/>
        <circle cx="50" cy="35" r="15" fill="none" stroke="#6b9fcf" strokeWidth="2"/>
        <circle cx="50" cy="35" r="5" fill="#6b9fcf" />
    </svg>
  )
};

export const getArchiIcon = (type: ArchiElementType): React.ReactNode => {
    return icons[type] || <div className="w-full h-full bg-gray-300 rounded-sm">?</div>;
}