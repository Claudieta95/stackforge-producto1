
// Usuarios de ejemplo
export const usuarios = [
  {
    id: 1,
    nombre: "María",
    email: "maria@email.com",
    password: "1234"
  },
  {
    id: 2,
    nombre: "Laura",
    email: "laura@email.com",
    password: "1234"
  }
];

// Ofertas y peticiones de intercambio de idiomas
export const intercambios = [
  {
    id: 1,
    tipo: "oferta",
    idiomaOfrecido: "Español",
    idiomaSolicitado: "Inglés",
    modalidad: "Online",
    usuarioId: 1,
    descripcion: "Ofrezco practicar español a cambio de inglés."
  },
  {
    id: 2,
    tipo: "peticion",
    idiomaOfrecido: "Francés",
    idiomaSolicitado: "Español",
    modalidad: "Presencial",
    usuarioId: 2,
    descripcion: "Busco a alguien con quien practicar español y puedo ayudarle con francés."
  }
];
