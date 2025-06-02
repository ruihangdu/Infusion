import React, { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/Landing";
import InfluencerSelection from "@/pages/InfluencerSelectionNew";
import Waitlist from "@/pages/Waitlist";
import NotFound from "@/pages/not-found";
import { LanguageContext } from "@/components/CampaignHeader";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/influencers" component={InfluencerSelection} />
      <Route path="/waitlist" component={Waitlist} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [lang, setLang] = useState<'en' | 'vi'>('en');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageContext.Provider>
  );
}

export default App;
