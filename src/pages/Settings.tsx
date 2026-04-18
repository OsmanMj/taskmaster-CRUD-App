import { Sidebar } from '../components/Sidebar';
import { Moon, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../translations';

export const Settings = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors">
      <Sidebar />
      <main className="flex-1 overflow-auto p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">{t('settingsTitle')}</h2>
          
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 transition-colors">
            
            {/* Appearance Settings */}
            <div className="p-6 flex items-start gap-4">
              <div className="p-3 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 rounded-lg">
                <Moon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{t('appearance')}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{t('appearanceDesc')}</p>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="theme" 
                      className="accent-primary" 
                      checked={theme === 'light'} 
                      onChange={() => setTheme('light')} 
                    />
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{t('light')}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="theme" 
                      className="accent-primary" 
                      checked={theme === 'dark'} 
                      onChange={() => setTheme('dark')} 
                    />
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{t('dark')}</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Language Settings */}
            <div className="p-6 flex items-start gap-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-500 rounded-lg">
                <Globe className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{t('language')}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{t('languageDesc')}</p>
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                >
                  <option value="en">{t('english')}</option>
                  <option value="tr">{t('turkish')}</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};
