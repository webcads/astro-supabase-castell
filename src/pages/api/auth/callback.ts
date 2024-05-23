//callback
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import { redirectRoute } from "../auth/signin"; // Importar redirectRoute desde signin.ts

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
  const { user } = data;
  // Validar si el correo electrónico tiene la extensión @unicauca.edu.co
  if (user.email && !user.email.endsWith('@unicauca.edu.co')) {
    return new Response("Solo se permiten correos electrónicos de la Universidad del Cauca (@unicauca.edu.co)", { status: 403 });
  }

  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });

  // Dividir el full_name en nombres y apellidos
  const fullName = user.user_metadata?.full_name;
  let nombres = '';
  let apellidos = '';

  if (fullName) {
    const parts = fullName.split(' ');
    nombres = parts.slice(0, -2).join(' ');
    apellidos = parts.slice(-2).join(' ');
  }
  // Verificar si ya existe un usuario con el mismo uid_auth en la tabla usuario
  const { data: existingUsers, error: userError } = await supabase
    .from('usuario')
    .select('*')
    .eq('uid_auth', user.id);

  if (userError) {
    console.error("Error al buscar usuarios:", userError);
    // Manejar el error apropiadamente
    return new Response("Error al buscar usuarios", { status: 500 });
  }

  // Si ya existe un usuario con el mismo uid_auth, no es necesario insertar un nuevo registro
  if (existingUsers && existingUsers.length > 0) {
    console.log("El usuario ya existe en la tabla usuario. Saltando la inserción.");
  } else {
    // Insertar más campos del usuario en la tabla usuario
    const { data: userData, error: insertError } = await supabase
      .from('usuario')
      .insert([
        {
          uid_auth: user.id,
          picture: user.user_metadata?.picture,
          full_name: fullName,
          nombres: nombres,
          apellidos: apellidos,
          correo_unicauca: user.email
        }
      ]);

    if (insertError) {
      console.error("Error al insertar los datos del usuario:", insertError);
      // Manejar el error apropiadamente
      return new Response("Error al insertar los datos del usuario", { status: 500 });
    } else {
      console.log("Usuario insertado correctamente en la tabla usuario.");

      //Insert a  new carnet and related this with the user just authenticated      
      const { data: carnetData, error: carnetInsertError } = await supabase
        .from('carnet')
        .insert([
          {
            foto: user.user_metadata?.picture, // Asegúrate de tener un campo para la foto del carnet en user_metadata
            uid_auth: user.id, // Usa el ID del usuario insertado anteriormente

          }
        ]);

      if (carnetInsertError) {
        console.error("Error al insertar los datos del carnet:", carnetInsertError);
        // Manejar el error apropiadamente
        return new Response("Error al insertar los datos del carnet", { status: 500 });
      } else {
        console.log("Carnet insertado correctamente en la tabla carnet.");
      }
    }
  }

  // Redirigir al usuario a la ruta seleccionada
  return redirect(redirectRoute || "/dashboard");
};