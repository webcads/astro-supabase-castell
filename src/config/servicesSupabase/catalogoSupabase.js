import { supabase } from "../../lib/supabase";

export async function getCatalogosFromSupabase() {
  try {
    let { data: catalogo, error } = await supabase
      .from('catalogo')
      .select('*,product(*)');
      
    if (error) {
      console.error('Error al recuperar Catalogos:', error.message);
      return [];
    }

    return catalogo;
  } catch (error) {
    console.error('Error al recuperar Catalogos:', error.message);
    return [];
  }
}

  

  