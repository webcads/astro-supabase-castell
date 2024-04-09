// callback
// import type { APIRoute } from "astro";
// import { supabase } from "../../../lib/supabase";

// export const GET: APIRoute = async ({ url, cookies, redirect }) => {
//   const authCode = url.searchParams.get("code");

//   if (!authCode) {
//     return new Response("No code provided", { status: 400 });
//   }

//   const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

//   if (error) {
//     return new Response(error.message, { status: 500 });
//   }

//   const { access_token, refresh_token } = data.session;

//   cookies.set("sb-access-token", access_token, {
//     path: "/",
//     secure: true,
//     httpOnly: true,
//   });
//   cookies.set("sb-refresh-token", refresh_token, {
//     path: "/",
//     secure: true,
//     httpOnly: true,
//   });
//   return redirect("/dashboard");
// };
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");

  if (!authCode) {
    return new Response("No code provided", { status: 400 });
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const { access_token, refresh_token } = data.session;

  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });

  // Redireccionar al usuario al dashboard
  return redirect("/dashboard");
};

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const userData = await request.json(); // Obtener los datos del usuario desde el cuerpo de la solicitud
  
  // Aquí puedes usar userData.uid para relacionar con la tabla de usuario
  // Insertar el usuario en la tabla de usuario o realizar otras operaciones según tus necesidades
  
  return new Response("User data received and processed", { status: 200 });
};
