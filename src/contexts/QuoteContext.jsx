import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const QuoteContext = createContext(null);
const STORAGE_KEY = 'meriz-quote-v2';

export function QuoteProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = (product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + qty } : p));
      }
      return [...prev, { id: product.id, name: product.name, sku: product.sku, image: product.image, qty }];
    });
    setIsOpen(true);
  };

  const remove = (id) => setItems((prev) => prev.filter((p) => p.id !== id));
  const updateQty = (id, qty) => {
    if (qty <= 0) return remove(id);
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  };
  const clear = () => setItems([]);
  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  const value = { items, count, add, remove, updateQty, clear, isOpen, setIsOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) };
  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error('useQuote must be inside QuoteProvider');
  return ctx;
}
