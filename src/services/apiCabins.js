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

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    
    const { data, error } = await supabase
        .from('cabins')
        .insert([{ ...newCabin, image: imagePath }])
        .select()
        .single()

    if (error) {
        console.log(error);
        throw new Error('Cabin could not be created')
    }
    //upload images
    const { error: storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image,)

    // delete a cabin if there is an error uploading images
    if (storageError) {
        await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id)
        console.log(error);
        throw new Error('Cabins image could not be uploaded and the cabin was not created')
    }
    return data
}

export async function deleteCabin(id) {
    const { error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)

    if (error) {
        console.log(error);
        throw new Error('Cabin could not be deleted')
    }
    return error
}