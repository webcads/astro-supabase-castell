import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request,redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const rh = formData.get("rh") as string;
  const identificacion = formData.get("identificacion") as string;

  // Verificar si el correo electrónico del usuario está presente
  if (!email) {
    return new Response("Email no encontrado", { status: 400 });
  }

  // Verificar si el usuario ya existe en la tabla de usuarios
  const { data: existingUser, error: searchError } = await supabase
    .from("usuario")
    .select("*")
    .eq("correo_unicauca", email)
    .single();

  if (searchError || !existingUser) {
    return new Response("Error al buscar usuario", { status: 404 });
  }

  // Insertar los datos del carné en la tabla de carnés
  const { data: carnetData, error: carnetInsertError } = await supabase
    .from("carnet")
    .insert([{ usuario_id: existingUser.id, rh, identificacion }])
    .select();

  if (carnetInsertError) {
    return new Response(
      JSON.stringify({ error: "Error al insertar datos del carné" }),
      { status: 500 }
    );
  }

  // Redirigir al usuario a la página de carné digital
  return    redirect("/carnetdigital");
};
