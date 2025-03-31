"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const initialCheck = () => {
      setScrolled(window.scrollY > 0)
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "backdrop-blur-lg bg-background/100 border-b border-border/40 supports-[backdrop-filter]:bg-background/60"
          : "!bg-transparent !border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className={`text-xl font-fugaz ${!scrolled ? "text-white" : "text-primary"}`}>Muafar</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex gap-6">
              <NavigationMenuItem>
                <Link href="#how-it-works" legacyBehavior passHref>
                  <NavigationMenuLink className={`text-sm font-medium transition-colors hover:text-primary ${!scrolled ? "text-white" : ""}`}>
                    How It Works
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#benefits" legacyBehavior passHref>
                  <NavigationMenuLink className={`text-sm font-medium transition-colors hover:text-primary ${!scrolled ? "text-white" : ""}`}>
                    Benefits
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className={`text-sm font-medium transition-colors hover:text-primary ${!scrolled ? "text-white" : ""}`}>
            Log in
          </Link>
          <Button variant={!scrolled ? "outline" : "default"} className={!scrolled ? "bg-white/10 backdrop-blur-sm text-white border-white/20 hover:text-primary hover:bg-white/20" : ""}>
            Sign up
          </Button>
          <ThemeToggle color={!scrolled ? "white": "black"} />
        </div>
      </div>
    </header>
  )
} 