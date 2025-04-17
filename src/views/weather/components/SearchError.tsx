import { useRouteError } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../../../components/card';

const SearchError = () => {
    const error = useRouteError();
    return (

        <Card className='flex flex-col items-center w-full h-[60vh] overflow-y-auto'>
            <CardHeader>
                <CardTitle className='underline'>
                    Error Message
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <p>
                        Most Likely, Your Input was wrong.
                        But the Error Message is not Popping up,
                        so this assumption is not exact
                        {error?.message}
                    </p>
                </CardDescription>
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    );
}

export default SearchError;
