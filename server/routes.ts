import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEntrySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add waitlist entry
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validationResult = insertWaitlistEntrySchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: "Invalid data provided",
          errors: validationResult.error.errors 
        });
      }
      
      const waitlistEntry = await storage.createWaitlistEntry({
        ...validationResult.data,
        createdAt: new Date().toISOString(),
      });
      
      return res.status(201).json(waitlistEntry);
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      return res.status(500).json({ message: "Failed to join waitlist" });
    }
  });

  // Get all waitlist entries (for admin purposes)
  app.get("/api/waitlist", async (req, res) => {
    try {
      const entries = await storage.getAllWaitlistEntries();
      return res.status(200).json(entries);
    } catch (error) {
      console.error("Error fetching waitlist entries:", error);
      return res.status(500).json({ message: "Failed to fetch waitlist entries" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
