import React, { useMemo } from 'react';
import type { Task } from '../interfaces/Task';
import { ClipboardList, CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface StatisticsProps {
  tasks: Task[];
}

export const Statistics: React.FC<StatisticsProps> = ({ tasks }) => {
  const { t } = useLanguage();
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === 'Completed').length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [tasks]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-colors">
      <article className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4 transition-colors">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-500 rounded-lg">
          <ClipboardList className="w-8 h-8" />
        </div>
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t('totalTasks')}</p>
          <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{stats.total}</p>
        </div>
      </article>

      <article className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4 transition-colors">
        <div className="p-4 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-500 rounded-lg">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t('completed')}</p>
          <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{stats.completed}</p>
        </div>
      </article>

      <article className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4 transition-colors">
        <div className="p-4 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-500 rounded-lg">
          <Clock className="w-8 h-8" />
        </div>
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t('pending')}</p>
          <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{stats.pending}</p>
        </div>
      </article>
    </section>
  );
};
