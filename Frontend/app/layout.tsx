import './styles/global.css';
import Sidebar from './components/Layout/Sidebar';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

export const metadata = {
  title: 'My Fleet App',
  description: 'Fleet management and route optimization',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          
          <div className="mainContent">
            <Sidebar />
            <main className="content">
              <Navbar />
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
