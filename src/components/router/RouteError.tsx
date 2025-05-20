import { useRouteError } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, but the page you're looking for does not exist!</p>
      <p>
        <i>{error.status + " " + error.statusText || error.message}</i>
      </p>
    </div>
  );
};
