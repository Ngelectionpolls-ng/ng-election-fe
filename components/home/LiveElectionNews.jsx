"use client"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

export default function LiveElectionNews() {
    const news = [
        {
            time: "2 mins ago",
            title: "Election Tribunal",
            excerpt: "It is a long established fact that a reader will be distracted by the  ",
        },
        {
            time: "2 mins ago",
            title: "Election Tribunal",
            excerpt: "It is a long established fact that a reader will be distracted by the  ",
        },
        {
            time: "2 mins ago",
            title: "Election Tribunal",
            excerpt: "It is a long established fact that a reader will be distracted by the  ",
        }
    ];
    return (
        <div className="md:w-1/2 px-4">
            <div className="flex flex-col w-full bg-green-900  p-8 h-full justify-left">
                <div className="bg-white/50 h-full w-full p-4 ">
                    <h2 className="text-green-900 text-md font-bold">Live Election Coverage</h2>

                    <div className="flex space-y-2 flex-wrap">

                        {
                            news.map(aNews => (
                                <Card className="w-full text-sm p-3 space-y-2">
                                    <CardHeader className="p-0">
                                        <CardTitle>{aNews.title}</CardTitle>
                                        <CardDescription>{""}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-xs p-0">
                                        {aNews.excerpt}
                                    </CardContent>
                                    <CardFooter className="flex justify-between p-0">        
                                        <Button variant="goust" className="text-xs text-blue-700 -mx-4">Read More...</Button>
                                    </CardFooter>
                                </Card>
                            ))
                        }

                    </div>                    
                </div>
                <Button variant="goust" className="text-xs text-white -mx-4 w-[100px] mt-4">More Posts...</Button>
            </div>
        </div>
    )
}