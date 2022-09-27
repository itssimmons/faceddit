import { computed, reactive, ref } from "vue";
import { getGifs } from "@/services/giphy.service";

export default async function () {
  const state = ref<{ gifs: any }>({ gifs: {} })
  const response = await getGifs();

  const gifs = computed({
    get: () => response.data.data ?? [],
    set: (value) => (state.value.gifs = value)
  })

  return {
    gifs
  }
}