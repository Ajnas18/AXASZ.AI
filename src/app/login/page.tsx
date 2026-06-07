import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Lock } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Logo width={48} height={48} />
        </div>
        <h2 className="mt-6 text-center text-3xl font-black text-white">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-trading-text-muted">
          Or{' '}
          <Link href="#" className="font-medium text-trading-green hover:text-trading-green/80 transition-colors">
            start your 14-day free trial
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-trading-card py-8 px-4 shadow-2xl shadow-black/50 sm:rounded-2xl sm:px-10 border border-trading-border">
          <form className="space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-trading-text">
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-trading-text-muted" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-3 border border-trading-border rounded-xl bg-[#0A0A0A] text-white placeholder-trading-text-muted focus:outline-none focus:ring-2 focus:ring-trading-green focus:border-transparent sm:text-sm transition-shadow"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-trading-text">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-trading-text-muted" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-3 border border-trading-border rounded-xl bg-[#0A0A0A] text-white placeholder-trading-text-muted focus:outline-none focus:ring-2 focus:ring-trading-green focus:border-transparent sm:text-sm transition-shadow"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-trading-border bg-[#0A0A0A] text-trading-green focus:ring-trading-green focus:ring-offset-[#121212]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-trading-text-muted">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="#" className="font-medium text-trading-green hover:text-trading-green/80 transition-colors">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-[0_0_15px_rgba(0,200,83,0.2)] text-sm font-bold text-white bg-trading-green hover:bg-trading-green/90 hover:shadow-[0_0_25px_rgba(0,200,83,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trading-green transition-all"
              >
                Sign in
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
