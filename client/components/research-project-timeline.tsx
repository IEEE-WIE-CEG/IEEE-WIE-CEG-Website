import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { CheckCircle2, CircleDot, Flag } from "lucide-react"

export interface ResearchProjectTimelineItem {
  title: string
  description: string
  period?: string
  status?: "completed" | "in-progress" | "upcoming"
}

const statusConfig: Record<NonNullable<ResearchProjectTimelineItem["status"]>, { label: string; icon: typeof CheckCircle2 }> = {
  "completed": { label: "Completed", icon: CheckCircle2 },
  "in-progress": { label: "In Progress", icon: CircleDot },
  "upcoming": { label: "Upcoming", icon: Flag }
}

interface ResearchProjectTimelineProps {
  items: ResearchProjectTimelineItem[]
  className?: string
}

const ROW_HEIGHT = 220
const HALF_ROW = ROW_HEIGHT / 2
const SVG_WIDTH = 220

export function ResearchProjectTimeline({ items, className }: ResearchProjectTimelineProps) {
  const nodes = items.map((_, index) => ({
    cx: index % 2 === 0 ? 60 : SVG_WIDTH - 60,
    cy: HALF_ROW + index * ROW_HEIGHT,
  }))

  const svgHeight = Math.max(ROW_HEIGHT * items.length, ROW_HEIGHT)

  const polylinePoints = nodes.map((node) => `${node.cx},${node.cy}`).join(" ")

  return (
    <div
      className={cn("relative", className)}
      style={{ paddingTop: `${HALF_ROW}px`, paddingBottom: `${HALF_ROW}px` }}
    >
      <div className="hidden md:block pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
        <svg
          width={SVG_WIDTH}
          height={svgHeight}
          viewBox={`0 0 ${SVG_WIDTH} ${svgHeight}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {items.length > 1 && (
            <polyline
              points={polylinePoints}
              stroke="#7E22CE"
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          {nodes.map((node, index) => (
            <g key={`${node.cx}-${node.cy}`}>
              <circle cx={node.cx} cy={node.cy} r={20} fill="#F6EEFF" stroke="#E9D5FF" strokeWidth={4} />
              <circle cx={node.cx} cy={node.cy} r={8} fill="#7E22CE" />
              <text
                x={node.cx}
                y={node.cy + 4}
                textAnchor="middle"
                fontSize={12}
                fill="#581C87"
                fontWeight={600}
              >
                {index + 1}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="space-y-10 md:space-y-0">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0
          const statusMeta = item.status ? statusConfig[item.status] : undefined

          return (
            <div
              key={`${item.title}-${index}`}
              className="relative md:grid md:grid-cols-[1fr,220px,1fr] md:items-center md:h-[220px]"
            >
              <div
                className={cn(
                  "hidden md:flex md:items-center md:pr-12",
                  isLeft ? "md:justify-end" : "md:justify-end opacity-0 pointer-events-none"
                )}
                aria-hidden={!isLeft}
              >
                {isLeft && (
                  <TimelineCard item={item} align="right" statusMeta={statusMeta} className="md:-translate-y-10" />
                )}
              </div>

              <div className="hidden md:block" aria-hidden="true" />

              <div
                className={cn(
                  "hidden md:flex md:items-center md:pl-12",
                  !isLeft ? "md:justify-start" : "opacity-0 pointer-events-none"
                )}
                aria-hidden={isLeft}
              >
                {!isLeft && (
                  <TimelineCard item={item} align="left" statusMeta={statusMeta} className="md:-translate-y-10" />
                )}
              </div>

              <div className="md:hidden relative pl-10">
                <span className="absolute left-3 top-0 h-full w-px bg-purple-200" aria-hidden="true" />
                <span className="absolute left-2.5 top-3 h-4 w-4 rounded-full border-2 border-purple-300 bg-white" aria-hidden="true" />
                <TimelineCard item={item} align="left" statusMeta={statusMeta} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

interface TimelineCardProps {
  item: ResearchProjectTimelineItem
  align: "left" | "right"
  statusMeta?: { label: string; icon: typeof CheckCircle2 }
  className?: string
}

function TimelineCard({ item, align, statusMeta, className }: TimelineCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-purple-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:max-w-sm md:h-full md:flex md:flex-col md:justify-center",
        align === "right" ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left",
        className
      )}
    >
      {statusMeta && (
        <Badge
          variant="secondary"
          className={cn(
            "mb-3 inline-flex items-center gap-2",
            align === "right" ? "md:ml-auto" : ""
          )}
        >
          <statusMeta.icon className="h-4 w-4" />
          {statusMeta.label}
        </Badge>
      )}
      <h3 className="text-lg font-semibold text-purple-900">{item.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      {item.period && (
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-purple-600">
          {item.period}
        </p>
      )}
    </div>
  )
}

export default ResearchProjectTimeline
