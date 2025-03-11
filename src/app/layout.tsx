"use client"; // Mark as Client Component


import { Provider } from 'react-redux';
import { store } from '../store/store';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}