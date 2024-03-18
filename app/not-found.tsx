'use client';
import { Suspense } from 'react';
import '/public/css/page404.css';
import Loading from './modules/loading';
export default function Custom404() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="page404 h-screen">
        <h1 className="flex h-screen items-center justify-center text-5xl font-extrabold leading-none tracking-tight text-gray-900  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-5xl md:text-5xl lg:text-5xl dark:text-white ">
          <span className="text-stroke text-white">404 Page Not Found</span>
        </h1>
      </div>
    </Suspense>
  );
}
