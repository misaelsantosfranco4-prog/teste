import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Motos from "./pages/Motos";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-grow">
              <Switch>
                <Route path={"/"} component={Home} />
                <Route path={"/motos"} component={Motos} />
                <Route path={"/404"} component={NotFound} />
                {/* Final fallback route */}
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
