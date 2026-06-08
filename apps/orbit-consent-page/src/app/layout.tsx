import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Receive email communications from UCB S.A.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
