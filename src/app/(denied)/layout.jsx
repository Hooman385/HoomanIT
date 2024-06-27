import "../globals.css";
export const metadata = {
  title: "عدم دسترسی",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
