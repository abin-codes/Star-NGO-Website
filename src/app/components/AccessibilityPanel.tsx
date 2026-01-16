import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Eye, X, Plus, Minus, Sun } from 'lucide-react';

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      const newSize = fontSize - 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#C4A661] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Eye className="w-6 h-6" />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 p-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#121212]">Accessibility</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Font Size Control */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#121212] mb-3">
                Font Size
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={decreaseFontSize}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                  disabled={fontSize <= 80}
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="flex-1 text-center font-medium text-[#121212]">
                  {fontSize}%
                </span>
                <button
                  onClick={increaseFontSize}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                  disabled={fontSize >= 150}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div>
              <label className="block text-sm font-semibold text-[#121212] mb-3">
                High Contrast Mode
              </label>
              <button
                onClick={toggleHighContrast}
                className={`w-full p-4 rounded-xl flex items-center gap-3 transition-all ${
                  highContrast
                    ? 'bg-[#C4A661] text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-[#121212]'
                }`}
              >
                <Sun className="w-5 h-5" />
                <span className="font-medium">
                  {highContrast ? 'Enabled' : 'Disabled'}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
