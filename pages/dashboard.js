'use client';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-black to-blue-900 text-white font-sans">
      <h1 className="text-4xl font-bold text-center mb-10">NEXRIDE</h1>
      
      <div className="grid grid-cols-2 gap-6">
        <DashboardCard
          title="Cars"
          icon="https://img.icons8.com/ios-filled/100/car--v1.png"
          href="/ride"
        />
        <DashboardCard
          title="Buses"
          icon="https://img.icons8.com/ios-filled/100/bus.png"
          href="/buses"
        />
        <DashboardCard
          title="Parcels"
          icon="https://img.icons8.com/ios-filled/100/shopping-bag.png"
          href="/parcels"
        />
        <DashboardCard
          title="Settings"
          icon="https://img.icons8.com/ios-filled/100/settings.png"
          href="/settings"
        />
      </div>

      {/* Are you a driver link */}
      <div className="mt-12 text-center text-sm text-gray-300">
        Are you a driver?{' '}
        <Link href="/driver" className="text-cyan-400 underline">
          Sign in here
        </Link>
      </div>
    </div>
  );
}

function DashboardCard({ title, icon, href }) {
  return (
    <Link href={href}>
      <div className="bg-white text-blue-900 p-6 rounded-xl text-center shadow-md hover:scale-105 transition-transform cursor-pointer">
        <img src={icon} alt={title} className="w-12 mx-auto mb-4" />
        <p className="font-bold">{title}</p>
      </div>
    </Link>
  );
            }
