import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const messages = useRouteError();
  const { status, data, statusText, message } = messages;

  return (
    <div>
      <h1>{statusText} 😢</h1>
      <p>{status}</p>
      <p>{data || message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
