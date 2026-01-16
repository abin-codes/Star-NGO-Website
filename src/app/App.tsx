import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AccessibilityPanel } from './components/AccessibilityPanel';
import { HomePage } from './pages/HomePage';
import { WhoWeArePage } from './pages/WhoWeArePage';
import { InitiativesPage } from './pages/InitiativesPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { MembershipPage } from './pages/MembershipPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'who-we-are':
        return <WhoWeArePage onNavigate={setCurrentPage} />;
      case 'initiatives':
        return <InitiativesPage onNavigate={setCurrentPage} />;
      case 'programs':
        return <ProgramsPage onNavigate={setCurrentPage} />;
      case 'leadership':
        return <LeadershipPage onNavigate={setCurrentPage} />;
      case 'membership':
        return <MembershipPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
      <AccessibilityPanel />
    </div>
  );
}

export default App;