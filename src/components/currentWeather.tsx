import { useGeoLocation } from "@/backend/getIp";
import Loading from "./loading";
import { HoverCard, HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Link } from "react-router-dom";

const CurrentWeather = () => {
    const { data, error, isLoading } = useGeoLocation();
    if (error !== null) {
        throw Error(`Not Working!! (Geolocation) Error: ${error}`)
    }

    if (isLoading) {
        return <Loading />
    }

    const encoded = encodeURIComponent(`${data?.location.region}, ${data?.location.country}`);
    return (
        <div className="size-full">
            <HoverCard>
                <HoverCardTrigger className="size-full p-1 flex flex-col items-center rounded-full border-solid border-1 border-slate-500 bg-gray-700 hover:bg-slate-900 dark:bg-transparent hover:dark:bg-gray-700 hover:cursor-pointer">
                    <Link to={`/weather/${encoded}`}>
                        <img
                            src={data?.current.condition.icon}
                            alt={`${data?.current.condition.text} Icon`}
                            className="w-[2.3dvw]"
                        />
                    </Link>
                </HoverCardTrigger>
                <HoverCardPortal>
                    <HoverCardContent>
                        <div className="w-[15dvw] min-h-[15dvh] p-2 bg-white dark:bg-slate-900 border-gray-300 dark:border-gray-600 border-solid border-1 rounded-xl ">
                            <div className="flex flex-row">

                                <div className="flex flex-col">
                                    <div className="size-[3dvw] p-1 border-solid border-1 border-slate-400 rounded-full">
                                        <img
                                            src={data?.current.condition.icon}
                                            alt={`${data?.current.condition.text} Icon`}
                                            className="w-[2.3dvw]"
                                        />
                                    </div>
                                    <h3>{data?.current.condition.text}</h3>

                                    <p>{data?.current.feelslike_f}</p>
                                </div>

                                <div className="flex">

                                </div>
                            </div>


                        </div>

                        <HoverCardArrow />
                    </HoverCardContent>
                </HoverCardPortal>

            </HoverCard>


        </div >
    )
}

export default CurrentWeather;
