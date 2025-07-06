import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            QuickNote Fire
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A blazing fast note-taking app designed to capture your thoughts instantly. 
            Simple, secure, and lightning quick.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⚡ Lightning Fast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Capture your thoughts instantly with our optimized interface designed for speed and efficiency.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔒 Secure & Private
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Your notes are encrypted and stored securely. Only you have access to your private thoughts.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📱 Cross-Platform
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access your notes from anywhere. Works seamlessly across all your devices and platforms.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-lg p-12 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to ignite your productivity?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands of users who have transformed their note-taking experience with QuickNote Fire.
          </p>
          <Button size="lg" className="px-12">
            Start Taking Notes Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
