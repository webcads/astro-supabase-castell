import { supabase } from "../../lib/supabase";

export async function getUserDataByEmail(email) {
    console.log("Email del usuario:" +  email)
    try {
        let { data: usuario, error } = await supabase
            .from('usuario')
            .select('*')
            .eq('correo_unicauca', email)
            .single();
        
        if (error) {
            console.error('Error al recuperar datos del usuario:', error.message);
            return null;
        }

        return usuario;
    } catch (error) {
        console.error('Error al recuperar datos del usuario:', error.message);
        return null;
    }
}
