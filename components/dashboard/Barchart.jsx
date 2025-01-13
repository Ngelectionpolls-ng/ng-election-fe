"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "components/ui/card";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "components/ui/chart";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "components/ui/select"


export default function Barchart({data, color}){

    const chartConfig = {
        points: {
          label: "Points",
          color: "rgba(16,46,95,0.8)",
        },
    }


    return (
        <Card>
            <CardHeader>
                <CardTitle className="w-full flex justify-between items-center">
                    <span>Overview Balance</span> 
                    <Select onValueChange={(e) => {console.log(e)}} className="h-9 text-xs">
                            <SelectTrigger className="h-9 bg-white w-[150px] text-xs rounded-full" >
                                <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b">
                                <SelectGroup>
                                    <SelectItem value="january">January</SelectItem>
                                    <SelectItem value="february">February</SelectItem>
                                    <SelectItem value="march">March</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                </CardTitle>
                <CardDescription className="w-full flex justify-between items-center mt-4">
                    <span className="text-xs">Latest Balance</span>
                    <span className="text-md text-gray-900 font-semibold">{'534,400'}</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={data}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="date"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="points" fill={color} radius={8} className="w-2" />
                </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                
                </div>
                <div className="leading-none text-muted-foreground">
                
                </div>
            </CardFooter>
            </Card>

    );
}