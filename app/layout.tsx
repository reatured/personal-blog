import '#/styles/globals.css';
import { AddressBar } from '#/ui/address-bar';
import Byline from '#/ui/byline';
import { GlobalNav } from '#/ui/global-nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Lingyi Zhou Personal Portfolior',
    template: '%s | Next.js App Router',
  },
  metadataBase: new URL(
    'https://personal-blog-git-main-reatureds-projects.vercel.app/',
  ),
  description:
    'A portfolio of all the work that I have done and an update of what I am doing right now.',
  openGraph: {
    title: 'Lingyi Zhou Personal Portfolio',
    description:
      'A portfolio of all the work that I have done and an update of what I am doing right now.',
    images: [`/api/og?title=Next.js App Router`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] pb-36">
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
            <Byline />
          </div>
        </div>
      </body>
    </html>
  );
}
