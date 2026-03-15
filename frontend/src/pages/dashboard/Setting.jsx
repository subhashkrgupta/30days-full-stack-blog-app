import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Shield, 
  Camera, 
  Mail, 
  ChevronRight,
  LogOut
} from 'lucide-react';

const Setting = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: <User size={20} /> },
    { id: 'security', name: 'Security', icon: <Lock size={20} /> },
    { id: 'notifications', name: 'Notifications', icon: <Bell size={20} /> },
    { id: 'privacy', name: 'Privacy', icon: <Shield size={20} /> },
  ];

  return (
    // Updated container background for dark mode
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-10 mt-20 transition-colors duration-300">
      
      {/* Page Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Account Settings</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your personal information and preferences.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 flex flex-col gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-100 dark:shadow-none"
                    : "text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
            <hr className="my-4 border-gray-200 dark:border-gray-800" />
            <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all">
              <LogOut size={20} />
              Sign Out
            </button>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
              
              {/* Profile Section */}
              {activeTab === 'profile' && (
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Personal Information</h2>
                  
                  {/* Avatar Upload */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative group">
                      <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-3xl font-bold overflow-hidden">
                        JD
                      </div>
                      <button className="absolute -bottom-2 -right-2 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-all">
                        <Camera size={16} />
                      </button>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Profile Picture</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">JPG, GIF or PNG. Max size 2MB</p>
                    </div>
                  </div>

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition-all"
                      />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
                      <textarea 
                        rows="4"
                        placeholder="Tell us about yourself..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition-all"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2.5 rounded-xl font-semibold transition-all shadow-lg dark:shadow-none active:scale-95">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* Security Section */}
              {activeTab === 'security' && (
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Security Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-100 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-all">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-lg"><Lock size={20} /></div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Change Password</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Update your account password</p>
                        </div>
                      </div>
                      <ChevronRight size={20} className="text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-100 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-all">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg"><Mail size={20} /></div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security</p>
                        </div>
                      </div>
                      {/* Custom Toggle */}
                      <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative cursor-pointer">
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white dark:bg-gray-300 rounded-full shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Setting;