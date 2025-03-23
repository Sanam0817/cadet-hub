
import React, { useState } from 'react';
import Layout from '../components/Layout';
import ResourceCard from '../components/Resources/ResourceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

const dummyResources = [
  {
    id: '1',
    title: 'NCC Cadet Handbook',
    type: 'pdf',
    category: 'Handbook',
    size: '12.5 MB',
    downloadUrl: '#',
  },
  {
    id: '2',
    title: 'Drill Manual',
    type: 'pdf',
    category: 'Training',
    size: '8.3 MB',
    downloadUrl: '#',
  },
  {
    id: '3',
    title: 'Weapon Training Guide',
    type: 'pdf',
    category: 'Training',
    size: '5.7 MB',
    downloadUrl: '#',
  },
  {
    id: '4',
    title: 'Map Reading Tutorial',
    type: 'video',
    category: 'Training',
    externalUrl: '#',
  },
  {
    id: '5',
    title: 'First Aid Procedures',
    type: 'doc',
    category: 'Health',
    size: '3.2 MB',
    downloadUrl: '#',
  },
  {
    id: '6',
    title: 'Annual Training Calendar',
    type: 'doc',
    category: 'Planning',
    size: '1.8 MB',
    downloadUrl: '#',
  },
  {
    id: '7',
    title: 'Leadership Development Course',
    type: 'link',
    category: 'Leadership',
    externalUrl: '#',
  },
  {
    id: '8',
    title: 'Physical Fitness Guidelines',
    type: 'pdf',
    category: 'Health',
    size: '4.5 MB',
    downloadUrl: '#',
  },
];

type ResourceType = 'all' | 'pdf' | 'doc' | 'video' | 'link';

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<ResourceType>('all');
  
  const filteredResources = dummyResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeTab === 'all' || resource.type === activeTab;
    
    return matchesSearch && matchesType;
  });

  return (
    <Layout>
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as ResourceType)}>
          <TabsList className="grid grid-cols-5 w-full max-w-md mx-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pdf">PDFs</TabsTrigger>
            <TabsTrigger value="doc">Docs</TabsTrigger>
            <TabsTrigger value="video">Videos</TabsTrigger>
            <TabsTrigger value="link">Links</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResources.map((resource, index) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  type={resource.type as any}
                  category={resource.category}
                  size={resource.size}
                  downloadUrl={resource.downloadUrl}
                  externalUrl={resource.externalUrl}
                />
              ))}
            </div>
          </TabsContent>
          
          {['pdf', 'doc', 'video', 'link'].map((type) => (
            <TabsContent key={type} value={type} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.filter(r => r.type === type).map((resource, index) => (
                  <ResourceCard
                    key={resource.id}
                    title={resource.title}
                    type={resource.type as any}
                    category={resource.category}
                    size={resource.size}
                    downloadUrl={resource.downloadUrl}
                    externalUrl={resource.externalUrl}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      {filteredResources.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">No resources found. Try adjusting your search or filters.</p>
        </div>
      )}
    </Layout>
  );
};

export default Resources;
