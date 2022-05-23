const columns: any = [
  {
    name: "id",
    align: "center",
    label: "ID",
    field: "id",
    sortable: true,
  },
  {
    name: "title",
    align: "center",
    label: "Título",
    field: "title",
    sortable: true,
  },
  // {
  //   name: "name",
  //   required: true,
  //   label: "Dessert (100g serving)",
  //   align: "left",
  //   field: (row: { name: string }) => row.name,
  //   format: (val: string) => `${val}`,
  //   sortable: true,
  // },
  // {
  //   name: "calories",
  //   align: "center",
  //   label: "Calories",
  //   field: "calories",
  //   sortable: true,
  // },
  // { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  // { name: "carbs", label: "Carbs (g)", field: "carbs" },
  // { name: "protein", label: "Protein (g)", field: "protein" },
  // { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  // {
  //   name: "calcium",
  //   label: "Calcium (%)",
  //   field: "calcium",
  //   sortable: true,
  //   sort: (a: string, b: string) => parseInt(a, 10) - parseInt(b, 10),
  // },
  // {
  //   name: "iron",
  //   label: "Iron (%)",
  //   field: "iron",
  //   sortable: true,
  //   sort: (a: string, b: string) => parseInt(a, 10) - parseInt(b, 10),
  // },
];

export default columns;
