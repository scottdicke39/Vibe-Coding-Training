import type { Metadata } from 'next';
import './globals.css';
import { ProgressSidebar } from '@/components/ProgressSidebar';

export const metadata: Metadata = {
  title: 'Vibe Coding Training',
  description: 'Learn to build real tools with AI. No coding required.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <div className="flex h-screen">
          <ProgressSidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
