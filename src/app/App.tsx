import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ScrollToTop } from './components/ScrollToTop';
import { Navigation } from './components/Navigation';
import { SEO } from './components/SEO';
import { ChatbotWidget } from './components/ChatbotWidget';
import { ChatbotProvider } from './contexts/ChatbotContext';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { LearningPage } from './pages/LearningPage';
import { InnovationPage } from './pages/InnovationPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { CaseStudiesOverviewPage } from './pages/CaseStudiesOverviewPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { GrowMyBusinessPage } from './pages/GrowMyBusinessPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';

export default function App() {
  return (
    <HelmetProvider>
      <ChatbotProvider>
        <Router>
          <SEO />
          <ScrollToTop />
          <Navigation />
          <ChatbotWidget />
          <div className="min-h-screen bg-white">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/learning" element={<LearningPage />} />
              <Route path="/innovation" element={<InnovationPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/case-studies" element={<CaseStudiesOverviewPage />} />
              <Route path="/case-studies/:id" element={<CaseStudiesPage />} />
              <Route path="/grow-my-business" element={<GrowMyBusinessPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            </Routes>
          </div>
        </Router>
      </ChatbotProvider>
    </HelmetProvider>
  );
}