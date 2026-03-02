import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import ToolDeepDive from "./pages/ToolDeepDive";
import Concepts from "./pages/Concepts";
import Recipes from "./pages/Recipes";
import Ideas from "./pages/Ideas";
import Playground from "./pages/Playground";
import Badges from "./pages/Badges";
import HowIBuiltThis from "./pages/HowIBuiltThis";
import TechStack from "./pages/TechStack";
import Admin from "./pages/Admin";
import CodingTools from "./pages/CodingTools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tools/:toolId" element={<ToolDeepDive />} />
            <Route path="/concepts" element={<Concepts />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/how-i-built-this" element={<HowIBuiltThis />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/coding-tools" element={<CodingTools />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
