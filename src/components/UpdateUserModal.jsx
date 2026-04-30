"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export function UpdateUserModal({ user, onUpdate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await authClient.updateUser({
        name: name,
        image: image,
      });
      
      toast.success("Profile updated successfully!");
      setIsOpen(false);
      if (onUpdate) onUpdate(); // Refresh the page data
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Update Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex-1 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold text-center hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 transition-all duration-200"
      >
        ✏️ Update Profile
      </button>

      {/* Modal - Simple */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white dark:bg-[#1a1a1b] rounded-2xl w-full max-w-md mx-4 p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Update Profile
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0a0a0b] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0a0a0b] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black font-medium hover:scale-[1.02] disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}