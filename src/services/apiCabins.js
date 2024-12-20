import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase
        .from('cabins')
        .select('*')
    if (error) {
        console.log(error);
        throw new Error('Cabins could not be loaded')
    }
    return data
}

export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

    const imageName = newCabin.image ? `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "") : null;

    const imagePath = hasImagePath ? newCabin.image : (imageName ? `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}` : null);

    let query = supabase
        .from('cabins');

    // Create a new cabin
    if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

    // Edit a cabin
    if (id) query = query.update({ ...newCabin, image: imagePath })
        .eq('id', id)
        .select();

    const { data, error } = await query.select().single();

    if (error) {
        console.log(error);
        throw new Error('Cabin could not be created');
    }

    // Upload images if imageName is not null
    if (hasImagePath) return data;
    const { error: storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image);

    // Delete a cabin if there is an error uploading images
    if (storageError) {
        await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id);
        console.log(storageError);
        throw new Error('Cabins image could not be uploaded and the cabin was not created');
    }

    return data;
}

export async function deleteCabin(id) {
    const { error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        console.log(error);
        throw new Error('Cabin could not be deleted');
    }
    return error;
}