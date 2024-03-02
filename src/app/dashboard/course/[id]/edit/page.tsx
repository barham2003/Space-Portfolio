import EditForm from "./edit-form";

export default function page({ params }: { params: { id: string } }) {
  return (
    <main>
      <EditForm id={+params.id} />
    </main>
  );
}
