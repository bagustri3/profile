import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bagustri3.github.io"),
  title: {
    default: "Bagus Tri Prasetyo — Fullstack Developer & Software Engineer",
    template: "%s | Bagus Tri Prasetyo",
  },
  description:
    "Bagus Tri Prasetyo is a Fullstack Developer and Software Engineer in Bandung, Indonesia, building reliable, accessible, and thoughtful digital products.",
  keywords: [
    "Bagus Tri Prasetyo",
    "Fullstack Developer",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Bandung Developer",
    "Indonesia",
  ],
  authors: [
    { name: "Bagus Tri Prasetyo", url: "https://bagustri3.github.io/profile/" },
  ],
  creator: "Bagus Tri Prasetyo",
  alternates: { canonical: "/profile/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Bagus Tri Prasetyo — Fullstack Developer & Software Engineer",
    description:
      "Portfolio of Bagus Tri Prasetyo, a Fullstack Developer and Software Engineer building thoughtful digital experiences.",
    url: "https://bagustri3.github.io/profile/",
    siteName: "Bagus Tri Prasetyo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bagus Tri Prasetyo — Fullstack Developer & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bagus Tri Prasetyo — Fullstack Developer & Software Engineer",
    description:
      "Fullstack Developer and Software Engineer building thoughtful digital products.",
    images: ["/profile/images/og-image.png"],
  },
  icons: {
    icon: "/profile/icon.svg",
    apple: "/profile/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bagus Tri Prasetyo",
  url: "https://bagustri3.github.io/profile/",
  image: "https://bagustri3.github.io/profile/images/og-image.png",
  jobTitle: "Fullstack Developer & Software Engineer",
  email: "mailto:tribagus0510@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bandung",
    addressCountry: "ID",
  },
  sameAs: [
    "https://linkedin.com/in/bagustri3",
    "https://github.com/bagustri3",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="klCejhyn9kwQCDhoQN9CerHHLfqYhYWLAhodqgwQd5c"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
