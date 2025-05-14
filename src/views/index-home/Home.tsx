import { Link } from "react-router-dom";

import './Home.css'

export default function Home() {
    // I want to use YT iframe api
    // https://developers.google.com/youtube/iframe_api_reference
    return (
        <div className="p-3 w-full h-full">
            <div className="w-full p-2 flex flex-col items-center gap-3 bg-white shadow-lg shadow-dark dark:bg-slate-800 dark:shadow-slate-400  rounded-xl">
                <div id="heil-hitler">
                    <iframe
                        src="https://video.twimg.com/amplify_video/1920386993025892352/vid/avc1/480x270/ighxbGVwNQgiWkov.mp4?tag=21"
                        allowFullScreen
                        width={1000}
                        height={500}
                        className="border-rigid rounded-xl"
                    />
                    <div className="w-full text-center">
                        <Link to={'https://x.com/i/status/1920387087049572704'} target="_blank" className="w-[20%] m-1 relative inline-block no-underline wave-loop overflow-y-hidden">
                            Link to Video
                        </Link>
                    </div>

                </div>
                <div className="flex flex-row" id="yeezy-img">
                    <div className="text">
                        This is the Home, where everything happens.
                    </div>
                    <Link to={'https://yeezy.com/'} target="_blank">
                        <img
                            src="https://yeezy.com/_next/image?url=%2FYeezy-stores-coming-soon.jpg&w=1920&q=75"
                            alt="Yeezy Store Image"
                            width={500}
                            className="rounded-full"
                        />
                    </Link>

                </div>

            </div>

        </div>
    )
}