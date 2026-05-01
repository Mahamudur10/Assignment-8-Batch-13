"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "Something went wrong!");
      setLoading(false);
      return;
    }

    toast.success("Welcome back! Signed in successfully!");
    router.push("/");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-[#0a0a0b] dark:via-[#0a0a0b] dark:to-[#0a0a0b] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-sm font-medium">
            📚 Book Borrow
          </span>
          <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-amber-600 dark:text-amber-400 font-semibold hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-gray-100 dark:border-white/8 bg-white dark:bg-white/[0.03] shadow-xl shadow-black/5 dark:shadow-none p-8">
          <form onSubmit={onSubmit} className="space-y-4">

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 dark:text-gray-600 select-none">
                  ✉️
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] text-sm text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/60 transition-all duration-200"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 dark:text-gray-600 select-none">
                  🔒
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] text-sm text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/60 transition-all duration-200"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold tracking-wide hover:scale-[1.02] hover:shadow-xl hover:shadow-black/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Signing In...
                </span>
              ) : (
                "Login →"
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-gray-100 dark:bg-white/8" />
              <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">or continue with</span>
              <div className="h-px flex-1 bg-gray-100 dark:bg-white/8" />
            </div>

            {/* Google */}
            <button
              type="button"
              onClick={() => authClient.signIn.social({ provider: "google", callbackURL: "/" })}
              className="w-full py-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200 flex items-center justify-center gap-3"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}