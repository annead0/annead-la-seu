import {
  isRouteErrorResponse,
  Links,
  Link,
  Outlet,
  Meta,
  Scripts,
  ScrollRestoration,
} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import logo from "../public/image.png"
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  /*{
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },*/
  { rel: "stylesheet", href: stylesheet },
  {rel:"icon",type:"image/x-icon", href:logo}
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta/>
        <Links/>
        <link rel="icon" type="image/x-icon" href="../public/image.png"/>
      </head>
      <body>
        <nav>
          <div className="logo"><h1>Annead</h1></div>
          <Link className="link" to="/"><h3>Casa|Home</h3></Link>
          <img src={logo} className="logoImg"/>
        </nav>
        <div id="detail">
          <div className="container">
          <Outlet/>
          </div>
        </div>
      </body>
    </html>
    </>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
