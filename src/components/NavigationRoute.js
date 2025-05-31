'use client';
import { usePathname } from 'next/navigation';
import '../styles/navigationRoute.css';

function NavigationRoute() {
  const pathname = usePathname();

  const pathSegments = pathname.split('/').filter(Boolean);
  const capitalizedSegments = pathSegments.map(
    segment => segment.charAt(0).toUpperCase() + segment.slice(1)
  );

  const currentPage = capitalizedSegments[capitalizedSegments.length - 1] || "Home";

  return (
    <section className="route-changing">
      <div className="current-page">
        <p>{currentPage}</p>
      </div>
      <div className="page-path">
        <p>Home{capitalizedSegments.length > 0 ? ' / ' + capitalizedSegments.join(' / ') : ''}</p>
      </div>
    </section>
  );
}

export default NavigationRoute;
