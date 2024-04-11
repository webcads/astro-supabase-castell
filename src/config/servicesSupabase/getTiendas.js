import { supabase } from "../../lib/supabase";

export async function getTiendasFromSupabase() {
    try {
      let { data: tienda, error } = await supabase
        .from('tienda')
        .select('*,catalogo(*)');
        
      if (error) {
        console.error('Error al recuperar tiendas:', error.message);
        return [];
      }
  
      return tienda;
    } catch (error) {
      console.error('Error al recuperar tiendas:', error.message);
      return [];
    }
  }

  