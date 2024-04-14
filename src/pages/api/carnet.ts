// Importar las dependencias necesarias
import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";
let mail = "";
// Definir la ruta POST para actualizar la información de un usuario
export const POST: APIRoute = async ({ request, redirect }) => {
  
    // Obtener los datos del formulario del cuerpo de la solicitud
    const { identificacion, rh, email } = await request.json(); // Supongamos que correo_unicauca es el ID del usuario obtenido de alguna manera
    mail = email;
    // Verificar si el email del usuario está presente
    if (!email) {
      // Si el ID del usuario no está presente, devolver un error
      return redirect("email no encontrado");
    }

    // Verificar si el usuario ya tiene identificación y tipo de sangre establecidos
    const { data: existingUser, error: searchError } = await supabase
      .from("usuario")
      .select("identificacion, rh")
      .eq("correo_unicauca", email)
      .single();

    if (searchError) {
      return redirect("error isnertar user");
    }

    // Si el usuario ya tiene identificación y tipo de sangre establecidos, o si los campos proporcionados no son nulos, redirigir a /carnetdigital
    if (existingUser && (existingUser.identificacion !== null && existingUser.rh !== null) || (identificacion !== null && rh !== null)) {
      return redirect("/carnetdigital");
    }

    // Si el usuario no tiene identificación o tipo de sangre establecidos y los campos proporcionados no son nulos, actualizar la información
    const { data: updateData, error: updateError } = await supabase
      .from("usuario")
      .update({
        identificacion,
        rh,
      })
      .eq("correo_unicauca", email);

    if (updateError) {
      // Manejar el error si ocurre
      return new Response(
        JSON.stringify({
          error: "Error al actualizar la información del usuario",
        }),
        { status: 500 },
      );
    }

    // // Redirigir a /carnetdigital al finalizar
    return redirect("/carnetdigital");
  
};
