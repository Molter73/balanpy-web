export const feed_activity = {
    src: "/dashboard/food.svg",
    alt: "comida",
    background: "bg-balanpy-800",
}

export const feed_state = {
    text: "Completado",
    background: "bg-balanpy-700",
}

export const incomplete_activity = {
    src: "/dashboard/question.svg",
    alt: "actividad incompleta",
    background: "bg-gray-500",
}

export const incomplete_state = {
    text: "No History",
    background: "bg-gray-500",
}

const incompleteActivity = {
  icon: incomplete_activity,
  type: "-",
  time: "-",
  info: "-",
  state: incomplete_state,
};

export const activitiesData = [
  {
    icon: feed_activity,
    type: "Comida",
    time: "4:48:24 PM",
    info: "400 gr",
    state: feed_state,
  },
  incompleteActivity,
  incompleteActivity,
  incompleteActivity,
];
export const noPetsActivitiesData = [
  incompleteActivity,
  incompleteActivity,
  incompleteActivity,
  incompleteActivity,
];


export const pets = [
  {
    icon: {
      src: "/dashboard/dog.svg",
      alt: "perro",
    },
    text: "Perro",
    cantidad: 1,
  },
  {
    icon: {
      src: "/dashboard/cat.svg",
      alt: "gato",
    },
    text: "Gato",
    cantidad: 0,
  },
  {
    icon: {
      src: "/dashboard/hamster.svg",
      alt: "hamster",
    },
    text: "Hámster",
    cantidad: 0,
  },
  {
    icon: {
      src: "/dashboard/bird.svg",
      alt: "pajaro",
    },
    text: "Pájaro",
    cantidad: 0,
  },
];

export const months = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec",
]

export const navigation = [
    {
        href: "#dashboard",
        text: "Dashboard",
        image: {
            src: "/dashboard/dashboard.svg",
            alt: "dashboard",
        },
    },
    {
        href: "#tus-mascotas",
        text: "Tus mascotas",
        image: {
            src: "/dashboard/mascotas.svg",
            alt: "tus-mascotas",
        },
    },
    {
        href: "#veterinarios",
        text: "Veterinarios",
        image: {
            src: "/dashboard/veterinarios.svg",
            alt: "veterinarios",
        },
    },
    {
        href: "#tus-citas",
        text: "Tus Citas",
        image: {
            src: "/dashboard/tus-citas.svg",
            alt: "tus-citas",
        },
    },
    {
        href: "#ajustes",
        text: "Ajustes",
        image: {
            src: "/dashboard/ajustes.svg",
            alt: "ajustes",
        },
    },
]
