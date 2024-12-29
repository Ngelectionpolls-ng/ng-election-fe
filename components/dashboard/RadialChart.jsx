"use client"

import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
  } from "recharts";

  import { ChartConfig, ChartContainer } from "components/ui/chart";

  
  export default function RadialChart({title, subtitle=null, color, percent}) {

    const chartData = [
      { browser: "safari", percent: percent, fill: color },
    ]
    const chartConfig = {
      percent: {
        label: "Visitors",
      },
      safari: {
        label: "Safari",
        color: "orange",
      },
    } 
    
    return (
      <div className="flex flex-col space-y-1 w-[72px]">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full"
        >
          <RadialBarChart
            data={chartData}
            endAngle={percent * 3.6}
            innerRadius={32}
            outerRadius={56}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[32, 28]}
            />
            <RadialBar dataKey="percent" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-[16px] font-semibold"
                        >
                          {chartData[0].percent.toLocaleString()}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >                          
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        <p className="text-center text-[12px] leading-none font-semibold mt-2">
          <span>{title}</span>
          {
            subtitle && (
              <>
                <br />
                <br />
                <span className="font-normal mt-2">{subtitle}</span>
              </>
            )            
          }
        </p>  
      </div>
  )
}