import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
  Section,
} from "@/components/ui";
import { SITE_NAME } from "@/constants/site";

export default function HomePage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <Badge variant="teal">Design System</Badge>
          <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
            {SITE_NAME}
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            Luxury architectural design system — charcoal, teal, silver palette.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="teal" size="lg">
              Primary Action
            </Button>
            <Button variant="outline" size="lg">
              Secondary
            </Button>
          </div>
          <Card className="w-full max-w-md text-left">
            <CardHeader>
              <CardTitle>Design Tokens Ready</CardTitle>
              <CardDescription>
                Typography, spacing, shadows, and brand components are
                configured.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="charcoal">Charcoal</Badge>
                <Badge variant="teal">Teal</Badge>
                <Badge variant="silver">Silver</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
