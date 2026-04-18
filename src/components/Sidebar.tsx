import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Sidebar: React.FC = () => {
  const { t } = useLanguage();
  
  const baseLinkClass = "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors";
  const activeLinkClass = `${baseLinkClass} bg-primary text-white`;
  const inactiveLinkClass = `${baseLinkClass} text-slate-400 hover:text-white hover:bg-slate-800`;

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6 hidden md:block">
      <div className="flex items-center gap-3 mb-12">
        <CheckSquare className="w-8 h-8 text-primary" />
        <h1 className="text-2xl font-bold tracking-wide">TaskMaster</h1>
      </div>
      
      <nav className="space-y-4">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
        >
          <LayoutDashboard className="w-5 h-5" />
          {t('dashboard')}
        </NavLink>
        <NavLink 
          to="/settings" 
          className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
        >
          <Settings className="w-5 h-5" />
          {t('settings')}
        </NavLink>
      </nav>
    </aside>
  );
};
