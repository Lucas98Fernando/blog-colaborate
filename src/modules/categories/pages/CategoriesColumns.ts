import { QTableProps } from "quasar";

const columns: QTableProps["columns"] = [
  {
    name: "id",
    align: "center",
    label: "ID",
    field: "id",
    sortable: true,
  },
  {
    name: "name",
    align: "center",
    label: "Nome",
    field: "name",
    sortable: true,
  },
  {
    name: "slug",
    align: "center",
    label: "Slug",
    field: "slug",
    sortable: true,
  },
];

export default columns;
