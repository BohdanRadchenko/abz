import {lazy} from 'react';

export const AsyncHome = lazy(() =>
  import('./pages/HomePage'),
);
