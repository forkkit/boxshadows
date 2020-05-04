import React from 'react';

export const ElementSectionIcon = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 4C1 3.44772 1.44772 3 2 3H14C14.5523 3 15 3.44772 15 4V12C15 12.5523 14.5523 13 14 13H2C1.44772 13 1 12.5523 1 12V4Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const ColorSectionIcon = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11.7733 5.28676L7.99999 1.51343L4.22666 5.28676C2.14666 7.36676 2.14666 10.7468 4.22666 12.8268C5.26666 13.8668 6.63332 14.3868 7.99999 14.3868C9.36666 14.3868 10.7333 13.8668 11.7733 12.8268C13.8533 10.7468 13.8533 7.36676 11.7733 5.28676ZM7.99999 13.0601C6.93332 13.0601 5.92666 12.6468 5.17332 11.8868C4.41332 11.1268 3.99999 10.1268 3.99999 9.0601C3.99999 7.99343 4.41332 6.98676 5.17332 6.23343L7.99999 3.40009V13.0601Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const ShadowSectionIcon = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0)'>
        <rect x='4.73334' y='3.7334' width='11.2667' height='12.1333' rx='1' fill='#9FAABC' />
        <rect x='2' y='1' width='11.2667' height='12.1333' rx='1' fill='currentColor' />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const TrashIcon = ({ onClick }: { onClick: React.MouseEventHandler<SVGSVGElement> }) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' onClick={onClick}>
      <path d='M2 4H3.33333H14' stroke='#BFC9D9' strokeWidth='1.33333' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M5.33331 3.99992V2.66659C5.33331 2.31296 5.47379 1.97382 5.72384 1.72378C5.97389 1.47373 6.31302 1.33325 6.66665 1.33325H9.33331C9.68694 1.33325 10.0261 1.47373 10.2761 1.72378C10.5262 1.97382 10.6666 2.31296 10.6666 2.66659V3.99992M12.6666 3.99992V13.3333C12.6666 13.6869 12.5262 14.026 12.2761 14.2761C12.0261 14.5261 11.6869 14.6666 11.3333 14.6666H4.66665C4.31302 14.6666 3.97389 14.5261 3.72384 14.2761C3.47379 14.026 3.33331 13.6869 3.33331 13.3333V3.99992H12.6666Z'
        stroke='#BFC9D9'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.66669 7.33325V11.3333'
        stroke='#BFC9D9'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.33331 7.33325V11.3333'
        stroke='#BFC9D9'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};