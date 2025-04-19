import { useRouteError } from 'react-router-dom'

export default function MovieSearchError() {
    const error = useRouteError();
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-[3rem] underline offset-underline-[3px] '>Error</h1>
            {error?.message}
        </div>
    )
}
