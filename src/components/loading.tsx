import { RingLoader } from "react-spinners";

const Loading = () => {
    const chooseLoader = Math.floor(Math.random() + 1);
    console.log(chooseLoader);
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            {chooseLoader === 1 &&
                <RingLoader size={5} />
            }
        </div>
    )
}
export default Loading;