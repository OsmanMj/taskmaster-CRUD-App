import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import { Sidebar } from '../components/Sidebar';
import { Statistics } from '../components/Statistics';
import { TaskCard } from '../components/TaskCard';
import { TaskModal } from '../components/TaskModal';
import { ConfirmModal } from '../components/ConfirmModal';
import type { Task } from '../interfaces/Task';
import { Plus, Search } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLanguage } from '../contexts/LanguageContext';

export const Dashboard: React.FC = () => {
  const { tasks, addTask, updateTask, toggleTaskStatus, deleteTask } = useTasks();
  const { t } = useLanguage();
  
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenCreateModal = () => {
    setTaskToEdit(null);
    setIsTaskModalOpen(true);
  };

  const handleOpenEditModal = (task: Task) => {
    setTaskToEdit(task);
    setIsTaskModalOpen(true);
  };

  const handleOpenDeleteConfirm = (id: string) => {
    setTaskToDelete(id);
    setIsConfirmModalOpen(true);
  };

  const handleSaveTask = (task: Task) => {
    if (taskToEdit) {
      updateTask(task);
      toast.success(t('taskUpdated'));
    } else {
      addTask(task);
      toast.success(t('taskCreated'));
    }
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      deleteTask(taskToDelete);
      toast.success(t('taskDeleted'));
    }
  };

  const filteredTasks = tasks.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Navigation / Header */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-4 flex justify-between items-center z-10 transition-colors">
          <div className="relative w-96">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            />
          </div>
          <button 
            onClick={handleOpenCreateModal}
            className="flex items-center gap-2 bg-primary hover:bg-primaryHover text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
          >
            <Plus className="w-5 h-5" />
            {t('newTask')}
          </button>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2 transition-colors">{t('welcomeBack')}</h2>
              <p className="text-slate-500 dark:text-slate-400 transition-colors">{t('overview')}</p>
            </div>

            <Statistics tasks={tasks} />

            <section>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2 transition-colors">
                {t('allTasks')}
                <span className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs py-1 px-2 rounded-full">
                  {filteredTasks.length}
                </span>
              </h3>
              
              {filteredTasks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTasks.map(task => (
                    <TaskCard 
                      key={task.id} 
                      task={task} 
                      onEdit={handleOpenEditModal}
                      onDelete={handleOpenDeleteConfirm}
                      onToggleStatus={toggleTaskStatus}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 transition-colors">
                  <p className="text-slate-500 dark:text-slate-400 mb-4">{t('noTasks')}</p>
                  <button 
                    onClick={handleOpenCreateModal}
                    className="text-primary font-medium hover:underline"
                  >
                    {t('createFirstTask')}
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <TaskModal 
        isOpen={isTaskModalOpen} 
        onClose={() => setIsTaskModalOpen(false)} 
        onSave={handleSaveTask}
        taskToEdit={taskToEdit}
      />

      <ConfirmModal 
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title={t('deleteTaskTitle')}
        message={t('deleteTaskMessage')}
      />
    </div>
  );
};
