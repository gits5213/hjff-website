"use client";

import { useState, ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div>
      <div className="border-b-2 border-gray-200 mb-6 md:mb-8">
        <nav className="flex flex-wrap -mb-px gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-2.5 md:py-3 font-semibold text-sm md:text-base border-b-2 transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-[#065F46] text-[#065F46] bg-[#065F46]/5"
                  : "border-transparent text-[#6B7280] hover:text-[#065F46] hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="min-h-[300px] md:min-h-[400px]">
        {activeContent}
      </div>
    </div>
  );
}
