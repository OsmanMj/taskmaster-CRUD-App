import React from 'react';
import type { Task } from '../interfaces/Task';
import { Edit2, Trash2, CheckCircle, Circle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, onToggleStatus }) => {
  const { t } = useLanguage();
  const isCompleted = task.status === 'Completed';

  const priorityColors = {
    High: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    Medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    Low: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  };

  return (
    <article className={`p-6 rounded-xl shadow-sm border transition-all duration-200 hover:shadow-md ${isCompleted ? 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'}`}>
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityColors[task.priority]}`}>
          {task.priority} {t('priority')}
        </span>
        <div className="flex gap-2">
          <button onClick={() => onEdit(task)} className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors" aria-label="Edit Task">
            <Edit2 className="w-4 h-4" />
          </button>
          <button onClick={() => onDelete(task.id)} className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors" aria-label="Delete Task">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <h3 className={`text-lg font-bold mb-2 ${isCompleted ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-800 dark:text-slate-200'}`}>
        {task.title}
      </h3>
      
      <p className={`text-sm mb-6 line-clamp-3 ${isCompleted ? 'text-slate-400 dark:text-slate-500' : 'text-slate-600 dark:text-slate-400'}`}>
        {task.description}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
          {task.category}
        </span>
        <button 
          onClick={() => onToggleStatus(task.id)}
          className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors ${isCompleted ? 'text-slate-500 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600' : 'text-primary dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50'}`}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="w-4 h-4" /> {t('completed')}
            </>
          ) : (
            <>
              <Circle className="w-4 h-4" /> {t('markComplete')}
            </>
          )}
        </button>
      </div>
    </article>
  );
};
