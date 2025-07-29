import { Provider } from 'react-redux';
import { AppRouter } from './router';
import { store } from './store';
import { Suspense } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon } from 'lucide-react';

function ErrorAlert({ error }: FallbackProps) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div className='p-2'>
      <Alert variant='destructive'>
        <AlertCircleIcon />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>
          <p>{error.message}</p>
        </AlertDescription>
      </Alert>
    </div>
  );
}

export function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary FallbackComponent={ErrorAlert}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ErrorBoundary>
    </Suspense>
  );
}
