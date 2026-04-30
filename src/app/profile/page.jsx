"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { UpdateUserModal } from "@/components/UpdateUserModal";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.push("/signin");
    }
  }, [user, isPending, router]);

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("Signed out successfully!");
    router.push("/");
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a0b] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <svg className="animate-spin w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <p className="text-sm text-gray-400 dark:text-gray-500">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-[#0a0a0b] dark:via-[#0a0a0b] dark:to-[#0a0a0b] px-4 py-16">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-sm font-medium">
            📚 Book Borrow
          </span>
          <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
            My Profile
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Manage your account information
          </p>
        </div>

        {/* Profile Card */}
        <div className="rounded-3xl border border-gray-100 dark:border-white/8 bg-white dark:bg-white/[0.03] shadow-xl shadow-black/5 dark:shadow-none p-8">

          {/* Avatar + Name */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-gray-100 dark:border-white/8">
            <div className="shrink-0">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  width={96}
                  height={96}
                  className="rounded-2xl object-cover border border-gray-200 dark:border-white/10"
                  unoptimized
                />
              ) : (
                <div className="w-24 h-24 rounded-2xl bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center text-amber-700 dark:text-amber-400 text-4xl font-black">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {user.email}
              </p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium">
                ✓ Active Member
              </span>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-gray-100 dark:border-white/8">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Full Name
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {user.name}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Email Address
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {user.email}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Member Since
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Account Status
              </p>
              <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                Active
              </p>
            </div>
          </div>

          {/* Actions - Updated to use your modal */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <UpdateUserModal 
              user={user}
              onUpdate={() => window.location.reload()}
            />
            <button
              onClick={handleSignOut}
              className="flex-1 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/all-books"
            className="rounded-2xl border border-gray-100 dark:border-white/8 bg-white dark:bg-white/[0.03] p-5 hover:shadow-lg hover:shadow-black/5 transition-all duration-200 group"
          >
            <p className="text-2xl mb-2">📚</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              Browse Books
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
              Explore our collection
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-2xl border border-gray-100 dark:border-white/8 bg-white dark:bg-white/[0.03] p-5 hover:shadow-lg hover:shadow-black/5 transition-all duration-200 group"
          >
            <p className="text-2xl mb-2">🏠</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              Go Home
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
              Back to homepage
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}