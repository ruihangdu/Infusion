import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import { insertWaitlistEntrySchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

const waitlistSchema = insertWaitlistEntrySchema.extend({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

const Waitlist: React.FC = () => {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    // Retrieve the selected influencer IDs from session storage
    const storedIds = sessionStorage.getItem("selectedInfluencers");
    if (storedIds) {
      setSelectedIds(JSON.parse(storedIds));
    }
  }, []);

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: WaitlistFormValues) => {
      return apiRequest("POST", "/api/waitlist", {
        ...data,
        selectedInfluencers: selectedIds.join(","),
      });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: WaitlistFormValues) => {
    mutation.mutate(data);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-primary p-6 text-white text-center">
          <div className="text-4xl mb-2">
            <Mail className="h-12 w-12 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <p className="text-blue-100">Our Vietnamese influencer platform is launching soon</p>
        </div>
        <div className="p-6">
          <p className="text-slate-600 mb-6">
            Thank you for your interest! Join our waitlist to be the first to know when we launch and get exclusive early access.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Submitting..." : "Join Waitlist"}
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center">
            <Button
              variant="link"
              className="text-primary hover:text-blue-700 text-sm font-medium"
              onClick={handleBackClick}
            >
              ← Back to influencer selection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
