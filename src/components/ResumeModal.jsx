import React, { useEffect } from 'react';

const resumeOptions = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Full-stack web development resume',
    icon: '🌐',
    path: '/resumes/web-development-resume.pdf'
  },
  {
    id: 'ai-ml',
    title: 'AI-ML Engineer',
    description: 'Machine Learning & AI resume',
    icon: '🤖',
    path: '/resumes/ai-ml-resume.pdf'
  },
  {
    id: 'software',
    title: 'Software Engineer',
    description: 'Software engineering resume',
    icon: '💻',
    path: '/resumes/software-engineer-resume.pdf'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Data science & analytics resume',
    icon: '📊',
    path: '/resumes/data-science-resume.pdf'
  }
];

const ResumeModal = React.memo(({ isOpen, onClose }) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDownload = (resume) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = resume.path;
    link.download = `${resume.id}-resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Close modal after download
    setTimeout(() => onClose(), 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div 
        className="relative z-10 bg-black-200 border border-white/10 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Choose Your Resume
          </h2>
          <p className="text-white-50 text-lg">
            Select the resume version that matches your interest
          </p>
        </div>

        {/* Resume Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resumeOptions.map((resume) => (
            <button
              key={resume.id}
              onClick={() => handleDownload(resume)}
              className="group relative p-6 rounded-xl bg-black-100 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 text-left"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {resume.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {resume.title}
                </h3>
                
                {/* Description */}
                <p className="text-white-50 text-sm mb-4">
                  {resume.description}
                </p>
                
                {/* Download indicator */}
                <div className="flex items-center text-blue-400 text-sm font-medium">
                  <svg 
                    className="w-4 h-4 mr-2" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Info Text */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-white-50 text-sm text-center">
            💡 Tip: Each resume is tailored for specific job roles and industries
          </p>
        </div>
      </div>
    </div>
  );
});

ResumeModal.displayName = 'ResumeModal';

export default ResumeModal;
