import { BriefcaseBusiness } from "lucide-react";

import { Card, CardContent } from "@/components//ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { portfolioData } from "@/data/portfolio";

import PortfolioCard from "../portfolio-card";

const Portfolio = () => {
  return (
    <section className="section" id="projects">
      <h3 className="header">
        <BriefcaseBusiness className="text-primary" aria-label="Projects" />{" "}
        Projects
      </h3>
      <Card>
        <CardContent>
          <Accordion type="single" collapsible>
            {portfolioData.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-foreground bg-card border-border text-lg font-semibold">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <PortfolioCard
                    title={item.title}
                    description={item.description}
                    content={item.content}
                    githubLink={item.githubLink}
                    demoLink={item.demoLink}
                    techStack={item.techStack}
                    image={item.image}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};

Portfolio.displayName = "Portfolio";

export default Portfolio;
