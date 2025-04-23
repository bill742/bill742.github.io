import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <h3 className="header">
        <BriefcaseBusiness className="text-slate-500" /> Portfolio
      </h3>
      <div className="flex flex-col gap-4 md:flex-row">
        <Card>
          <CardHeader>
            <CardTitle>NextJS Boilerplate</CardTitle>
            <CardDescription>
              A boilerplate for quickly starting NextJS projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            This is a boilerplate I created to use for my NextJS projects. It
            includes TailwindCSS, TypeScript, and a few other libraries to get
            up and runnning quickly.
          </CardContent>
          <CardFooter className="flex gap-6">
            <Button>
              <Link
                href="https://github.com/bill742/nextjs-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2"
              >
                <SiGithub className="h-6 w-6" />
                Github
              </Link>
            </Button>
            <Button>
              <Link
                href="https://nextjs-boilerplate-three-iota-34.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
