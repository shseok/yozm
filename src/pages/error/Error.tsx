import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import './error.scss';

const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      console.log('401 ERROR');
    } else if (error.status === 404) {
      console.log('404 ERROR');
    }

    return (
      <div id='error-page'>
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id='error-page'>
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>{'message' in error && <i>error.message</i>}</p>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Error;
