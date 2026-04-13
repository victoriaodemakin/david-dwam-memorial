import React, { useState, useEffect } from 'react';
import { X, Heart, User, MessageSquare, Loader, CheckCircle, AlertCircle, Edit2 } from 'lucide-react';
import { CreateTribute, FetchTribute, UpdateTribute } from '@/redux/thunk/auth';
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks/hook";
import { ErrorResponse, FetchTributeResponse } from '@/redux/types/auth';

const MemoryWall = () => {
		const router = useRouter();
		const dispatch = useAppDispatch();
			const toggleExpand = (id) => {
				setExpandedId(expandedId === id ? null : id);
			};
		
			const [expandedId, setExpandedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memories, setMemories] = useState([]);
  const [displayedMemories, setDisplayedMemories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [formData, setFormData] = useState({
    tribute: '',
    fullName: ''
  });
	const [editingMemory, setEditingMemory] = useState(null);
const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [likedMemories, setLikedMemories] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(null);

  const INITIAL_DISPLAY_COUNT = 4;

  // Fetch tributes on component mount
  useEffect(() => {
    fetchTributes();
  }, []);

  // Update displayed memories when showAll changes
  useEffect(() => {
    if (showAll) {
      setDisplayedMemories(memories);
    } else {
      setDisplayedMemories(memories.slice(0, INITIAL_DISPLAY_COUNT));
    }
  }, [memories, showAll]);


  // Fetch details from API
  const fetchTributes = async () => {
    try {
   	setIsLoading(true);
    setError(null);
    

      const result = await dispatch(
        FetchTribute()
      );

      const { meta, payload } = result;

      if (meta.requestStatus === "rejected") {
        const errorObj = payload as ErrorResponse;

         setError('Failed to load tributes. Please refresh the page.');
    console.error('Error fetching tributes:', errorObj);
        return;
      }

      if (meta.requestStatus === "fulfilled") {
        const res = payload as FetchTributeResponse[];
           setIsLoading(false);
					  const formattedMemories = res.map(item => ({
      id: item.id,
      dateCreated: new Date(item.dateCreated).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      tribute: item.tribute,
      fullName: item.fullName,
      images: item.images?.[0]?.filePath || null,
      likes: 0 // Add likes property
    }));
    setMemories(formattedMemories);
 
      }
    } catch (error) {
     setError('Failed to load tributes. Please refresh the page.');
    console.error('Error fetching tributes:', error);
    } finally {
      setIsLoading(false);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (formData.tribute.trim() && formData.fullName.trim()) {
    try {
      setIsSubmitting(true);
      setError(null);
      
      const result = await dispatch(
        CreateTribute({
          fullName: formData.fullName,
          tribute: formData.tribute,
        })
      );

      const { meta, payload } = result;

      if (meta.requestStatus === "rejected") {
        let err = payload as ErrorResponse;
        setError(err.errorMsg || 'Failed to submit tribute. Please try again.');
        return;
      }

      if (meta.requestStatus === "fulfilled") {
        let response = payload as FetchTributeResponse;
        const newMemory = {
          id: response.id,
          dateCreated: new Date(response.dateCreated).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          tribute: response.tribute,
          fullName: response.fullName,
          images: response.images?.[0]?.filePath || null,
          likes: 0
        };
        setMemories(prev => [newMemory, ...prev]);
        setFormData({ tribute: '', fullName: '' });
        setIsModalOpen(false);
        
        // Show success animation
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (err) {
      setError('Failed to submit tribute. Please try again.');
      console.error('Error creating tribute:', err);
    } finally {
      setIsSubmitting(false);
    }
  }
};
const handleEdit = (memory) => {
  setEditingMemory(memory);
  setFormData({
    tribute: memory.tribute,
    fullName: memory.fullName
  });
  setIsEditModalOpen(true);
};

const handleUpdateSubmit = async (e) => {
  e.preventDefault();
  if (formData.tribute.trim() && formData.fullName.trim() && editingMemory) {
    try {
      setIsSubmitting(true);
      setError(null);
      
      const result = await dispatch(
        UpdateTribute({
          id: editingMemory.id,
          fullName: formData.fullName,
          tribute: formData.tribute,
        })
      );

      const { meta, payload } = result;

      if (meta.requestStatus === "rejected") {
        let err = payload as ErrorResponse;
        setError(err.errorMsg || 'Failed to update tribute. Please try again.');
        return;
      }

      if (meta.requestStatus === "fulfilled") {
        let response = payload as FetchTributeResponse;
        
        // Update the memory in the list
        setMemories(prev => prev.map(m => 
          m.id === editingMemory.id ? {
            ...m,
            dateCreated: new Date(response.dateCreated).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }),
            tribute: response.tribute,
            fullName: response.fullName,
            images: response.images?.[0]?.filePath || null,
          } : m
        ));
        
        setFormData({ tribute: '', fullName: '' });
        setIsEditModalOpen(false);
        setEditingMemory(null);
        
        // Show success animation
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (err) {
      setError('Failed to update tribute. Please try again.');
      console.error('Error updating tribute:', err);
    } finally {
      setIsSubmitting(false);
    }
  }
};
  const handleLike = (id) => {
    if (likedMemories.has(id)) {
      setLikedMemories(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
      setMemories(prev => prev.map(m => 
        m.id === id ? { ...m, likes: m.likes - 1 } : m
      ));
    } else {
      setLikedMemories(prev => new Set([...prev, id]));
      setMemories(prev => prev.map(m => 
        m.id === id ? { ...m, likes: m.likes + 1 } : m
      ));
    }
  };

  return (
    <section id="leave-a-tribute" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-2 tracking-wide animate-fadeIn">
            Forever Remembered
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 animate-slideDown">
            A Wall of Remembrance
          </h2>
          <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded animate-expandWidth"></div>
          
          <p className="text-gray-700 italic max-w-2xl mx-auto mb-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            "To live in the hearts we leave behind is not to die."
            <br />
            <span className="text-sm">Please share your Photos and Memories about Olaseni Babatunde Olagbaju.</span>
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#deac6c] hover:bg-[#8a7160] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounceIn"
            style={{ animationDelay: '0.5s' }}
          >
            Leave a Tribute →
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 animate-shake">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-slideDown">
            <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3">
              <CheckCircle className="w-6 h-6 animate-spin-once" />
              <span className="font-semibold">Tribute submitted successfully! 🎉</span>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader className="w-12 h-12 text-[#deac6c] animate-spin mb-4" />
            <p className="text-gray-600">Loading tributes...</p>
          </div>
        ) : (
          <>
            {/* Memories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {displayedMemories.map((memory, index) => (
  <div
    key={memory.id}
              className="border-l-2 border-gray-200 pl-6 md:pl-10 py-4 animate-slide-in hover:border-[#fcbb68] transition-all duration-500"
    style={{ animationDelay: `${index * 100}ms` }}
  >
  <div className="flex justify-between items-start mb-2">
  <p className="text-sm text-gray-500 italic">{memory.dateCreated}</p>
  <div className="flex items-center gap-3">
    <button
      onClick={() => handleEdit(memory)}
      className="flex items-center gap-1 group"
    >
      <Edit2
        className="w-4 h-4 text-gray-400 hover:text-[#deac6c] transition-all duration-300"
      />
    </button>
    <button
      onClick={() => handleLike(memory.id)}
      className="flex items-center gap-1 group"
    >
      <Heart
        className={`w-5 h-5 transition-all duration-300 ${
          likedMemories.has(memory.id)
            ? 'fill-red-500 text-red-500 animate-heartBeat'
            : 'text-gray-400 hover:text-red-500'
        }`}
      />
      {memory.likes > 0 && (
        <span className="text-sm text-gray-600 animate-fadeIn">{memory.likes}</span>
      )}
    </button>
  </div>
</div>
    
  
		 <p className={`text-gray-700 text-base md:text-lg leading-relaxed italic transition-all duration-300 ${
                  expandedId === memory.id ? '' : 'line-clamp-3'
                }`}>
      {memory.tribute}
                </p>
								  {memory.tribute.length > 150 && (
                  <button
                    onClick={() => toggleExpand(memory.id)}
                    className="mt-3 text-sm text-gray-500 hover:text-[#fcbb68] transition-colors duration-300 underline"
                  >
                    {expandedId === memory.id ? 'Show less' : 'Read more'}
                  </button>
                )}
    <div className="flex items-center gap-2 mt-3">
      
      <p className="text-[#deac6c] font-serif text-lg ml-auto">
        {memory.fullName}
      </p>
    </div>
  </div>
))}

{/* Edit Modal */}
{isEditModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-modalSlideUp">
      <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
        <h3 className="text-2xl font-bold text-gray-800">Edit Memory</h3>
        <button
          onClick={() => {
            setIsEditModalOpen(false);
            setEditingMemory(null);
            setFormData({ tribute: '', fullName: '' });
            setError(null);
          }}
          className="text-gray-500 hover:text-gray-700 transition-colors hover:rotate-90 duration-300"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <form onSubmit={handleUpdateSubmit} className="p-6 space-y-6">
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 animate-shake">
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <div className="animate-slideRight" style={{ animationDelay: '0.1s' }}>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <User className="w-4 h-4" />
            Your Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fcbb68] focus:border-transparent outline-none transition-all"
            disabled={isSubmitting}
          />
        </div>

        <div className="animate-slideRight" style={{ animationDelay: '0.2s' }}>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <MessageSquare className="w-4 h-4" />
            Your Memory *
          </label>
          <textarea
            name="tribute"
            value={formData.tribute}
            onChange={handleInputChange}
            required
            rows={6}
            placeholder="Share your favorite memory, story, or message..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fcbb68] focus:border-transparent outline-none transition-all resize-none"
            disabled={isSubmitting}
          />
        </div>

        <div className="flex gap-4 pt-4 animate-slideRight" style={{ animationDelay: '0.3s' }}>
          <button
            type="button"
            onClick={() => {
              setIsEditModalOpen(false);
              setEditingMemory(null);
              setFormData({ tribute: '', fullName: '' });
              setError(null);
            }}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-6 py-3 bg-[#deac6c] hover:bg-[#8a7160] text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Updating...
              </>
            ) : (
              'Update Memory'
            )}
          </button>
        </div>
      </form>
    </div>
  </div>
)}
            </div>

            {/* See More Button */}
            {memories.length > INITIAL_DISPLAY_COUNT && (
              <div className="text-center animate-fadeIn">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-white hover:bg-[#fcbb68] text-[#deac6c] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl border-2 border-[#deac6c]"
                >
                  {showAll ? '← Show Less' : `See More Tributes (${memories.length - INITIAL_DISPLAY_COUNT} more) →`}
                </button>
              </div>
            )}

            {/* Empty State */}
            {memories.length === 0 && !isLoading && (
              <div className="text-center py-20 animate-fadeIn">
                <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No tributes yet. Be the first to share a memory.</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-modalSlideUp">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-2xl font-bold text-gray-800">Share a Memory</h3>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setFormData({ tribute: '', fullName: '' });
                  setError(null);
                }}
                className="text-gray-500 hover:text-gray-700 transition-colors hover:rotate-90 duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 animate-shake">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <div className="animate-slideRight" style={{ animationDelay: '0.1s' }}>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4" />
                  Your Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fcbb68] focus:border-transparent outline-none transition-all"
                  disabled={isSubmitting}
                />
              </div>

              <div className="animate-slideRight" style={{ animationDelay: '0.2s' }}>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4" />
                  Your Memory *
                </label>
                <textarea
                  name="tribute"
                  value={formData.tribute}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Share your favorite memory, story, or message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fcbb68] focus:border-transparent outline-none transition-all resize-none"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex gap-4 pt-4 animate-slideRight" style={{ animationDelay: '0.3s' }}>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setFormData({ tribute: '', fullName: '' });
                    setError(null);
                  }}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-[#deac6c] hover:bg-[#8a7160] text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Share Memory'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 120px;
            opacity: 1;
          }
        }

        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.3); }
          50% { transform: scale(1.1); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        @keyframes spin-once {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideRight {
          animation: slideRight 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-modalSlideUp {
          animation: modalSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-bounceIn {
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          opacity: 0;
        }

        .animate-expandWidth {
          animation: expandWidth 0.8s ease-out forwards;
          width: 0;
        }

        .animate-heartBeat {
          animation: heartBeat 0.3s ease-in-out;
        }

        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }

        .animate-spin-once {
          animation: spin-once 0.6s ease-in-out;
        }

        .divider-line {
          width: 120px;
        }
      `}</style>
    </section>
  );
};

export default MemoryWall;