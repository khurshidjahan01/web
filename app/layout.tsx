import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Ahmed Faizul Haque Dhrubo | Robotics & AI Researcher',
  description: 'Robotics & AI Researcher | IoT Innovator | Machine Learning Enthusiast - Flagship Academic Portfolio',
  keywords: 'robotics, AI, machine learning, IoT, research, academia, publications',
  authors: [{ name: 'Ahmed Faizul Haque Dhrubo' }],
  openGraph: {
    title: 'Ahmed Faizul Haque Dhrubo | Robotics & AI Researcher',
    description: 'Robotics & AI Researcher | IoT Innovator | Machine Learning Enthusiast',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Faizul Haque Dhrubo | Robotics & AI Researcher',
    description: 'Robotics & AI Researcher | IoT Innovator | Machine Learning Enthusiast',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}