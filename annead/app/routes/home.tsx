import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return (
    <>
    <blockquote>Welcome to Annead's new website | ENG</blockquote>
    <blockquote>Benvinguts al lloc web d'Annead.| CAT</blockquote>
    <blockquote>Website in Development | El lloc web esta en desenvolupament.</blockquote>
    </>
  );
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_VERCEL };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />;
}
