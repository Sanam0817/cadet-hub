
import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  type: 'pdf' | 'doc' | 'video' | 'link';
  category: string;
  size?: string;
  downloadUrl?: string;
  externalUrl?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  type,
  category,
  size,
  downloadUrl,
  externalUrl,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden card-hover opacity-0 animate-fade-in animate-slide-up">
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${
              type === 'pdf' ? 'bg-red-100' :
              type === 'doc' ? 'bg-blue-100' :
              type === 'video' ? 'bg-purple-100' : 'bg-green-100'
            }`}>
              <FileText className={`h-6 w-6 ${
                type === 'pdf' ? 'text-red-600' :
                type === 'doc' ? 'text-blue-600' :
                type === 'video' ? 'text-purple-600' : 'text-green-600'
              }`} />
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-900">{title}</h3>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500">{type.toUpperCase()}</span>
                {size && (
                  <>
                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-300" />
                    <span className="text-xs text-gray-500">{size}</span>
                  </>
                )}
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 mt-2">
                {category}
              </span>
            </div>
          </div>
          <div>
            {downloadUrl && (
              <button 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Download"
              >
                <Download className="h-5 w-5 text-gray-500" />
              </button>
            )}
            {externalUrl && (
              <button 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Open link"
              >
                <ExternalLink className="h-5 w-5 text-gray-500" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
