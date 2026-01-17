import Head from 'next/head'
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, Input, TextArea } from '@/components/ui'
import { Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Head>
        <title>klauser designs & coaching</title>
        <meta name="description" content="AI Consultancy für Schweizer KMUs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="mb-8">
            <Badge variant="primary" className="mb-4">
              <Sparkles className="mr-1 h-3 w-3" />
              KI-Beratung
            </Badge>
            <h1 className="text-4xl font-bold text-primary mb-4">
              klauser designs & coaching
            </h1>
            <p className="text-lg text-neutral-slate mb-6">
              AI Consultancy für Schweizer KMUs
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Discovery Call buchen</Button>
              <Button variant="outline">Mehr erfahren</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>KI-Prompt-Engineering</CardTitle>
                <CardDescription>
                  Optimierung von KI-Prompts für Video- und Bildgenerierung
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge>Video</Badge>
                  <Badge>Bilder</Badge>
                  <Badge>Prompts</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Anwendungsentwicklung</CardTitle>
                <CardDescription>
                  Low/Mid-Level Entwicklung von KI-gestützten Anwendungen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge>Web Apps</Badge>
                  <Badge>APIs</Badge>
                  <Badge>Integration</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Kontakt aufnehmen</CardTitle>
              <CardDescription>
                Füllen Sie das Formular aus und wir melden uns bei Ihnen
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input label="Name" placeholder="Ihr Name" required />
              <Input label="E-Mail" type="email" placeholder="ihre@email.ch" required />
              <TextArea label="Nachricht" placeholder="Wie können wir Ihnen helfen?" required />
              <Button variant="primary" className="w-full">
                Absenden
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
