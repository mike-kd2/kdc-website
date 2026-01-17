import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@/components/ui'
import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

export function ServiceCard({ icon: Icon, title, description, tags }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardHeader>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
