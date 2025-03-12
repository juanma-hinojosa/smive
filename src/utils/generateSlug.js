export function generateSlug(name) {
    return name
      .toLowerCase()
      .normalize("NFD") // Elimina tildes
      .replace(/[\u0300-\u036f]/g, "") // Remueve diacríticos
      .replace(/[^a-z0-9\s-]/g, "") // Elimina caracteres especiales
      .trim()
      .replace(/\s+/g, "-"); // Reemplaza espacios por guiones
  }
  