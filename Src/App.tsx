import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { WorkOrderProvider } from "./contexts/WorkOrderContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { ConfirmationContainer } from "./components/UI/ConfirmationContainer";
import { FloatingBackupStatus } from "./components/UI/FloatingBackupStatus";
import { ChatAssistant } from "./components/AI/ChatAssistant";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/not-found";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { SecurityHeaders } from "./components/Security/SecurityHeaders";
import { AccessibilityEnhancements, SkipLinks } from "./components/Accessibility/AccessibilityEnhancements";
import { PerformanceMonitor } from "./components/Performance/PerformanceMonitor";
import { MetaTags, StructuredData } from "./components/SEO/MetaTags";
import "./services/errorReporting";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <SecurityHeaders />
      <QueryClientProvider client={queryClient}>
        <DndProvider backend={HTML5Backend}>
          <ThemeProvider>
            <WorkOrderProvider>
              <NotificationProvider>
              <TooltipProvider>
                <SkipLinks />
                <MetaTags />
                <StructuredData />
                <Toaster />
                <ConfirmationContainer />
                <FloatingBackupStatus />
                <AccessibilityEnhancements />
                <PerformanceMonitor />
                <ChatAssistant />
                <Router />
              </TooltipProvider>
              </NotificationProvider>
            </WorkOrderProvider>
          </ThemeProvider>
        </DndProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
