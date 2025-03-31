import Link from "next/link"
import { ArrowRight, Instagram, Facebook, Twitter, Linkedin, Download  } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Video Background */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/hero_video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-fugaz tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-white">
              Save money. Reduce waste. Make a difference.
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button disabled size="lg" className="bg-primary text-primary-foreground">
                Download App <Download className="mr-2 h-4 w-4" /> 
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:text-primary"
              >
                Register Interest <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-white/75 font-fugaz text-sm mt-4">Coming soon to iOS and Android</p>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-fugaz tracking-tighter sm:text-4xl md:text-5xl">
                  Preventing Food Waste Together
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Muafar connects consumers with local businesses to rescue surplus food that would otherwise go to
                  waste. Save up to 70% while helping the planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-fugaz tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple steps to reduce food waste and save money
                </p>
              </div>
            </div>
            <Tabs defaultValue="users" className="mt-12 w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="users">For Users</TabsTrigger>
                <TabsTrigger value="businesses">For Businesses</TabsTrigger>
              </TabsList>
              <TabsContent value="users" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-3">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <span className="text-lg font-fugaz text-primary">1</span>
                      </div>
                      <h3 className="text-lg font-fugaz">Download the App</h3>
                      <p className="text-center text-sm text-muted-foreground mt-2">
                        Get muafar on iOS or Android and create your account
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <span className="text-lg font-fugaz text-primary">2</span>
                      </div>
                      <h3 className="text-lg font-fugaz">Browse Offers</h3>
                      <p className="text-center text-sm text-muted-foreground mt-2">
                        Find surplus food from local businesses at reduced prices
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <span className="text-lg font-fugaz text-primary">3</span>
                      </div>
                      <h3 className="text-lg font-fugaz">Collect & Enjoy</h3>
                      <p className="text-center text-sm text-muted-foreground mt-2">
                        Pick up your order during the collection window and enjoy
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="businesses" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-3">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <span className="text-lg font-fugaz text-primary">1</span>
                      </div>
                      <h3 className="text-lg font-fugaz">Sign Up</h3>
                      <p className="text-center text-sm text-muted-foreground mt-2">
                        Register your business and set up your profile
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <span className="text-lg font-fugaz text-primary">2</span>
                      </div>
                      <h3 className="text-lg font-fugaz">List Surplus</h3>
                      <p className="text-center text-sm text-muted-foreground mt-2">
                        Add your surplus food items with photos and pickup times
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <span className="text-lg font-fugaz text-primary">3</span>
                      </div>
                      <h3 className="text-lg font-fugaz">Reduce Waste & Profit</h3>
                      <p className="text-center text-sm text-muted-foreground mt-2">
                        Turn potential waste into revenue while helping the environment
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-fugaz tracking-tighter sm:text-4xl md:text-5xl">Benefits</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Why join the muafar community?
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-fugaz text-primary">For Users</div>
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-fugaz">Save Money</h3>
                      <p className="text-muted-foreground">Get quality food at up to 70% off regular prices</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-fugaz">Reduce Waste</h3>
                      <p className="text-muted-foreground">
                        Help prevent perfectly good food from ending up in landfills
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-fugaz">Discover Local Businesses</h3>
                      <p className="text-muted-foreground">Find new favorite spots in your neighborhood</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-fugaz text-primary">
                  For Businesses
                </div>
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-fugaz">Additional Revenue</h3>
                      <p className="text-muted-foreground">Turn potential waste into profit</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-fugaz">New Customers</h3>
                      <p className="text-muted-foreground">Attract eco-conscious consumers to your business</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-fugaz">Sustainability Impact</h3>
                      <p className="text-muted-foreground">
                        Reduce your environmental footprint and showcase your commitment
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      
        {/* CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-fugaz tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Make a Difference?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the Muafar community today and be part of the solution
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button disabled size="lg" variant="secondary">
                  Download App <Download className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  Register Interest <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
                <span className="text-sm font-fugaz">Coming soon to iOS and Android</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-fugaz">Muafar</span>
            </div>
            <p className="text-center text-sm text-muted-foreground max-w-md">
              Connecting businesses with consumers to reduce food waste, save money, and help the planet.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">Linkedin</span>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Link href="#" className="text-xs hover:underline underline-offset-4">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs hover:underline underline-offset-4">
                Contact Us
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Muafar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

