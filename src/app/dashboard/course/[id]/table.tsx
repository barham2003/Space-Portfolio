import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getForms } from "@/actions";

export default async function TableComponent({ id }: { id: number }) {
  const forms = await getForms(id);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>University</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {forms.map((form) => (
            <TableRow key={form.id}>
              <TableCell>{form.name}</TableCell>
              <TableCell>{form.university}</TableCell>
              <TableCell>{form.age}</TableCell>
              <TableCell>{form.phone}</TableCell>
              <TableCell>{form.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
