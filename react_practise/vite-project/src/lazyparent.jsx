import React, { lazy,Suspense } from 'react';
const Lazyload = lazy(() => import('./components/lazyloadComponent'));

export function Lazyparent(props) {
  return (
    <>
        <h3>Lazy Parent</h3>
        <Suspense fallback= {<div>Please wait</div>}>
          <Lazyload></Lazyload>
        </Suspense>
    </>
  )
}
