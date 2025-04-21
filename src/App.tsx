import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import './App.css';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import DatabaseSchema from './pages/DatabaseSchema';

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <Router>
        <div className="min-h-screen bg-background">
          <nav className="border-b">
            <div className="container flex h-16 items-center px-4">
              <Link to="/" className="font-bold text-lg">ВетКлиника</Link>
              <div className="ml-auto flex gap-4">
                <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Главная
                </Link>
                <Link to="/database" className="text-sm font-medium transition-colors hover:text-primary">
                  База данных
                </Link>
              </div>
            </div>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/database" element={<DatabaseSchema />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
