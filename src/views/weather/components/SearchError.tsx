import { useAsyncError, useRouteError } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../../../components/card';

const SearchError = () => {
    const error = useRouteError();
    const asyncError = useAsyncError();
    return (

        <Card className='flex flex-col items-center w-full h-full overflow-y-auto'>
            <CardHeader>
                <CardTitle className='underline'>
                    Error Message
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className='flex flex-col items-center'>
                    <h4 className='mb-5'>
                        {`${error}`}
                    </h4>
                    <h4>
                        {`${asyncError}`}
                    </h4>
                </CardDescription>
            </CardContent>
            <CardFooter>
                <p>
                    Most Likely, Your Input was wrong.
                    But the Error Message is not Popping up,
                    so this assumption is not exact
                </p>
            </CardFooter>
        </Card>
    );
}

export default SearchError;
