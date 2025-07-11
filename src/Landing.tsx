import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-gray-900">
      <header className="px-6 py-4 shadow-md bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-boßld">QueueMaster</h1>
          <nav className="space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="outline">Login</Button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <section className="text-center space-y-6">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Real-Time Ticketing Queue System
          </motion.h2>
          <p className="text-lg text-gray-600">
            Manage high-traffic ticket sales fairly and reliably with QueueMaster.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button className="text-lg px-6 py-3 flex gap-2">
              <Sparkles size={20} /> Get Started
            </Button>
          </motion.div>
        </section>

        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Fair Queueing</h3>
              <p className="text-sm text-gray-600">
                Ensure first-come-first-served access with real-time queue logic.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Live Updates</h3>
              <p className="text-sm text-gray-600">
                Notify users instantly as their turn approaches using WebSockets.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Secure Reservations</h3>
              <p className="text-sm text-gray-600">
                Hold tickets with expiring reservations and payment integration.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} QueueMaster. All rights reserved.
      </footer>
    </div>
  );
}
