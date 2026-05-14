import Link from "next/link"
import { Button } from "@/components/ui/button"

const prototypes = [
  {
    name: "Login",
    href: "/prototypes/login",
  },
  {
    name: "Signup",
    href: "/prototypes/signup",
  },
  {
    name: "Dashboard",
    href: "/prototypes/dashboard",
  },
]

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">7357</h1>
          <p className="text-sm text-muted-foreground">
            A test project for 7357.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {prototypes.map((prototype) => (
              <Link
                href={prototype.href}
                key={prototype.name}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {prototype.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
