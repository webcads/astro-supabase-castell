import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  // Obtener los datos del formulario del cuerpo de la solicitud
  const { email, rh, foto } = await request.json();

  // Verificar si el correo electrónico del usuario está presente
  if (!email) {
    return redirect("/email no encontrado");
  }

  // Verificar si el usuario ya existe en la tabla de usuarios
  let { data: existingUser, error: searchError } = await supabase
    .from("usuario")
    .select("*")
    .eq("correo_unicauca", email)
    .single();

  if (searchError) {
    return redirect("/error al buscar usuario");
  }



  // Insertar los datos del carné en la tabla de carnés
  const { data: carnetData, error: carnetInsertError } = await supabase
    .from("carnet")
    .insert([{ usuario_id: existingUser.id, rh, foto }]);

  if (carnetInsertError) {
    return new Response(
      JSON.stringify({ error: "Error al insertar datos del carné" }),
      { status: 500 }
    );
  }

  // Redirigir al usuario a la página de carné digital
  return redirect("/carnetdigital");
};
