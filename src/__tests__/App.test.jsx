import { render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { AppProvider } from '../context/AppContext';
import { useApp } from '../context/useApp';

global.fetch = vi.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve([]) }));

test('AppContext provides full CRUD methods', () => {
  let contextValues;
  function TestComponent() {
    contextValues = useApp();
    return <div>Test</div>;
  }
  render(<AppProvider><TestComponent /></AppProvider>);
  
  expect(contextValues.addLend).toBeDefined();
  expect(contextValues.updateLend).toBeDefined();
  expect(contextValues.deleteLend).toBeDefined();
});
